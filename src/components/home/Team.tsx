'use client'

import { motion } from 'framer-motion'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'

import { Briefcase, Paintbrush, Users, UserCircle } from 'lucide-react'

const team = [
    {
        name: 'Tendai Moyo',
        role: 'Project Manager',
        description:
            'Oversees project progress, manages timelines and coordinates the team to ensure smooth execution.',
        image: 'https://picsum.photos/200?random=1',
        icon: <Briefcase className="h-6 w-6 text-blue-600 inline-block mr-2" />,
    },
    {
        name: 'Ruvimbo Chikore',
        role: 'Decorator',
        description:
            'Specializes in wall coverings, textures, and creating beautiful interior finishes.',
        image: 'https://picsum.photos/200?random=2',
        icon: <Paintbrush className="h-6 w-6 text-pink-500 inline-block mr-2" />,
    },
    {
        name: 'Tatenda Ncube',
        role: 'Painter',
        description:
            'Expert in applying paint finishes both interior and exterior with precision and care.',
        image: 'https://picsum.photos/200?random=3',
        icon: <Paintbrush className="h-6 w-6 text-green-600 inline-block mr-2" />,
    },
    {
        name: 'Blessing Dube',
        role: 'Supervisor',
        description:
            'Ensures quality control on-site and manages day-to-day team operations.',
        image: 'https://picsum.photos/200?random=4',
        icon: <Users className="h-6 w-6 text-yellow-500 inline-block mr-2" />,
    },
]

export function TeamSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center gap-2"
                >
                    <UserCircle className="h-8 w-8 text-blue-700" />
                    Meet the Team
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-gray-700 max-w-2xl mx-auto mb-12 text-center"
                >
                    Our skilled team of painters, decorators, and supervisors bring years of experience and passion to every project.
                </motion.p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {team.map((member, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger asChild>
                                <div className="cursor-pointer rounded-lg overflow-hidden shadow-lg p-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-72 object-cover rounded-lg"
                                    />
                                    <h2 className='text-xl font-semibold my-4 text-start text-gray-700 flex items-center justify-center gap-2'>
                                        {member.icon}
                                        {member.name}
                                    </h2>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-64 p-4 rounded-lg bg-white shadow-lg border border-gray-200">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    {member.icon}
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                                <p className="mt-2 text-sm text-gray-700">{member.description}</p>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
