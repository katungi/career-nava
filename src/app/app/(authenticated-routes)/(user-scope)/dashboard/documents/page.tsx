'use client';
import { Loader, PlusIcon } from 'lucide-react'; // Assuming you're using lucide-react for the icons
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import DocumentSlider from '~/components/patterns/document-slider';
import TabsComponent from '~/components/patterns/tabs';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import Modal from '~/components/ui/modal';
import { api } from '~/trpc/react';
import DocumentUploadForm from './document-upload-form';

export default function Documents() {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const { data: documents, isLoading } =
    api.documents.getUserDocuments.useQuery();
  const tabsData = [
    { title: 'All Documents' },
    { title: 'Ready for Review' },
    { title: 'Pending' },
    { title: 'Deleted' },
  ];
  return (
    <div className="mx-8 p-4">
      {/* Banner */}
      <DocumentsHeader setOpenModal={setOpenModal} />
      <Modal open={openModal} onOpenChange={setOpenModal}>
        <Modal.Content title={'Upload A Document'}>
          {fileUploaded ? (
            <DocumentUploaded setOpenModal={setOpenModal} />
          ) : (
            <DocumentUploadForm setFileUploaded={setFileUploaded} />
          )}
        </Modal.Content>
      </Modal>
      <div className="mt-10">
        <TabsComponent
          tabsData={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex w-full flex-row">
        <div className="p-3">
          <div className="flex w-full flex-row items-center justify-between p-3">
            <div className="">
              <h1 className="font-bold text-4xl text-gray-800">
                {tabsData[activeTab]?.title} Documents
              </h1>
              <p className="mt-2 text-gray-900 text-xl">
                Manage your documents, subscriptions, and billing here. You can
                also view your usage and manage your account.
              </p>
            </div>
            <div className="ml-12">
              <Button
                className="flex h-12 w-56 items-center justify-center rounded-md text-white hover:bg-secondary-dark"
                variant={'secondary'}
                onClick={() => setOpenModal(true)}
              >
                <PlusIcon className="ml-2 h-6 w-6 text-white" />
                Upload New Documents
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {isLoading ? (
          <div className="flex h-96 items-center justify-center">
            <Loader className="h-8 w-8 animate-spin rounded-full" />
          </div>
        ) : (
          <DocumentSlider sessions={documents} />
        )}
      </div>
    </div>
  );
}

const DocumentsHeader = ({ setOpenModal }: any) => {
  return (
    <div
      className="relative flex h-60 items-center justify-between rounded-xl bg-secondary text-white"
      style={{
        backgroundImage: "url('/images/bagpack.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70" />
      <div
        className="relative bg-secondary p-8"
        style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
      >
        <h1 className="font-bold text-3xl text-gray-900">My Documents</h1>
        <p className="text-gray-900 text-lg">
          Upload and manage all your documents here.
        </p>
        <Button
          className="mt-8 flex items-center rounded bg-purple-600 px-4 py-2 font-bold text-white"
          onClick={() => setOpenModal(true)}
        >
          <PlusIcon className="mr-2" /> Upload New Documents
        </Button>
      </div>

      <div className="absolute right-12 bottom-0 z-0">
        <img
          src="/images/books-doc.png"
          alt="Illustration"
          style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
          className="h-56 w-48 object-cover"
        />
      </div>
    </div>
  );
};

function DocumentUploaded({ setOpenModal }: any) {
  const router = useRouter();
  return (
    <Card className="mx-auto w-full">
      <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
        <img
          alt="Success"
          className="rounded-lg"
          height="300"
          src="/images/paper-documents.svg"
          style={{
            objectFit: 'cover',
          }}
          width="300"
        />
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-lg text-primary">
            Your documents were uploaded successfully
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            You can now view all your uploaded documents.
          </p>
        </div>
        <Button
          onClick={() => {
            router.push('/app/dashboard/documents');
            toast.info('Redirecting to Documents Page');
          }}
        >
          View all Documents
        </Button>
      </CardContent>
    </Card>
  );
}
