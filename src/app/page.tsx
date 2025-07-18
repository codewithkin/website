import React from 'react'
import { Header } from '../components/home/Header'
import { Services } from '@/components/home/Services'
import { RecentServicesCarousel } from '@/components/home/RecentWorkCarousel'
import { TeamSection } from '@/components/home/Team'
import { ProjectStats } from '@/components/home/project-stats'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { ContactSection } from '@/components/home/contact'

function Home() {
    return (
        <section>
            <Header />
            <RecentServicesCarousel />
            <Services />
            <TeamSection />
            <ProjectStats />
            <Testimonials />
            <FAQ />
            <ContactSection />
        </section>
    )
}

export default Home
