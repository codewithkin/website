'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const recentWorks = [
    {
        title: 'Painted XYZ Office',
        subtitle: 'Modern corporate look with premium finishes',
        imageSrc: '/projects/xyz-office.jpg',
    },
    {
        title: 'Signwriting for ABC Store',
        subtitle: 'Custom hand-painted logo and branding',
        imageSrc: '/projects/abc-store-sign.jpg',
    },
    {
        title: 'Residential Refresh in Harare',
        subtitle: 'Bright and fresh interior painting',
        imageSrc: '/projects/harare-home.jpg',
    },
]

export function RecentServicesCarousel() {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent((current - 1 + recentWorks.length) % recentWorks.length)
    }
    const nextSlide = () => {
        setCurrent((current + 1) % recentWorks.length)
    }

    return (
        <section className="relative bg-white py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Recent Work</h2>

            {/* Carousel container */}
            <div className="relative overflow-hidden">
                {/* Slides */}
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {recentWorks.map(({ title, subtitle, imageSrc }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
                            aria-hidden={current !== index}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority={current === index}
                                />
                            </div>

                            {/* Text content */}
                            <div className="md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-700 mb-6">{subtitle}</p>
                                <Link href="/contact">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                                        aria-label={`Contact us about ${title}`}
                                    >
                                        Contact Us
                                    </motion.a>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <ChevronLeft className="h-6 w-6 text-blue-600" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <ChevronRight className="h-6 w-6 text-blue-600" />
                </button>
            </div>
        </section>
    )
}
