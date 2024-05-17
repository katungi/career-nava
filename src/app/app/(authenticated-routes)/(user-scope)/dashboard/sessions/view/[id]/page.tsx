"use client"
import { useParams } from "next/navigation"
import { MentorBioCard } from "~/components/sections/mentor-card"
import {
    BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator,
    BreadcrumbPage, BreadcrumbList, Breadcrumb
} from "~/components/ui/breadcrumb"
import { api } from "~/trpc/react"
import { Loader } from "lucide-react"
import { Button } from "~/components/ui/button"
import Modal from "~/components/ui/modal"
import { useState } from "react"
import BookingForm from "~/components/sections/session-booking-form"
import { useStreamVideoClient } from "@stream-io/video-react-sdk"
import { Card, CardContent } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Link } from "next-view-transitions"

export default function ViewUser() {
    const pay = api.daraja.stkPush.useMutation();
    const book = api.mentorshipSessions.createBookingSesssion.useMutation();
    const { data: transaction, refetch } = api.mentorshipSessions.getLatestTransaction.useQuery();
    const [openModal, setOpenModal] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const params = useParams()
    const id = params.id as string
    const { data, isLoading } = api.user.getUserById.useQuery({ id });
    const [loadingText, setLoadingText] = useState('Booking Session...')
    const client = useStreamVideoClient();
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const title = "Mentorship session with " + data?.name;

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
            });
            return call;
        } catch (error) {
            console.error(error);
            alert("Failed to create meeting")
        }
    }
    const messages = [
        "Check your phone for the STK push... ",
        "Processing payment...",
        "Creating meeting..."
    ];
    const handleFormSubmit = async (FormData: any) => {
        setIsPending(true);
        let messageIndex = 0;
        const intervalId = setInterval(() => {
            //@ts-ignore
            setLoadingText(messages[messageIndex]);
            messageIndex = (messageIndex + 1) % messages.length;
        }, 6000);

        try {
            const call = await createMeeting(FormData);

            if (call) {
                FormData.title = title;
                FormData.meetingLink = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/app/meeting/${call?.id}`;;
                FormData.mentorId = data?.id;
                FormData.menteeId = '';

                book.mutate(FormData);

                const intervalId = setInterval(() => {
                    console.log("Polling transaction")
                }, 3000)
                pay.mutate({
                    amount: "1",
                    phoneNumber: FormData.number,
                });
                // Polling function
                const pollTransaction = async () => {
                    try {
                        refetch();

                        console.log("Payment status::", transaction?.paymentStatus)
                        if (transaction?.paymentStatus === 'SUCCESS') {
                            setLoadingText('Success');
                            setIsPending(false);
                            setDone(true);
                        } else if (transaction?.paymentStatus === 'CANCELLED') {

                            setError(true);
                            setErrorMessage('Transaction was cancelled by User');
                            setLoadingText('Cancelled');
                            setIsPending(false);
                        }
                    } catch (error) {
                        setError(true);
                        setErrorMessage('Failed to validate transaction');
                        console.error('Polling error:', error);
                    }
                };

                // Set polling interval
                const pollingInterval = setInterval(pollTransaction, 1000);

            } else {
                setError(true);
                setErrorMessage('Failed to create meeting');
                alert("Failed to create meeting");
                clearInterval(intervalId);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to process the form");
            setError(true);
            setErrorMessage('Failed to process your information');
            clearInterval(intervalId);
        } finally {
            // setTimeout(() => {
            //     setIsPending(false);
            //     clearInterval(intervalId);
            //     setLoadingText('Finishing Up...');
            //     setDone(true);
            // }, 20000);
        }
    };

    return (
        <div className="px-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>New Session</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Mentor Bio</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {isLoading && <Loader className="h-8 w-8 animate-spin rounded-full" />}
            <div className="mt-20 w-full">
                <MentorBioCard mentor={data} />
            </div>
            <Modal open={openModal} onOpenChange={setOpenModal}>
                <Modal.Button className="rounded p-2">
                    <Button className="w-64 text-white bg-primary hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-600" >
                        Book a session
                    </Button>
                </Modal.Button>
                <Modal.Content title={"Book a session"}>
                    {isPending ?
                        <div className="flex align-middle h-full items-center justify-center p-12 flex-col">
                            <Loader className="h-8 w-8 animate-spin rounded-full"></Loader>
                            <p className="text-primary font-bold p-4">{loadingText}</p>
                        </div>
                        : done ?
                            <Card className="w-full">
                                <CardContent className="flex flex-col items-center gap-4 p-6">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage alt={"Mentor Image"} src={data?.image!} />
                                        <AvatarFallback>{data?.name ? data?.name.split(' ').map((n: any) => n[0]).join('') : "N/A"}</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2 text-center">
                                        <h3 className="text-2xl font-bold">{data?.name} is your new mentor</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            A session has been booked, A meeting link will be available once payment is confirmed.
                                        </p>
                                    </div>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="/app/dashboard/sessions">
                                        View Session
                                    </Link>
                                </CardContent>
                            </Card>
                            : error ?
                                <Card className="w-full">
                                    <CardContent className="flex flex-col items-center gap-4 p-6">
                                        <img
                                            alt="Success"
                                            className="rounded-lg"
                                            height="300"
                                            src="/images/timed-out-error.svg"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            width="300"
                                        />
                                        <div className="space-y-2 text-center">
                                            <h3 className="text-2xl font-bold">Oops! Error Processing your request</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {errorMessage}
                                            </p>
                                        </div>
                                        <Link className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                            href="/app/dashboard/sessions">
                                            Close and Retry
                                        </Link>
                                    </CardContent>
                                </Card>
                                : <BookingForm onSubmit={handleFormSubmit} title={title} />

                    }
                </Modal.Content>
            </Modal>
        </div>
    )
}