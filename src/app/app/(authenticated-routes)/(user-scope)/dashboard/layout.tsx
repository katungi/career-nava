import { redirect } from 'next/navigation';
import Sidebar from '~/components/patterns/sidebar';
import { getServerAuthSession } from '~/server/auth';

export default async function DashboardLayout({ children }: any) {
  const session = await getServerAuthSession();

  if (session?.user && session.user.role === 'MENTOR') {
    redirect('/app/mentor?loginState=signedIn');
  }
  return (
    <div className="flex h-screen border-collapse overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pt-16 pb-1">
        {children}
      </main>
    </div>
  );
}
