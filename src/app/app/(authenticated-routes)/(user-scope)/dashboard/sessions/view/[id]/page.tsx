"use client"
import { useAtomValue } from "jotai"
import { useParams } from "next/navigation"
import { mentorAtom } from "~/atoms/mentor.atom"
import { MentorBioCard } from "~/components/sections/mentor-card"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "~/components/ui/breadcrumb"
import { useRouter } from "next/navigation"
import { api } from "~/trpc/react"
import { Loader } from "lucide-react"
import { Button } from "~/components/ui/button"
import Modal from "~/components/ui/modal"
import { useState } from "react"
import BookingForm from "~/components/sections/session-booking-form"

export default function ViewUser() {
    const [openModal, setOpenModal] = useState(false)
    const params = useParams()
    const id = params.id as string
    const { data, isLoading } = api.user.getUserById.useQuery({ id });

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
                    <BookingForm />
                </Modal.Content>
            </Modal>
        </div>
    )
}