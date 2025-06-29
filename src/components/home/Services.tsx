'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Layers, PencilRuler, ArrowRight } from 'lucide-react'

const services = [
    {
        title: 'Painting',
        description: 'Interior and exterior painting for homes, offices, shops, and commercial buildings.',
        icon: Paintbrush,
        iconBg: 'bg-blue-400',
        iconText: 'text-blue-800',
    },
    {
        title: 'Decorating',
        description: 'Wall coverings, textures, wallpaper installation, and decorative finishes.',
        icon: Layers,
        iconBg: 'bg-green-300',
        iconText: 'text-green-800',
    },
    {
        title: 'Signwriting',
        description: 'Custom signs, logos, banners, vehicle branding, and promotional graphics.',
        icon: PencilRuler,
        iconBg: 'bg-yellow-300',
        iconText: 'text-yellow-800',
    },
]

export function Services() {
    return (
        <section className="relative py-20">
            {/* Multi‑theme gradient background */}
            <div
                className="
          absolute inset-0 -z-10
          bg-gradient-to-br
          from-blue-50 via-green-50 to-yellow-50
          dark:from-blue-900 dark:via-green-900 dark:to-yellow-900
        "
            />

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center"
                >
                    Our Services
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-center"
                >
                    We offer a full range of painting, decorating, and signwriting services to make your space stand out.
                </motion.p>

                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto justify-items-center">
                    {services.map(({ title, description, icon: Icon, iconBg, iconText }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="
                bg-white dark:bg-gray-800
                rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow
                flex flex-col items-center text-center relative
              "
                        >
                            <div
                                className={`absolute -top-6 -left-6 w-16 h-16 rounded-full flex items-center justify-center ${iconBg} ${iconText} shadow-md`}
                            >
                                <Icon className="w-8 h-8" />
                            </div>
                            <div className="pt-10" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 transition-all duration-200"
                            >
                                <span className="transition-colors duration-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 font-semibold">
                                    Contact us
                                </span>
                                <ArrowRight
                                    className="w-5 h-5 transition-all duration-200 group-hover:ml-2 group-hover:text-blue-800 dark:group-hover:text-blue-400"
                                />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
