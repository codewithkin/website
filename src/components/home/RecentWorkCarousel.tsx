'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const recentWorks = [
    {
        title: 'Painted a house in Mongoro Ngezi Farm',
        subtitle: '',
        description: 'We painted the entire exterior and interior of this farmhouse in Mongoro Ngezi using weather-resistant paint to ensure durability and a fresh look.',
        imageSrc: '/images/work/mongoro.jpg',
    },
    {
        title: 'Painted a house in Ashdown Park',
        subtitle: '',
        description: 'Transformed the interior of a home in Ashdown Park with premium finish and color consultation to match modern aesthetics.',
        imageSrc: '/images/work/ashdown.jpg',
    },
    {
        title: 'Painted a house in Fairview',
        subtitle: '',
        description: 'This Fairview home received a complete color refresh for all walls and ceilings, enhancing brightness and visual appeal.',
        imageSrc: '/images/work/fairview.jpg',
    },
    {
        title: 'Painting in Falcon Suburbs',
        subtitle: '',
        description: 'Worked on both interior and exterior painting for a new home in Falcon Suburbs, using environmentally friendly paint.',
        imageSrc: '/images/work/falcon.jpg',
    },
    {
        title: 'Painted a house in Arlington',
        subtitle: '',
        description: 'Carried out custom painting for a modern property in Arlington, ensuring sharp lines and even coverage.',
        imageSrc: '/images/work/arlington.jpg',
    },
    {
        title: 'Painted a house in Westlea',
        subtitle: '',
        description: 'Provided surface preparation and painting for walls, ceilings, and wood trims in a lovely home in Westlea.',
        imageSrc: '/images/work/westlea.jpg',
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
        <section className="relative bg-white py-16 px-6 mx-auto max-w-7xl">
            <div className="relative overflow-hidden w-full">
                {/* Slides wrapper */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {recentWorks.map(({ title, subtitle, description, imageSrc }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                            transition={{ duration: 0.5 }}
                            className="min-w-full flex flex-col md:flex-row items-center gap-8 px-6"
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
                                {subtitle && <p className="text-gray-700 mb-2">{subtitle}</p>}
                                <p className="text-gray-600 mb-6">{description}</p>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                                    aria-label={`Contact us about ${title}`}
                                >
                                    Contact Us
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation buttons (always visible) */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="flex absolute left-2 sm:left-0 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="flex absolute right-2 sm:right-0 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </button>
            </div>
        </section>
    )
}
