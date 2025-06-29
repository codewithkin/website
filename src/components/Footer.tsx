'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="relative isolate overflow-hidden text-gray-200">
            {/* Paint-texture background + dark overlay */}
            <motion.div
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <Image
                    src="/paint-texture.jpg"
                    alt=""
                    fill
                    priority={false}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/70 mix-blend-multiply" />
            </motion.div>

            <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* About / Logo or heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4 max-w-sm"
                >
                    <h3 className="text-2xl font-bold tracking-wide">
                        Propainters
                    </h3>
                    <p className="text-gray-300">
                        Professional Painting, Decorating & Signwriting services across Zimbabwe. High quality, clean & fast.
                    </p>
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Propainters. All rights reserved.</p>
                </motion.div>

                {/* Quick Links */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col space-y-2"
                >
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
                    <Link href="/services" className="hover:text-indigo-400 transition">Services</Link>
                    <Link href="/about" className="hover:text-indigo-400 transition">About Us</Link>
                    <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
                </motion.nav>

                {/* Contact Info & Social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-4"
                >
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <address className="not-italic space-y-2 text-gray-300">
                        <p>123 Main Street, Harare, Zimbabwe</p>
                        <p>Phone: <a href="tel:+263712345678" className="hover:text-indigo-400 transition">+263 71 234 5678</a></p>
                        <p>Email: <a href="mailto:kinzinzombe07@gmail.com" className="hover:text-indigo-400 transition">kinzinzombe07@gmail.com</a></p>
                    </address>
                    <div className="flex space-x-6 mt-4">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-indigo-400 transition">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-indigo-400 transition">
                            <Twitter size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-indigo-400 transition">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
