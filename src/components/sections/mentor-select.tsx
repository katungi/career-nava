import { api } from "~/trpc/react"
import { Button } from "../ui/button"
import Modal from "../ui/modal"
import {MentorBioCard, MentorProfileCard} from "./mentor-card"
import { useState } from "react"

export default function MentorSelection() {
    const [selectedMentor, setSelectedMentor] = useState<any>(null)
    const [step, setStep] = useState('init')
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3,
        offset: 0
    })

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
                // <div className="w-screen h-full p-8 flex flex-row gap-2">
                //     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                //         <div className="px-6 py-4">
                //             <div className="flex flex-col items-center">
                //                 <img className="w-32 h-32 rounded-full" src={
                //                     selectedMentor.image ? selectedMentor.image : '/images/mentor-img.png'
                //                 } alt={selectedMentor.name} />
                //                 <div className="font-bold text-xl my-2">{selectedMentor.name}</div>
                //                 <div className="mt-4 bg-purple-100 text-purple-700 text-xs uppercase font-semibold px-2 mx-8 py-1 inline-block rounded-full">
                //                     Mastercard Scholarship
                //                 </div>
                //                 <div className="text-primary text-sm mb-2">Google Scholarship</div>
                //                 <div className="text-gray-700 text-base mt-3">
                //                     Current Mentees: 0
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                <MentorBioCard mentor={selectedMentor} />

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
                {/* <Button className="inline-flex items-center justify-center rounded bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 group-disabled:pointer-events-none">
                    <span className="group-disabled:opacity-0">Choose Mentor</span>
                </Button> */}
            </div>
        </>
    )
}