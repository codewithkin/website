import React from 'react'
import { Header } from '../components/home/Header'
import { Services } from '@/components/home/Services'
import { RecentServicesCarousel } from '@/components/home/RecentWorkCarousel'
import { TeamSection } from '@/components/home/Team'

function Home() {
    return (
        <section>
            <Header />
            <RecentServicesCarousel />
            <Services />
            <TeamSection />
        </section>
    )
}

export default Home
