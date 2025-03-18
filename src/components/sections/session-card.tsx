import React from 'react';
import { Calendar, Clock, MoreVertical } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import Link from 'next/link';


interface SessionCardProps {
  title: string;
  date?: string;
  time?: string;
  description?: string;
  status?: string;
  meetingLink?: string;
  mentor?: {
    name: string;
    email: string;
    image?: string;
  };
  className?: string;
}

const SessionCard = ({ 
  title,
  date = '10-11-2023',
  time = '02:00pm',
  description,
  status = 'Upcoming',
  meetingLink = '#',
  mentor,
  className
}: SessionCardProps) => {
    return (
        <div className={`session-card group bg-white rounded-lg shadow-lg p-6 max-w-sm ${className}`}>
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">{title}</h3>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" type="button">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
                        <DropdownMenuItem>Cancel Session</DropdownMenuItem>
                        <DropdownMenuItem>Add to Calendar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            <div className="flex space-x-4 my-3">
                <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {date}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {time}
                </div>
            </div>
            
            <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-medium text-primary">
                    {status}
                </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarFallback className="bg-primary text-white">
                            {mentor?.name?.charAt(0) ?? 'U'}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">{mentor?.name}</p>
                        <p className="text-xs text-muted-foreground">{mentor?.email}</p>
                    </div>
                </div>
                
                <Button asChild className="bg-primary hover:bg-secondary hover:text-background">
                    <Link href={meetingLink} target='_BLANK'>Attend Session</Link>
                </Button>
            </div>
        </div>
    );
};

export default SessionCard;
