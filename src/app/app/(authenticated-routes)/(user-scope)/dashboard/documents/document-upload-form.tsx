import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { FileUploader } from '~/components/patterns/file-upload/file-uploader';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { useUploadFile } from '~/hooks/use-upload-file';
import { api } from '~/trpc/react';

export default function DocumentUploadForm({ setFileUploaded }: any) {
  const [loading, setLoading] = useState(false);
  const schema = z.object({
    documents: z.array(z.instanceof(File)),
  });
  const utils = api.useUtils();

  const uploadDocumentMutation = api.documents.createDocument.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
    },
  });

  type Schema = z.infer<typeof schema>;
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      documents: [],
    },
  });
  const { uploadFiles, progresses, isUploading } = useUploadFile(
    'documentUploader',
    { defaultUploadedFiles: [] }
  );

  async function onSubmit(input: Schema) {
    setLoading(true);
    const toastId = toast.loading('Uploading file...');
    const res = await uploadFiles(input.documents);
    toast.dismiss(toastId);

    if (res && res.length > 0) {
      toast.success('File uploaded successfully');
      uploadDocumentMutation.mutate({
        document: res[0]?.url!,
      });
      form.reset();
      setFileUploaded(true);
    }
    if (res?.length === 0) {
      toast.error('Something went wrong during upload');
    }
    setLoading(false);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6 p-8"
        >
          <FormField
            control={form.control}
            name="documents"
            render={({ field }) => (
              <div className="space-x-6 space-y-6">
                <FormItem className="w-full">
                  <FormLabel>Documents</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      maxFiles={1}
                      progresses={progresses}
                      disabled={isUploading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <Button className="w-fit" disabled={loading}>
            Upload Document
          </Button>
        </form>
      </Form>
    </div>
  );
}
