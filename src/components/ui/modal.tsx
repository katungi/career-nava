"use client"

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export default function Modal({
    open,
    onOpenChange,
    children,
}: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
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
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
                <div className="flex items-center justify-between bg-primary p-8">
                    <Dialog.Title className="text-xl flex flex-row"> 
                        <img src="/images/winner.png" alt="logo" className="h-64 w-64" />
                        <div className="">
                        {title}
                        </div>
                    </Dialog.Title>
                    <Dialog.Close className="text-gray-400 hover:text-gray-500" asChild>
                        <Cross1Icon />
                    </Dialog.Close>
                </div>
                {children}
            </Dialog.Content>
        </Dialog.Portal>
    );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;