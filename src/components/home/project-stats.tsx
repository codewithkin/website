'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Layers, PencilRuler } from 'lucide-react'

export function ProjectStats() {
    return (
        <section className="relative py-20">
            {/* Multi-theme gradient background */}
            <div
                className="
          absolute inset-0 -z-10
          bg-gradient-to-br
          from-blue-50 via-green-50 to-yellow-50
          dark:from-blue-900 dark:via-green-900 dark:to-yellow-900
        "
            />

            <div className="max-w-6xl mx-auto px-6 text-gray-900 dark:text-gray-100">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-8 text-center"
                >
                    Project Statistics
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <Paintbrush className="w-12 h-12 mb-3 text-blue-600 dark:text-blue-300" />
                        <span className="text-4xl font-extrabold">120+</span>
                        <span className="mt-1 text-lg font-semibold">Houses Painted</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <Layers className="w-12 h-12 mb-3 text-green-600 dark:text-green-300" />
                        <span className="text-4xl font-extrabold">75+</span>
                        <span className="mt-1 text-lg font-semibold">Decorating Projects</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <PencilRuler className="w-12 h-12 mb-3 text-yellow-600 dark:text-yellow-300" />
                        <span className="text-4xl font-extrabold">50+</span>
                        <span className="mt-1 text-lg font-semibold">Signwriting Jobs</span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
