import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/Components/HeroSection'
import FirstAlignerFree from '@/Components/FirstAlignerFree'
import Testimonials from '@/Components/Testimonials'
import BookNow from '@/Components/BookNow'
import VideoSection from '@/Components/VideoSection'
import WhyLeo from '@/Components/WhyLeo'


export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Align</title>
        <meta name="description" content="Entrust your smile to the professionals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homePage}>
        <HeroSection />
        <FirstAlignerFree />
        <WhyLeo />
        <VideoSection />
        <Testimonials />
        <BookNow />
        
      </div>
    </>
  )
}
