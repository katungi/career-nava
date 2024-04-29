import { api } from "~/trpc/react"
import { Button } from "../ui/button"
import Modal from "../ui/modal"
import { MentorBioCard, MentorProfileCard } from "./mentor-card"
import { useState } from "react"
import { SessionRouter } from "~/server/api/routers/sessions"
import BookingForm from "./session-booking-form"

export default async function MentorSelection() {
    // const { user: sess, fetchUser } = useUserStore();
    const [selectedMentor, setSelectedMentor] = useState<any>(null)
    const [step, setStep] = useState('init')
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3, offset: 0
    })

    const handleFormSubmit = async (FormData: any) => {
        // implement payment first
        // call an API end point or procedure with the stuff
        console.log("Formdata", FormData)
    }

    return (
        <>
            {isLoading &&
                <div className="h-full flex items-center justify-center p-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                </div>
            }
            {step === 'init' &&
                <div className="w-screen h-full p-8 flex flex-row gap-2">
                    {data?.map((mentor, index) => (
                        <MentorProfileCard mentor={mentor} selectMentor={setSelectedMentor} setStep={setStep} />
                    ))}
                </div>
            }
            {selectedMentor && step === 'view-profile' &&
                <MentorBioCard mentor={selectedMentor} setStep={setStep} />
            }
            {selectedMentor && step === 'book-session' &&
                <BookingForm onSubmit={handleFormSubmit} />
            }
            <div className="mt-8 space-x-6 text-right p-3 px-8">
                {step !== 'init' &&
                    <Button className="inline-flex items-center justify-center rounded bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 group-disabled:pointer-events-none">
                        <span className="group-disabled:opacity-0">Back to Mentors</span>
                    </Button>
                }
                <Modal.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                    Cancel
                </Modal.Close>
            </div>
        </>
    )
}