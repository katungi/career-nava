import type { User } from '@prisma/client';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card } from '../ui/card';

interface MenteeCardProps {
  mentee: User;
}
export default function MenteeCard({ mentee }: MenteeCardProps) {
  return (
    <Card className="flex max-w-sm flex-col items-center gap-4 p-6">
      <Avatar className="h-20 w-20 rounded-full">
        <AvatarImage alt="Mentee" src={mentee.image!} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-center">
        <h3 className="font-semibold text-xl">{mentee.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{mentee.email}</p>
      </div>
    </Card>
  );
}
