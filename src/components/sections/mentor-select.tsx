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

export default async function MentorSelection() {
    const { data: session, status } = useSession()
    console.log(session, status)
    const pay = api.daraja.stkPush.useMutation();
    const [selectedMentor, setSelectedMentor] = useState<any>(null);
    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useAtom(modalProgressAtom);
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3,
        offset: 0,
    });

    console.log(selectedMentor)

    const [call, setCall] = useState<Call | undefined>()

    const client = useStreamVideoClient();

    const handleFormSubmit = async (FormData: any) => {
        setIsPending(true);
        let meetLink;
        await createMeeting(FormData).then((call) => {
            meetLink = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/meeting/${call?.id}`
        })

        FormData.meetingLink = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/meeting/${call?.id}`;
        FormData.mentorId = selectedMentor.id;
        FormData.menteeId = ''

        pay.mutate({
            amount: "1",
            phoneNumber: FormData.number,
            FormData: FormData,
        });

        setIsPending(false);
        setStep("final");
        // window.location.href = "/app/dashboard/?loginState=signedIn";
    };



    async function createMeeting(formData: any) {
        if (!client) {
            return
        }

        try {
            const id = crypto.randomUUID();
            const callType = "private-meeting"
            const call = client.call(callType, id);

            await call.getOrCreate({
                data: {
                    // members: [selectedMentor.id, session?.user?.id], // This will add specific users to the call
                    custom: { Description: formData.title }
                }
            }).catch((error) => {
                console.error(error);
                alert("Kimeumana")
            });
            setCall(call);
            return call;
        } catch (error) {
            console.error(error);
            alert("Failed to create meeting")
        }
    }

    return (
        <div className="overflow-y-scroll">
            {isLoading && (
                <div className="flex h-full items-center justify-center p-12">
                    <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div>
                </div>
            )}
            {step === "init" && (
                <div className="flex h-full w-screen flex-row gap-2 p-8">
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
                    <div className="flex h-full items-center justify-center p-12">
                        {/* <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div> */}
                        <p className="text-primary">Session with {selectedMentor.name} Booked Successfully 🎉</p>
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