import ScholarshipContents from '~/components/sections/scholarship-contents';
import ScholarshipHeader from '~/components/sections/scholarship-header';

export default function DashboardScholarship() {
  return (
    <div className="mx-8 p-x">
      <ScholarshipHeader />
      <ScholarshipContents />
    </div>
  );
}
