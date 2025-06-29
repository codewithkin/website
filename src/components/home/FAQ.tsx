'use client'

import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
    {
        question: 'What areas do you serve?',
        answer: 'We serve homes and businesses within and around the Harare metropolitan area and surrounding provinces.'
    },
    {
        question: 'Do you offer free estimates?',
        answer: 'Yes, we offer free, no-obligation estimates for all our painting and decorating services.'
    },
    {
        question: 'What types of paint do you use?',
        answer: 'We use high-quality, eco-friendly paints from trusted brands that ensure durability and vibrant colors.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project duration depends on size and scope, but most residential jobs complete within 3-7 days.'
    }
]

export function FAQ() {
    return (
        <section className="relative py-20 px-6">
            {/* Multi-theme gradient background */}
            <div
                className="
                    absolute inset-0 -z-10
                    bg-gradient-to-br
                    from-blue-50 via-green-50 to-yellow-50
                    dark:from-blue-900 dark:via-green-900 dark:to-yellow-900
                "
            />

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
                Frequently Asked Questions
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
                {faqs.map(({ question, answer }, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg ml-4">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 ml-4">
                            {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 ml-4">
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
