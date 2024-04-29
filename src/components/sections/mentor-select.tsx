import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import Modal from "../ui/modal";
import { MentorBioCard, MentorProfileCard } from "./mentor-card";
import { useState } from "react";
import { SessionRouter } from "~/server/api/routers/sessions";
import BookingForm from "./session-booking-form";

export default async function MentorSelection() {
  // const { user: sess, fetchUser } = useUserStore();
  const pay = api.daraja.stkPush.useMutation();
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [step, setStep] = useState("init");
  const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
    limit: 3,
    offset: 0,
  });

  // useEffect(() => {
  //     fetchUser()
  // }, [])

  // useEffect(() => {
  //     console.log("Sess", sess)
  // }, [sess])

  // const handleFormSubmit = async (formData: any) => {
  //     formData.mentorId = selectedMentor.id
  //     // formData.menteeId = sess?.user.id
  //     formData.paymentStatus = 'PENDING'
  //     console.log(formData)
  //     try {
  //         // @ts-ignore
  //         await SessionRouter.bookSession({ input: formData });
  //         alert('Session booked successfully!');
  //     } catch (error) {
  //         alert('Failed to book session');
  //         console.error(error);
  //     }
  // };
  const handleFormSubmit = async (FormData: any) => {
    pay.mutate({
      amount: "10",
      phoneNumber: "254113055307",
    });
    // implement payment first
    // call an API end point or procedure with the
    console.log("Formdata", FormData);
  };

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
      {selectedMentor && step === "book-session" && (
        <BookingForm onSubmit={handleFormSubmit} />
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
