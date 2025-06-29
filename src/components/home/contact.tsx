'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Label } from '@radix-ui/react-label'

export function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            setSuccess(true)
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="py-20 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Info Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
                    <p className="text-lg text-gray-700 max-w-md">
                        We’re here to help and answer any question you might have. We look forward to hearing from you.
                    </p>

                    <div className="space-y-4 text-gray-800 max-w-md">
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-6 h-6 text-indigo-600" />
                            <span>123 Main Street, Harare, Zimbabwe</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-6 h-6 text-indigo-600" />
                            <a href="tel:+263712345678" className="hover:underline">+263 71 234 5678</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6 text-indigo-600" />
                            <a href="mailto:kinzinzombe07@gmail.com" className="hover:underline">kinzinzombe07@gmail.com</a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-md"
                    noValidate
                >
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="border-indigo-600 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="border-indigo-600 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message"
                            required
                            className="border-indigo-600 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            rows={5}
                            required
                            className="border-indigo-600 focus:ring-indigo-600"
                        />
                    </div>

                    {error && <p className="text-red-600 font-semibold">{error}</p>}
                    {success && <p className="text-green-600 font-semibold">Message sent successfully!</p>}

                    <Button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                </motion.form>
            </div>
        </section>
    )
}
