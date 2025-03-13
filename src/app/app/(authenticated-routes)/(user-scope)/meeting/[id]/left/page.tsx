import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PageProps {
    params: { id: string };
}

export default function LeftPage({ params: { id } }: PageProps) {
    return (
        <div className="flex flex-col items-center gap-3">
            <p className="font-bold">You left this meeting.</p>
            <Link
                href={`/app/meeting/${id}`}
                className="bg-gray-500 hover:bg-gray-600"
            >
                <p>Rejoin</p>
            </Link>
        </div>
    );
}