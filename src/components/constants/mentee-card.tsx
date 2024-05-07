import { Avatar } from "@radix-ui/react-avatar";
import { Card } from "../ui/card";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";

interface MenteeCardProps {
    mentee: User
}
export default function MenteeCard({ mentee }: MenteeCardProps) {
    return (
        <Card className="w-full max-w-sm p-6 flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20">
                <AvatarImage alt="Mentee" src={mentee.image!} />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">{mentee.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{mentee.email}</p>
            </div>
        </Card>
    )
}