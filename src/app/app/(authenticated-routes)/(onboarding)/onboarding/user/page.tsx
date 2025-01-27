'use client';

import { Role } from '@prisma/client';
import { motion } from 'framer-motion';
import { ChevronRight, Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { api } from '~/trpc/react';

const Onboarding = () => {
  const session = useSession();
  const [role, setRole] = useState<any>(Role.USER);

  const utils = api.useUtils();
  const getUserQuery = api.user.getUser.useQuery();
  const updateUserMutation = api.user.updateUser.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
      router.push('/app/onboarding/settings');
    },
  });
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <motion.div
        transition={{ delay: 0.3, duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-center font-bold text-4xl tracking-tight">
          {session.status === 'authenticated'
            ? `Welcome, ${getUserQuery.data?.name || ''}`
            : 'Welcome to CareerNava'}
        </h1>
        <h2 className="text-center text-muted-foreground text-xl">
          Update your Role and avatar so we can personalize your experience!
        </h2>
      </motion.div>
      <motion.div
        transition={{ delay: 0.4, duration: 0.4 }}
        initial={{ x: '-5px', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mx-auto flex w-fit gap-2"
      >
        <div>
          <label className="sr-only" htmlFor="role">
            Role
          </label>
          <Select name="role" required onValueChange={(e: Role) => setRole(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={Role.MENTOR}>Mentor</SelectItem>
              <SelectItem value={Role.USER}>Mentee</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          disabled={updateUserMutation.isPending}
          onClick={() => {
            updateUserMutation.mutate({ role });
          }}
          className="mx-auto w-fit"
        >
          {updateUserMutation.isPending ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ChevronRight className="mr-2 h-4 w-4" />
          )}
          Next
        </Button>
      </motion.div>
    </div>
  );
};

export default Onboarding;
