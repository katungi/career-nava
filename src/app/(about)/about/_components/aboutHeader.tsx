'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

export default function AboutHeader() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-bold text-7xl text-white md:text-7xl">
            Finding great coaches to succeed in your career
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            At CareerNava, we firmly believe in the power of community voices.
            They are the driving force behind the verification of your social
            impact, distinguishing us from traditional third-party registries.
          </p>
          <div className="flex gap-4">
            <Button
              className="flex h-16 w-[500px] flex-row justify-between rounded-lg px-5 text-white hover:bg-secondary/20"
              variant="secondary"
              onClick={() => router.push('/app/dashboard')}
            >
              <p className="font-bold text-xl">Book Session Now</p>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="relative w-full">
          <img
            alt="Banner Image"
            className="relative z-10 w-full max-w-md"
            height={500}
            src="/images/bg-mesh-2.png"
            style={{
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width={700}
          />
          <img
            alt="Banner Background Image"
            className="absolute z-0 mt-3 ml-3 w-full max-w-md"
            height={200}
            src="/images/bg-mesh.png"
            style={{
              top: '20px',
              left: '20px',
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
