'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <section className="relative isolate min-h-screen flex items-center justify-center px-6 py-24 text-center text-white">
            {/* Background texture with gradient overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 -z-10"
            >
                <Image
                    src="/paint-texture.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/70 mix-blend-multiply" />
            </motion.div>

            <div className="space-y-8 max-w-2xl mx-auto">
                {/* Big 404 heading with color effect */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-7xl md:text-9xl font-extrabold tracking-tight drop-shadow-lg"
                >
                    <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                        404
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold"
                >
                    Whoops! Page Not Found.
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="text-lg text-gray-300 max-w-lg mx-auto"
                >
                    Looks like you’ve wandered off the painted path. The page you’re looking for doesn’t exist.
                </motion.p>

                {/* Go Back Button */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-white text-black hover:bg-gray-100"
                    >
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
