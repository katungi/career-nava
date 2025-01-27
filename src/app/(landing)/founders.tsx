'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

type Founder = {
  name: string;
  title: string;
  quote: string;
  image: string;
};

const founders: Founder[] = [
  {
    name: 'Lameck Owesi',
    title: 'Co-Founder, CareerNava',
    quote:
      'At CareerNava, we believe that every student deserves access to the resources and support they need to achieve their educational goals. Our mission is to empower students from all backgrounds to unlock their full scholarship potential and pursue their dreams without financial barriers.',
    image: '/images/lameck.png',
  },
  {
    name: 'Oduor Kevin',
    title: 'Co-Founder, CareerNava',
    quote:
      'Scholarships changed our lives. At CareerNava, we’re committed to helping you unlock the same opportunities and achieve your full potential',
    image: '/images/kevin.jpeg',
  },
];

export default function FounderShowcase() {
  const [currentFounder, setCurrentFounder] = useState(0);

  const rotateFounders = (direction: 'left' | 'right') => {
    setCurrentFounder((prev) =>
      direction === 'left' ? (prev + 1) % 2 : (prev - 1 + 2) % 2
    );
  };

  return (
    <section className="bg-purple-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 text-white lg:mb-0 lg:w-1/2">
            <h2 className="mb-4 font-bold text-3xl">
              What Our <span className="text-yellow-300">Founders</span> Say
            </h2>
            <p className="mb-6 text-sm">
              At CareerNava, we believe that every student deserves access to
              the resources and support they need to achieve their educational
              goals. Our mission is to empower students from all backgrounds to
              unlock their full scholarship potential and pursue their dreams
              without financial barriers.
            </p>
            <Button className="bg-yellow-300 text-purple-600 text-sm hover:bg-yellow-400">
              Book Session Now
            </Button>
          </div>
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative mb-6 h-[400px] w-full">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className={`absolute top-0 left-0 h-full w-full transition-all duration-500 ${
                    index === currentFounder
                      ? 'z-20 scale-100 opacity-100'
                      : 'z-10 scale-95 opacity-0'
                  }`}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="text-center text-white">
              <p className="mb-2 text-lg italic">
                &quot;{founders[currentFounder].quote}&quot;
              </p>
              <p className="font-bold">{founders[currentFounder].name}</p>
              <p className="mb-4 text-gray-300 text-sm">
                {founders[currentFounder].title}
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => rotateFounders('left')}
                  className="bg-purple-700 text-white hover:bg-purple-800"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => rotateFounders('right')}
                  className="bg-purple-700 text-white hover:bg-purple-800"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
