"use client"
import { useParams } from "next/navigation"
import { MentorBioCard } from "~/components/sections/mentor-card"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "~/components/ui/breadcrumb"
import { api } from "~/trpc/react"
import { Loader } from "lucide-react"
import { Button } from "~/components/ui/button"
import Modal from "~/components/ui/modal"
import { useState } from "react"
import BookingForm from "~/components/sections/session-booking-form"
import { db } from "~/server/db"

export default function ViewUser() {
    const [openModal, setOpenModal] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const params = useParams()
    const id = params.id as string
    const { data, isLoading } = api.user.getUserById.useQuery({ id });

    const handleFormSubmit = async (FormData: any) => {
        setIsPending(true);
        setTimeout(() => {
            console.log(FormData);
            setIsPending(false);
        }, 5000);
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
                            <p className="text-primary font-bold">Booking Session...</p>
                        </div>
                        : <BookingForm onSubmit={handleFormSubmit} />
                    }
                </Modal.Content>
            </Modal>
        </div>
    )
}