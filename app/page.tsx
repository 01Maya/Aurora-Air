import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Collection from '@/components/Collection'
import Features from '@/components/Features'
import Offers from '@/components/Offers'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import AnimatedBlobs from '@/components/AnimatedBlobs'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBlobs />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Collection />
        <Features />
        <Offers />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}
