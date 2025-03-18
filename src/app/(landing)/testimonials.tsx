'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        message: "CareerNava was instrumental in my journey to securing a spot in the Jasiri Entrepreneurial Program. Their guidance was exceptional.",
        name: "Pascal Aloo",
        image: "/public/images/kevin.jpeg"
    },
    {
        id: 2,
        message: "Thanks to CareerNava, I successfully navigated the Jasiri Talent Investor Program application process. Their expert advice and encouragement gave me the confidence I needed to stand out and secure my place. I highly recommend their services.",
        name: "Dennis Njogu",
        image: "/public/images/people/njogu.jpg"
    },
    {
        id: 3,
        message: "CareerNava played a pivotal role in my master's scholarship application. Their support and thorough preparation helped me secure the Graduate Research Assistantship at Kentucky State University. I’m forever grateful for their unwavering guidance.",
        name: "Germain Akeza Shine",
        image: "https://i.pravatar.cc/300"
    },
    {
        id: 4,
        message: "CareerNava’s support was crucial in helping me through the interview process for my master's program at the University of Oslo. Their tailored coaching and insights were exactly what I needed to succeed.",
        name: "Joan Mawia",
        image: "/public/images/people/joan.jpg"
    },
    {
        id: 5,
        message: "CareerNava’s expertise and personalized approach were key in my successful application for the Mandela Rhodes Scholarship. Their dedication to my success was evident every step of the way. I'm incredibly grateful for their support.",
        name: "Emanuel Akaka",
        image: "/public/images/lameck.png"
    }
]


export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const intervalTime = 3000 // 5 seconds
        const progressInterval = 30 // Update progress every 50ms

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
            setProgress(0)
        }, intervalTime)

        const progressTimer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    return 0
                }
                return prevProgress + (progressInterval / intervalTime) * 100
            })
        }, progressInterval)

        return () => {
            clearInterval(timer)
            clearInterval(progressTimer)
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-12 bg-[#af63f1]">
            <h2 className="text-white text-3xl font-bold mb-4">What Our <span className="text-yellow-300">Users</span> Say</h2>
            <div className="w-full max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-between"
                    >
                        <div className="text-left max-w-2xl mb-8 md:mb-0 md:mr-8">
                            <p className="text-3xl md:text-2xl text-white mb-6">
                                "{testimonials[currentIndex]?.message}"
                            </p>
                            <p className="text-xl font-semibold text-white">
                                - {testimonials[currentIndex]?.name}
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex-shrink-0">
                            <img
                                src={testimonials[currentIndex]?.image}
                                alt={testimonials[currentIndex]?.name}
                                width={300}
                                height={300}
                                className="rounded-full"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-full max-w-6xl mt-8 bg-white bg-opacity-30 rounded-full h-2">
                <motion.div
                    className="bg-[#F6C360] h-2 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: "linear" }}
                />
            </div>
        </div>
    )
}