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
import { useState } from "react"
import BookingForm from "~/components/sections/session-booking-form"
import { useStreamVideoClient } from "@stream-io/video-react-sdk"
import { Card, CardContent } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Link } from "next-view-transitions"
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons"
import { supabase } from "~/trpc/supabase"


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

    const handleInserts = (payload: any) => {
        console.log('Change received!', payload)
    }

    supabase
        .channel('BookedSessions')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'BookingSession' }, handleInserts)
        .subscribe()

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
            // Create a timeout promise
            const timeoutPromise = new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                    setLoadingText('Success');
                    setIsPending(false);
                    setDone(true);
                }, 60000); // 1 minute timeout
            });
    
            // Original process wrapped in a promise
            const processPromise = new Promise<void>(async (resolve, reject) => {
                const call = await createMeeting(FormData);
    
                if (call) {
                    FormData.title = title;
                    FormData.meetingLink = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/app/meeting/${call?.id}`;
                    FormData.mentorId = data?.id;
                    FormData.menteeId = '';
    
                    book.mutate(FormData, {
                        onSuccess: async () => {
                            await refetch();
    
                            pay.mutate({
                                amount: "1",
                                phoneNumber: FormData.number,
                            });
    
                            // Polling function
                            const pollTransaction = async () => {
                                try {
                                    await refetch();
    
                                    if (transaction?.paymentStatus === 'SUCCESS') {
                                        setLoadingText('Success');
                                        setIsPending(false);
                                        setDone(true);
                                        clearInterval(pollingInterval); // Stop polling when success
                                        resolve();
                                    } else if (transaction?.paymentStatus === 'CANCELLED') {
                                        setError(true);
                                        setErrorMessage('Transaction was cancelled by User');
                                        setLoadingText('Cancelled');
                                        setIsPending(false);
                                        clearInterval(pollingInterval); // Stop polling when cancelled
                                        reject(new Error('Transaction was cancelled by User')); // Reject the Promise
                                    }
                                } catch (error) {
                                    setError(true);
                                    setErrorMessage('Failed to validate transaction');
                                    console.error('Polling error:', error);
                                    reject(error); // Reject the Promise
                                }
                            };
                            const pollingInterval = setInterval(pollTransaction, 1000);
                        },
                        onError: (error) => {
                            setError(true);
                            setErrorMessage('Failed to book session');
                            console.error('Booking error:', error);
                            clearInterval(intervalId);
                            reject(error); 
                        }
                    });
                } else {
                    setError(true);
                    setErrorMessage('Failed to create meeting');
                    alert("Failed to create meeting");
                    clearInterval(intervalId);
                    setIsPending(false);
                    reject(new Error('Failed to create meeting'));
                }
            });
    
            // Race the original process against the timeout
            await Promise.race([processPromise, timeoutPromise]);
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to process the form");
            setError(true);
            setErrorMessage('Failed to process your information');
        } finally {
            clearInterval(intervalId);
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
            <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
                <Dialog.Trigger className="rounded p-2" asChild>
                    <Button className="w-64 text-white bg-primary hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-600" >
                        Book a session
                    </Button>
                </Dialog.Trigger>

                {openModal && (
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
                            <div className="flex items-center justify-between">
                                <Dialog.Title className="text-xl">Book a Session</Dialog.Title>
                                <Dialog.Close className="text-gray-400 hover:text-gray-500">
                                    <Button variant={"ghost"} onClick={() => {
                                        console.log("close")
                                        setOpenModal(false)
                                    }}>
                                        <Cross1Icon />
                                    </Button>
                                </Dialog.Close>
                            </div>

                            {isPending ?
                                <div className="flex align-middle h-full items-center justify-center p-12 flex-col">
                                    <Loader className="h-8 w-8 animate-spin rounded-full"></Loader>
                                    {book.isSuccess ? <p className="text-gray-500 dark:text-gray-400">{"Session Booked!"}</p> : <p className="text-gray-500 dark:text-gray-400">Processing...</p>}
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

                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </Dialog.Root>
        </div>
    )
}