import { redirect } from 'next/navigation';
import { SignUpScreen } from '~/components/patterns/signup-screen';
import { getServerAuthSession } from '~/server/auth';

const SignUpPage = async () => {
  const session = await getServerAuthSession();

  if (session?.user) {
    redirect('/app/dashboard/?loginState=signedIn');
  }

  return (
    <div>
      <SignUpScreen />
    </div>
  );
};
export default SignUpPage;
