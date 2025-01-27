'use client';

import { Role } from '@prisma/client';
import { ChevronRight, Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { api } from '~/trpc/react';

const Onboarding = () => {
  const session = useSession();
  const router = useRouter();
  const [bio, setBio] = useState('');
  const [selectedScholarships, setSelectedScholarships] = useState<string[]>(
    []
  );

  const getUserQuery = api.user.getUser.useQuery();

  const role = getUserQuery.data?.role;

  const { data: scholarships } =
    api.scholarshipSessions.getAllScholarships.useQuery({
      limit: 1000,
    });

  const utils = api.useUtils();

  const updateUserMutation = api.user.updateUser.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
      router.push('/app/dashboard');
    },
  });

  const animatedComponents = makeAnimated();

  function handleSelectScholarships(e: any) {
    setSelectedScholarships(e);
  }

  const redirect = async () => {
    //@ts-ignore
    const values = selectedScholarships.map((scholarship) => scholarship.value);
    updateUserMutation.mutate({
      Bio: bio,
      scholarshipAffiliations: values,
    });
    toast.success('All done with onboarding! Redirecting to dashboard...');
    await router.push('/app/dashboard/?loginState=signedIn');
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-center font-bold text-4xl tracking-tight">
          {session.status === 'authenticated'
            ? `Welcome, ${getUserQuery.data?.name}`
            : 'Welcome to Pullout.so'}
        </h1>
        <h2 className="text-center text-muted-foreground text-xl">
          Almost there, add the following!
        </h2>
        <div className="mx-96 mb-4 flex max-w-5xl flex-col">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Bio (Tell us about yourself)</Label>
            <Textarea
              placeholder="Enter your bio here..."
              id="message"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {role === Role.MENTOR ? (
            <div className="mt-4">
              <Label htmlFor="message">Select Affiliated Scholarships</Label>
              <Select
                options={scholarships?.map((sc) => {
                  return {
                    value: sc.scholarshipName,
                    label: sc.scholarshipName,
                  };
                })}
                isMulti
                components={animatedComponents}
                onChange={(e: any) => handleSelectScholarships(e)}
              />
            </div>
          ) : null}
        </div>
        <div className="flex justify-center align-middle">
          <Button
            disabled={updateUserMutation.isPending}
            onClick={redirect}
            className="mx-auto w-fit"
          >
            {updateUserMutation.isPending ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ChevronRight className="mr-2 h-4 w-4" />
            )}
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
