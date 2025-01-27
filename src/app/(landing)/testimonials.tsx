'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    message:
      'CareerNava was instrumental in my journey to securing a spot in the Jasiri Entrepreneurial Program. Their guidance was exceptional.',
    name: 'Pascal Aloo',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: 2,
    message:
      'Thanks to CareerNava, I successfully navigated the Jasiri Talent Investor Program application process. Their expert advice and encouragement gave me the confidence I needed to stand out and secure my place. I highly recommend their services.',
    name: 'Dennis Njogu',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: 3,
    message:
      "CareerNava played a pivotal role in my master's scholarship application. Their support and thorough preparation helped me secure the Graduate Research Assistantship at Kentucky State University. I’m forever grateful for their unwavering guidance.",
    name: 'Germain Akeza Shine',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: 4,
    message:
      "CareerNava’s support was crucial in helping me through the interview process for my master's program at the University of Oslo. Their tailored coaching and insights were exactly what I needed to succeed.",
    name: 'Joan Mawia',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: 5,
    message:
      "CareerNava’s expertise and personalized approach were key in my successful application for the Mandela Rhodes Scholarship. Their dedication to my success was evident every step of the way. I'm incredibly grateful for their support.",
    name: 'Emanuel Akaka',
    image: 'https://i.pravatar.cc/300',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 5000; // 5 seconds
    const progressInterval = 50; // Update progress every 50ms

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setProgress(0);
    }, intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + (progressInterval / intervalTime) * 100;
      });
    }, progressInterval);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center bg-[#af63f1] px-4 py-12">
      <p className="mb-12 font-bold text-3xl text-white">What Our Users Say</p>
      <div className="mx-auto w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between md:flex-row"
          >
            <div className="mb-8 max-w-2xl text-left md:mr-8 md:mb-0">
              <p className="mb-6 text-3xl text-white md:text-2xl">
                "{testimonials[currentIndex].message}"
              </p>
              <p className="font-semibold text-white text-xl">
                - {testimonials[currentIndex].name}
              </p>
            </div>
            <div className="w-full flex-shrink-0 md:w-auto">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 h-2 w-full max-w-6xl rounded-full bg-white bg-opacity-30">
        <motion.div
          className="h-2 rounded-full bg-[#F6C360]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.05, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
