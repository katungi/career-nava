import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import Modal from "../ui/modal";
import { MentorBioCard, MentorProfileCard } from "./mentor-card";
import { useState } from "react";
import BookingForm from "./session-booking-form";
import { useAtom } from "jotai";
import { modalProgressAtom } from "~/atoms/mentor.atom";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Description } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";

export default async function MentorSelection() {
    const { data: session, status } = useSession()
    const pay = api.daraja.stkPush.useMutation();
    const [selectedMentor, setSelectedMentor] = useState<any>(null);
    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useAtom(modalProgressAtom);
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3,
        offset: 0,
    });

    const handleFormSubmit = async (FormData: any) => {
        setIsPending(true);

        setTimeout(() => {
            console.log("Redirecting")
        }, 5000);

        setIsPending(false);
        setStep("final");
    };




    return (
        <div className="">
            {isLoading && (
                <Loader className="h-8 w-8 animate-spin rounded-full"></Loader>
            )}
            {step === "init" && (
                <div className="grid grid-cols-3 gap-2 p-8">
                    {data?.map((mentor, index) => (
                        <MentorProfileCard
                            mentor={mentor}
                            selectMentor={setSelectedMentor}
                            setStep={setStep}
                        />
                    ))}
                </div>
            )}
            {selectedMentor && step === "view-profile" && (
                <MentorBioCard mentor={selectedMentor} setStep={setStep} />
            )}
            {selectedMentor && step === "book-session" && !isPending && (<BookingForm onSubmit={handleFormSubmit} />)}
            {selectedMentor && step === "final" && (
                <div>
                    <div className="flex align-middle h-full items-center justify-center p-12">
                        {/* <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div> */}
                        <p className="text-primary font-bold">Session with {selectedMentor.name} Booked Successfully 🎉</p>
                    </div>
                </div>
            )}
            <div className="mt-8 space-x-6 p-3 px-8 text-right">
                {step !== "init" && (
                    <Button className="inline-flex items-center justify-center rounded bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 group-disabled:pointer-events-none">
                        <span className="group-disabled:opacity-0">Back to Mentors</span>
                    </Button>
                )}
                <Modal.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                    Cancel
                </Modal.Close>
            </div>
        </div>
    );
}

interface MeetingLinkProps {
    call: Call;
}

function MeetingLink({ call }: MeetingLinkProps) {
    const meetinLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`
    return (
        <div>
            <Description>
                <a href={meetinLink}>Join Meeting</a>
            </Description>
        </div>
    );
}