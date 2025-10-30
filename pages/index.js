import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Reiki from '../src/components/Reiki'
import Blog from '../src/components/Blog'
import Booking from '../src/components/Booking'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaoReiki - Certified Reiki Practitioner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="App">
        <Navigation />
        <Hero />
        <About />
        <Reiki />
        <Blog />
        <Booking />
        <Footer />
      </main>
    </>
  )
}
