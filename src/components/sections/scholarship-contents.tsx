"use client"
import { api } from "~/trpc/react";
import ScholarshipsTabComponent from "./scholarship-tab-component";
import ScholarshipSlider from "./scholarship-slider";

const ScholarshipContents = () => {
    const { data: scholarships } = api.scholarshipSessions.getAllScholarships.useQuery({
        limit: 1000, offset: 0
    })

    console.log("SCH::", scholarships)

    return (
        <>
            <ScholarshipsTabComponent />
            <div className="mt-4">
                <ScholarshipSlider scholarships={scholarships} />
            </div>
        </>
    )

}

export default ScholarshipContents