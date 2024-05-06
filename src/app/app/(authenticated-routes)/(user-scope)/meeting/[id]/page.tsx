import { Metadata } from "next";
import MeetingPageComponent from "./MeetingComponent";

interface PageProps {
    params: { id: string; };
}

export function generateMetadata({ params: { id } }: PageProps): Metadata {
    return {
        title: `Meeting ${id}`,
        description: `Meeting ${id} description`,
    }
}

export default function MeetingPage({ params: { id } }: PageProps) {
    return <MeetingPageComponent id={id} />
}