"use client";

import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const Onboarding = () => {
  const session = useSession();
  const router = useRouter();

  const getUserQuery = api.user.getUser.useQuery();

  const redirect = async () => {
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
          Change your name or avatar so we can personalize your experience
        </h2>
        <div className="flex align-middle justify-center">
          <Button onClick={redirect} className='w-48 mt-12'>
            <span>Skip to Dashboard</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
