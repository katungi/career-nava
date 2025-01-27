'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import type React from 'react';
import { Zenitho } from 'uvcanvas';
import { AvatarSelection } from '~/components/patterns/avatar-selection';
import { Button } from '~/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Button
        onClick={() => signOut()}
        variant="ghost"
        className="absolute top-4 left-4 z-10"
      >
        <LogOut className="mr-2 h-5 w-5" /> Sign out
      </Button>
      <div className="relative flex w-full flex-col">
        <div className="block [&_canvas]:h-[250px] [&_canvas]:w-[100vw]">
          <Zenitho />
        </div>
        <AvatarSelection />
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
};

export default Layout;
