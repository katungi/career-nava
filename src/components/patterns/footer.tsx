import { Button } from "../ui/button"
import { Link } from "next-view-transitions"

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-r from-[#af63f1] p-24 to-primary text-white bottom-0 z-50">
            <div
                className="absolute inset-0 w-full h-full mx-4"
                style={{
                    backgroundImage: 'url(/images/graduants.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            ></div>
            <div className="relative max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
                <div className="space-y-2 col-span-1 md:col-span-1">
                    <h2 className="text-3xl font-bold">
                        Join the Future of Mentorship Today, <br /> with CareerNava
                    </h2>
                    <Button variant={"default"} className="bg-secondary hover:bg-secondary text-black">Book a session Now!</Button>
                </div>
                <div className="space-y-1 col-span-1 md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="font-semibold">For Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link href="#">Terms of Services</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Documentation</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Location</h3>
                            <p>Karen Village, Nairobi (Kenya)</p>
                            <p>
                                <MailboxIcon className="inline" /> career.nava.app@gmail.com
                            </p>
                            <p>
                                <PhoneIcon className="inline" /> +254 715 429 997
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative text-center mt-10 border-t border-primary pt-4 z-10">
                <p>Copyright 2024</p>
            </div>
        </footer>
    )
}

function MailboxIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
            <polyline points="15,9 18,9 18,11" />
            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
            <line x1="6" x2="7" y1="10" y2="10" />
        </svg>
    )
}


function PhoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}