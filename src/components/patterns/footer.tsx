import { Button } from "../ui/button"
import {Link} from "next-view-transitions"
import { Input } from "../ui/input"

export default function Footer() {
    return (
        <footer className="bg-primary text-white p-10 bottom-0 z-50">
            <img src="/images/graduants.svg" alt="Career Nava Logo" className="w-3/4 absolute object-cover ml-24 mt-12" />
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 z-10">
                <div className="space-y-2 col-span-2">
                    <h2 className="text-3xl font-bold">Integrate, Align & Optimize your social value with us!</h2>
                    <p className="mb-4">With CareerNava's science-backed platform, You can now</p>
                    <Button variant={"default"} className="bg-secondary hover:bg-secondary text-black">Join Us Today</Button>
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold">For Mentees</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#">About Us</Link>
                        </li>
                        <li>
                            <Link href="#">Services</Link>
                        </li>
                        <li>
                            <Link href="#">Teams</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold">For Mentors</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#">About Us</Link>
                        </li>
                        <li>
                            <Link href="#">Services</Link>
                        </li>
                        <li>
                            <Link href="#">Teams</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-1 md:col-span-2">
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
                <div className="space-y-1 md:col-start-4">
                    <h3 className="font-semibold">Location</h3>
                    <p>Karen Village, Nairobi (Kenya)</p>
                    <p>20 Aluguntugui, Accra (Ghana)</p>
                    <p>
                        <MailboxIcon className="inline" /> career.nava.app@gmail.com
                    </p>
                    <p>
                        <PhoneIcon className="inline" /> +254 715 429 997
                    </p>
                </div>
                <div className="space-y-4 md:col-start-5">
                    <h3 className="font-semibold">Join Our Newsletter</h3>
                    <p>Sign up and receive product updates and our blogs.</p>
                    <div className="flex">
                        <Input className="flex-1" placeholder="Email Address" type="email" />
                        <Button className="ml-2 bg-secondary hover:bg-secondary text-black">Join Newsletter</Button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 border-t border-gray-800 pt-4">
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