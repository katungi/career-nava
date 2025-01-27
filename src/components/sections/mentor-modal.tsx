'use client';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import Modal from '../ui/modal';
import MentorSelection from './mentor-select';

export default function MentorModal() {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Button className="rounded p-2">
        <button className="mt-8 flex items-center rounded bg-primary px-4 py-2 font-bold text-white hover:bg-primary-dark">
          <PlusIcon className="mr-2" /> Create New Sessions
        </button>
      </Modal.Button>
      <Modal.Content
        title={
          <div className="mt-4 ml-12 flex flex-col overflow-y-scroll">
            <p className="font-bold text-4xl text-secondary">Book a Mentor </p>
          </div>
        }
      >
        <MentorSelection />
      </Modal.Content>
    </Modal>
  );
}
