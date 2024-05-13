"use client";

import { ArrowRight, ChevronRight, Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Role } from "@prisma/client";

const Onboarding = () => {
  const session = useSession();
  const router = useRouter();
  const [bio, setBio] = useState('')
  const [selectedScholarships, setSelectedScholarships] = useState<string[]>([])

  const getUserQuery = api.user.getUser.useQuery();
  

  const role = getUserQuery.data?.role;

  const { data: scholarships } = api.scholarshipSessions.getAllScholarships.useQuery({
    limit: 1000,
  });

  const utils = api.useUtils();

  const updateUserMutation = api.user.updateUser.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
      router.push("/app/dashboard");
    },
  });

  const animatedComponents = makeAnimated();

  function handleSelectScholarships(e: any) {
    setSelectedScholarships(e)
  }

  const redirect = async () => {
    //@ts-ignore
    const values = selectedScholarships.map(scholarship => scholarship.value);
    updateUserMutation.mutate({
      Bio: bio,
      scholarshipAffiliations: values
    })
    toast.success("All done with onboarding! Redirecting to dashboard...");
    await router.push("/app/dashboard/?loginState=signedIn");
  }


  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-center text-4xl font-bold tracking-tight">
          {session.status === "authenticated"
            ? `Welcome, ${getUserQuery.data?.name}`
            : "Welcome to Pullout.so"}
        </h1>
        <h2 className="text-center text-xl text-muted-foreground">
          Almost there, add the following!
        </h2>
        <div className="flex flex-col mx-96 max-w-5xl mb-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Bio (Tell us about yourself)</Label>
            <Textarea placeholder="Enter your bio here..." id="message"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {role === Role.MENTOR ?
            <div className="mt-4">
              <Label htmlFor="message">Select Affiliated Scholarships</Label>
              <Select
                options={scholarships?.map((sc) => {
                  return { value: sc.scholarshipName, label: sc.scholarshipName }
                })}
                isMulti
                components={animatedComponents}
                onChange={(e: any) => handleSelectScholarships(e)}
              />
            </div> : null
          }

        </div>
        <div className="flex align-middle justify-center">
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
