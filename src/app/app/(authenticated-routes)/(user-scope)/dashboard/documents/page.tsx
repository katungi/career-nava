'use client'
import React, { useState } from 'react';
import { ChevronRight, PlusIcon } from 'lucide-react'; // Assuming you're using lucide-react for the icons
import { Button } from '~/components/ui/button';
import TabsComponent from '~/components/patterns/tabs';
import SessionSlider from '~/components/patterns/session-slider';
import DocumentSlider from '~/components/patterns/document-slider';
import Modal from '~/components/ui/modal';
import { Card, CardContent } from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import Link from 'next/link';
import DocumentUploadForm from './document-upload-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Documents() {
    const [activeTab, setActiveTab] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const img1 = "https://i.ibb.co/ncrXc2V/1.png";
    const img2 = "https://i.ibb.co/B3s7v4h/2.png";
    const img3 = "https://i.ibb.co/XXR8kzF/3.png";
    const img4 = "https://i.ibb.co/yg7BSdM/4.png";

    const slides = [img1, img2, img3, img4, img1, img2, img3, img4];

    return (
        <div className="p-4 mx-8">
            {/* Banner */}
            <DocumentsHeader setOpenModal={setOpenModal} />
            <Modal open={openModal} onOpenChange={setOpenModal}>
                <Modal.Content title={"Upload A Document"}>
                    {fileUploaded ? <DocumentUploaded setOpenModal={setOpenModal} /> :
                        <DocumentUploadForm setFileUploaded={setFileUploaded} />
                    }
                </Modal.Content>
            </Modal>
            <div className='mt-10'>
                <TabsComponent tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="flex flex-row w-full">
                <div className="p-3">
                    <div className="flex flex-row w-full p-3 justify-between items-center">
                        <div className="">
                            <h1 className="text-4xl font-bold text-gray-800">{tabsData[activeTab]?.title} Documents (4)</h1>
                            <p className="text-gray-900 text-xl mt-2">
                                Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                            </p>
                        </div>
                        <div className="ml-12">
                            <Button className="flex items-center text-white w-56 h-12 justify-center rounded-md hover:bg-secondary-dark"
                                variant={'secondary'} onClick={() => setOpenModal(true)}  >
                                <PlusIcon className="w-6 h-6 text-white ml-2" />
                                Upload New Documents
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <DocumentSlider sessions={slides} />
            </div>
        </div>
    )
}

const DocumentsHeader = ({ setOpenModal }: any) => {
    return (
        <div className="relative bg-secondary text-white flex justify-between items-center h-60 rounded-xl" style={{
            backgroundImage: "url('/images/bagpack.png')",
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70"></div>
            <div className='relative p-8 bg-secondary' style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}>
                <h1 className="text-3xl font-bold text-gray-900">My Documents</h1>
                <p className="text-lg text-gray-900">
                    Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                </p>
                <Button className="flex items-center text-white font-bold py-2 px-4 rounded mt-8"
                    onClick={() => setOpenModal(true)}
                >
                    <PlusIcon className="mr-2" /> Upload New Documents
                </Button>
            </div>

            <div className="absolute right-12 bottom-0 z-0">
                <img src="/images/books-doc.png" alt="Illustration" style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
                    className='h-56 w-48 object-cover'
                />
            </div>
        </div>
    );
};

function DocumentUploaded({ setOpenModal }: any) {
    const router = useRouter()
    return (
        <Card className="w-full mx-auto">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <img
                    alt="Success"
                    className="rounded-lg"
                    height="300"
                    src="/images/paper-documents.svg"
                    style={{
                        objectFit: "cover",
                    }}
                    width="300"
                />
                <div className="space-y-2 text-center">
                    <h3 className="text-lg font-semibold text-primary">Your documents were uploaded successfully</h3>
                    <p className="text-gray-500 dark:text-gray-400">You can now view all your uploaded documents.</p>
                </div>
                <Button onClick={() => {
                    router.push('/app/dashboard/documents')
                    toast.info("Redirecting to Documents Page")
                }
                }>
                    View all Documents
                </Button>
            </CardContent>
        </Card>
    )
}

const tabsData = [
    { title: 'All Documents', count: 4 },
    { title: 'Ready for Review', count: 1 },
    { title: 'Pending', count: 3 },
    { title: 'Deleted', count: 0 },
];