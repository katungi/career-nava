"use client"
import Lottie from "lottie-react";
import EmptyLogo from "../../../public/empty-logo.json"

export default function Empty() {
    return (
        <div className="flex justify-center align-middle">
            <Lottie animationData={EmptyLogo} loop={true} />
        </div>
    )
}