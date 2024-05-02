import React from 'react'
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '~/server/auth';
import { SignUpScreen } from '~/components/patterns/signup-screen';


const SignUpPage = async () => {
    const session = await getServerAuthSession();

    if (session?.user) {
        redirect("/app/dashboard/?loginState=signedIn");
    } 

    return (
        <div>
            <SignUpScreen />
        </div>
    )
}
export default SignUpPage