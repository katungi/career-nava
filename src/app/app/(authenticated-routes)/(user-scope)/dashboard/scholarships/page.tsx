import ScholarshipContents from "~/components/sections/scholarship-contents";
import ScholarshipHeader from "~/components/sections/scholarship-header";

export default function DashboardScholarship() {
    return (
        <div className="p-x mx-8">
            <ScholarshipHeader />
            <ScholarshipContents />
        </div>
    )
}