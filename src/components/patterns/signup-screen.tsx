'use client';
import { SiGoogle } from '@icons-pack/react-simple-icons';
import { signIn } from 'next-auth/react';
import { Zenitho } from 'uvcanvas';
import { Button } from '~/components/ui/button';

export function SignUpScreen() {
  const redirect = async () => {
    await signIn('google', {
      callbackUrl: '/app/onboarding/user',
    });
  };
  return (
    <div className="min-h-[800px] w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="absolute inset-0 block lg:hidden [&_canvas]:h-[100vh] [&_canvas]:w-[100vw]">
          <Zenitho />
        </div>
        <div className="relative mx-auto grid w-[350px] gap-6 rounded-lg bg-background px-4 py-8">
          <div className="grid gap-2 text-center">
            <h1 className="font-bold text-3xl">Create an Account</h1>
            <p className="text-balance text-muted-foreground">
              Create an account to continue!
            </p>
          </div>

          <div className="mt-24 grid gap-4">
            <Button onClick={redirect} variant="outline" className="w-full">
              <SiGoogle className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block [&_canvas]:rounded-lg">
        <Zenitho />
      </div>
    </div>
  );
}
