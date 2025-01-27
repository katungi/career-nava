import { Loader } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="-mt-5 flex h-screen flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-4xl">Career Nava</h1>
        <h2 className="text-wrap text-muted-foreground text-xl">
          Your career path starts here.
        </h2>
      </div>
      <Loader className="h-8 w-8 animate-spin" />
    </div>
  );
};

export default SplashScreen;
