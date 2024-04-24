import { ChevronRight, FileText, SquareArrowOutUpRight } from "lucide-react";
import DashboardBanner from "~/components/sections/banner";
import { Badge } from "~/components/ui/badge";
import SessionSlider from "~/components/patterns/session-slider";

export default function Home() {
    const img1 = "https://i.ibb.co/ncrXc2V/1.png";
    const img2 = "https://i.ibb.co/B3s7v4h/2.png";
    const img3 = "https://i.ibb.co/XXR8kzF/3.png";
    const img4 = "https://i.ibb.co/yg7BSdM/4.png";

    const slides = [img1, img2, img3, img4];
    
    return (
        <div className="p-4 mx-12">
            {/* Banner */}
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <DashboardBanner />
                </div>
                <div className="rounded-lg border border-1 border-primary p-3">
                    <div className="w-96">
                        <div className="bg-grey-200 border-b-2">
                            <p className="text-3xl mx-6">Notifications</p>
                        </div>
                        <div className="p-4 flex-col gap-4">
                            <div className="flex flex-row">
                                <SquareArrowOutUpRight className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Sessions
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                            <div className="flex flex-row mt-5">
                                <FileText className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Document Review
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="flex flex-row mt-20 w-full">
                <div className="flex w-full p-3 justify-between items-center">
                    <div className="">
                        <h1 className="text-4xl font-bold text-gray-800">Upcoming Sessions (4)</h1>
                        <p className="text-gray-900 text-xl mt-2">
                            Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                        </p>
                    </div>
                    <div className="bg-blue-300">
                        <button className="flex items-center bg-primary text-white w-40 h-12 justify-center rounded-md hover:bg-primary-dark">
                            See Sessions
                            <ChevronRight className="w-6 h-6 text-white ml-2" />
                        </button>
                    </div>
                </div>
                <div className="rounded-lg border border-1 border-primary p-3">
                    <div className="w-96">
                        <div className="bg-grey-200 border-b-2">
                            <p className="text-3xl mx-6">Notifications</p>
                        </div>
                        <div className="p-4 flex-col gap-4">
                            <div className="flex flex-row">
                                <SquareArrowOutUpRight className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Sessions
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                            <div className="flex flex-row mt-5">
                                <FileText className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Document Review
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <SessionSlider sessions={slides} />
            </div>
        </div>
    );
}