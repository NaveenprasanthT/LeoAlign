import Head from 'next/head'
import styles from '@/styles/FAQ.module.css'
import Image from 'next/image'
import banner from '../../public/assets/faqBanner.png'
import call from '../../public/assets/call.png'
import Faq from '@/Components/FAQ/Faq'
import Form from '@/Components/Form'


export default function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <div >
                    <Image src={banner} alt='banner' className={styles.banner} />
                    <div className={styles.bannerContent}>Hear from the <span style={{ color: "var(--primary-color)" }}>experts</span></div>
                </div>
                <Faq />
                <div className={styles.queryWrap}>
                    <h2>Have a <span className={styles.red}>Query</span></h2>
                    <h2>Talk directly to our Professional Doctors</h2>
                    <div className={styles.call}>
                        <Image width={60} src={call} alt='callIcon' />
                        <h2><span className={styles.red}>CALL</span> 8951183999</h2>
                    </div>
                </div>
                <Form />
            </>
        </>
    )
}
