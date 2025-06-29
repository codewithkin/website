import React from 'react'
import { Header } from '../components/home/Header'
import { Services } from '@/components/home/Services'
import { RecentServicesCarousel } from '@/components/home/RecentWorkCarousel'

function Home() {
    return (
        <section>
            <Header />
            <RecentServicesCarousel />
            <Services />
        </section>
    )
}

export default Home
