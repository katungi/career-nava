import Sidebar from '~/components/patterns/sidebar';

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen border-collapse overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pt-16 pb-1">
        {children}
      </main>
    </div>
  );
}
