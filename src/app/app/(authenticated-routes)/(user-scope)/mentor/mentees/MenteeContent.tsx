"use client"

import MenteeSlider from "./MenteeSlider";
import MenteeTabComponent from "./MenteeTabs"

const MenteeContent = () => {
    return (
        <>
            <MenteeTabComponent />
            <div className="mt-4">
                <MenteeSlider mentees={[]} />
            </div>
        </>
    )
}

export default MenteeContent;