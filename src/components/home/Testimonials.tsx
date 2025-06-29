'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const testimonials = [
    {
        name: 'Tendai Moyo',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        testimonial:
            'Great service and amazing quality! They transformed my home beyond expectations.',
    },
    {
        name: 'Tatenda Chirwa',
        image: 'https://randomuser.me/api/portraits/men/42.jpg',
        testimonial:
            'Professional team and very reliable. Highly recommend for any painting or decorating work.',
    },
    {
        name: 'Rudo Musti',
        image: 'https://randomuser.me/api/portraits/women/77.jpg',
        testimonial:
            'The signwriting they did on my vehicle really made my business stand out. Excellent craftsmanship!',
    },
    {
        name: 'Farai Dube',
        image: 'https://randomuser.me/api/portraits/men/53.jpg',
        testimonial:
            'Very punctual and detail-oriented. I appreciated their dedication to finishing on time.',
    },
]

export function Testimonials() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>

                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    {testimonials.map(({ name, image, testimonial }, i) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <Card className="flex flex-col items-center justify-center bg-gray-200 border border-gray-500">
                                <CardContent>
                                    <p className="text-gray-800 text-lg font-medium"><span className='text-4xl text-blue-900'>&quot;</span>{testimonial}</p>
                                </CardContent>
                                <article className="flex justify-center items-center gap-2 p-4">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-16 h-16 rounded-full mb-4 object-cover"
                                        loading="lazy"
                                    />

                                    <article className="flex flex-col">
                                        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                                        <CardDescription className="italic text-sm">Client</CardDescription>
                                    </article>
                                </article>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
