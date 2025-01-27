'use client';

import { SiGoogle } from '@icons-pack/react-simple-icons';
import { signIn } from 'next-auth/react';
import { Novatrix, Zenitho } from 'uvcanvas';

import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

export function LoginScreen() {
  const router = useRouter();
  return (
    <div className="min-h-[800px] w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="absolute inset-0 block lg:hidden [&_canvas]:h-[100vh] [&_canvas]:w-[100vw]">
          <Zenitho />
        </div>
        <div className="relative mx-auto grid w-[350px] gap-6 rounded-lg bg-background px-4 py-8">
          <div className="grid gap-2 text-center">
            <h1 className="font-bold text-3xl">Login</h1>
            <p className="text-balance text-muted-foreground">
              Login to your account to continue!
            </p>
          </div>
          <div className="grid gap-4">
            <Button
              onClick={async () =>
                await signIn('google', {
                  callbackUrl: '/app/dashboard/?loginState=signedIn',
                })
              }
              variant="outline"
              className="w-full"
            >
              <SiGoogle className="mr-2 h-4 w-4" />
              Login with Google
            </Button>
          </div>
          <Button
            variant={'ghost'}
            className="m-4 font-bold underline decoration-primary decoration-wavy"
            onClick={() => router.push('/app/signup')}
          >
            I don't have an Account
          </Button>
        </div>
      </div>
      <div className="hidden lg:block [&_canvas]:rounded-lg">
        <Novatrix />
      </div>
    </div>
  );
}
