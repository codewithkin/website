import React from 'react'
import { Header } from '../components/home/Header'
import { Services } from '@/components/home/Services'
import { RecentServicesCarousel } from '@/components/home/RecentWorkCarousel'
import { TeamSection } from '@/components/home/Team'
import { ProjectStats } from '@/components/home/project-stats'

function Home() {
    return (
        <section>
            <Header />
            <RecentServicesCarousel />
            <Services />
            <TeamSection />
            <ProjectStats />
        </section>
    )
}

export default Home
