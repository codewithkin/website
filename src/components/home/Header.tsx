// components/header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

/**
 * Hero / page‑header for Propainters.
 *
 * – Responsive full‑width section with a colourful paint‑stroke backdrop
 * – Framer‑motion entrance + subtle hover wiggle on the CTA
 * – Optimised next/image for the paint texture
 */
export function Header() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Paint‑stroke background image */}
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
          priority
          className="object-cover"
        />
        {/* A darker overlay for improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/70 mix-blend-multiply" />
      </motion.div>

      <div className="container relative mx-auto flex flex-col items-center justify-center py-28 text-center md:py-40">
        {/* Badge */}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-4 inline-block rounded-full bg-gray-900/90 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-gray-100 backdrop-blur-lg"
        >
          Painting • Decorating • Signwriting
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto md:max-w-6xl sm:max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl"
        >
          Professional{' '}
          <span className="inline-flex space-x-1">
            <span className="bg-red-500 bg-gradient-to-r from-red-400 to-red-600 px-1 rounded-sm">P</span>
            <span className="bg-yellow-400 bg-gradient-to-r from-yellow-300 to-yellow-500 px-1 rounded-sm">a</span>
            <span className="bg-green-500 bg-gradient-to-r from-green-400 to-green-600 px-1 rounded-sm">i</span>
            <span className="bg-blue-500 bg-gradient-to-r from-blue-400 to-blue-600 px-1 rounded-sm">n</span>
            <span className="bg-indigo-500 bg-gradient-to-r from-indigo-400 to-indigo-600 px-1 rounded-sm">t</span>
            <span className="bg-purple-500 bg-gradient-to-r from-purple-400 to-purple-600 px-1 rounded-sm">i</span>
            <span className="bg-pink-500 bg-gradient-to-r from-pink-400 to-pink-600 px-1 rounded-sm">n</span>
            <span className="bg-red-400 bg-gradient-to-r from-red-300 to-red-500 px-1 rounded-sm">g</span>
          </span>
          , Decorating & Signwriting Services
        </motion.h1>


        {/* Sub‑heading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 text-center max-w-4xl text-lg text-gray-200 md:text-xl"
        >
          We paint houses, offices, shops, and more — anywhere in Zimbabwe. Quick, clean and high-quality work you can trust.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Button asChild size="lg" className="rounded-full px-8 py-4 bg-black text-white hover:bg-gray-800">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative angled bottom edge */}
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-10 w-full text-gray-900"
      >
        <polygon points="0,0 100,10 100,10 0,10" className="fill-gray-900" />
      </svg>
    </header>
  )
}
