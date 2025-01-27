'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useAtom, useAtomValue } from 'jotai';
import type { ReactNode } from 'react';
import { modalOps } from '~/atoms/mentor.atom';
import { Button } from './button';

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  const openModalAtom = useAtomValue(modalOps);
  return (
    <Dialog.Root open={openModalAtom} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: any;
  children: ReactNode;
}) {
  const [_, closeModal] = useAtom(modalOps);
  return (
    <Dialog.Portal>
      <Dialog.Trigger />
      <Dialog.Overlay className="fixed inset-0 bg-black/50 p-4 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-full max-w-3xl rounded-md bg-white text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
        <Dialog.Title className="flex flex-row justify-between px-8 py-4 font-bold text-xl">
          {title}
          <Dialog.Close className="text-gray-400 hover:text-gray-500" asChild>
            <Button
              variant={'ghost'}
              onClick={() => {
                closeModal(false);
              }}
            >
              <Cross1Icon />
            </Button>
          </Dialog.Close>
        </Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
