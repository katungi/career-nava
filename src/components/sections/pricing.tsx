import { Button } from "../ui/button";
import { SiCheckmarx } from "@icons-pack/react-simple-icons";

export default function PricingSection() {
    return (
        <div className="w-full mx-auto bg-secondary px-5 py-10 text-grey-900">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Pricing Packages</h1>
                <h3 className="text-xl font-medium mb-10">We provide suitable pricing for your specific needs</h3>
            </div>
            <div className="w-full md:flex mb-5">
                <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4 text-3xl">Free</h2>
                        <div className="text-xl mb-8 flex flex-col gap-8 mt-4">
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Unlimited scholarship opportunities
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Readiness Assessment
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Limited Application Resources
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button variant={"default"} className="font-bold text-white rounded-md px-10 py-2 transition-colors w-full">
                            Checkout Free Package
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4 text-3xl">BASIC</h2>
                        <h3 className="text-center font-bold text-3xl md:text-4xl mb-2">$40<span className="text-lg">/mo</span></h3>

                        <div className="text-xl mb-8 flex flex-col gap-8 mt-4">
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> 5 guidance sessions - 45 min each
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Individual/group sessions
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Complete within 3 weeks
                            </p>
                        </div>
                        <div className="bg-secondary p-4 mb-5 rounded-tr-3xl rounded-bl-3xl">
                            <span className="font-bold ml-12"> * All Free Services</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button className="font-bold text-white rounded-md px-10 py-2 transition-colors w-full">
                            Checkout Basic Package
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                    <div className="w-full flex-grow">
                        <h2 className="text-center font-bold uppercase mb-4 text-3xl">End to End</h2>
                        <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">$100<span className="text-lg">/mo</span></h3>
                        <p className="text-center font-bold mb-5">
                            <a href="#" className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                        </p>
                        <div className="text-xl mb-8 flex flex-col gap-8 mt-4">
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> 5 Guided sessions - unlimited
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> document creation & reviews
                            </p>
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Interview preparation
                            </p>
                        </div>
                        <div className="bg-secondary p-4 mb-5 rounded-tr-3xl rounded-bl-3xl">
                            <span className="font-bold ml-12"> * All Basic Services</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button className="font-bold text-white rounded-md px-10 py-2 transition-colors w-full">
                            Checkout End to End Package
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                    <div className="w-full flex-grow">
                        <h2 className="text-center text-3xl font-bold uppercase mb-2">Stand Alone</h2>
                        <div className="text-xl mb-8 flex flex-col gap-8 mt-16">
                            <p className="flex flex-row">
                                <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} />Document Reviews
                            </p>
                        </div>
                        <div className="bg-secondary p-4 mb-5 rounded-tr-3xl rounded-bl-3xl mt-44">
                            <span className="font-bold ml-12"> * Stand Alone Services</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button className="font-bold text-white rounded-md px-10 py-2 transition-colors w-full">Checkout Stand Alone Package</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}