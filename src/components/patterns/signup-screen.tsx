"use client";
import { signIn } from "next-auth/react";
import { Zenitho } from "uvcanvas";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { Role } from "@prisma/client";
import { setCookie } from 'cookies-next';

export function SignUpScreen() {
    const [role, setRole] = useState<Role>();
    // const [_document, setDocument] = useState<Document | null>(null);

    // useEffect(() => {
    //     setDocument(document)
    // }, [])

    const redirect = async () => {
        // if (!role) {
        //     toast.error("Please select a role");
        //     return
        // };

        // const expires = dayjs().add(15, 'm').toDate();
        // _document.cookie = `userType=${role};path=/;expires=${expires}`;
        setCookie('userType', role)
        await signIn("google", {
            callbackUrl: "/app/dashboard/?loginState=signedIn",
            role: role
        });
    };
    return (
        <div className="min-h-[800px] w-full lg:grid lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <div className="absolute inset-0 block lg:hidden [&_canvas]:h-[100vh] [&_canvas]:w-[100vw]">
                    <Zenitho />
                </div>
                <div className="relative mx-auto  grid w-[350px] gap-6 rounded-lg bg-background px-4 py-8">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Create an Account</h1>
                        <p className="text-balance text-muted-foreground">
                            Create an account to continue!
                        </p>
                    </div>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label className="sr-only" htmlFor="role">
                                Role
                            </label>
                            <Select name="role" required onValueChange={(e: Role) => setRole(e)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={Role.MENTOR}>Mentor</SelectItem>
                                    <SelectItem value={Role.USER}>Mentee</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-4 mt-24">
                        <Button
                            onClick={redirect}
                            variant="outline"
                            className="w-full"
                        >
                            <SiGoogle className="mr-2 h-4 w-4" />
                            Sign up with Google
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block [&_canvas]:rounded-lg">
                <Zenitho />
            </div>
        </div>
    )
}