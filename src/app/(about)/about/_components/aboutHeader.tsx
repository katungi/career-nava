"use client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function AboutHeader() {
    const router = useRouter();
    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-6">
                    <h1 className="text-7xl md:text-7xl font-bold text-white">
                        Finding great coaches to succeed in your career
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        At CareerNava, we firmly believe in the power of community voices. They are the driving force behind the verification of your social impact, distinguishing us from traditional third-party registries.
                    </p>
                    <div className="flex gap-4">
                        <Button className="text-white hover:bg-secondary/20 w-[500px] h-16 rounded-lg flex flex-row justify-between px-5" variant="secondary"
                            onClick={() => router.push("/app/dashboard")}>
                            <p className='text-xl font-bold'>Book Session Now</p>
                            <ArrowRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
                <div className="relative w-full">
                    <img
                        alt="Banner Image"
                        className="relative z-10 w-full max-w-md"
                        height={500}
                        src="/images/bg-mesh-2.png"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover",
                        }}
                        width={700}
                    />
                    <img
                        alt="Banner Background Image"
                        className="absolute z-0 w-full max-w-md mt-3 ml-3"
                        height={200}
                        src="/images/bg-mesh.png"
                        style={{
                            top: "20px",
                            left: "20px",
                            aspectRatio: "400/400",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                </div>
            </div>
        </div>
    )
}