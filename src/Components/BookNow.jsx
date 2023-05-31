import React from 'react'
import styles from '@/styles/BookNow.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import img from '../../public/assets/doctorCheckup.jpg'
import Form from './Form'

const BookNow = () => {
    return (
        <div className={styles.BookNowWrap}  >
            <div className={styles.topBanner}>
                <h1>First time in <span style={{ color: 'var(--primary-color)' }} > INDIA</span></h1>
                <h1>Consult your treatment planning Doctor directly </h1>
            </div>
            <div className={styles.secondBanner}>
                <div className={styles.left}>
                    <Image className={styles.logo} src={logo} alt='log' />
                    <h2 >Talk directly to your treatment planner <span style={{ color: 'var(--secondary-color)' }} >ORTHODONTIST</span>.
                        Our professional expert <span style={{ color: 'var(--secondary-color)' }} >DOCTORS</span> are here to guide through your aligner journey.</h2>
                        <div id='contact'></div>
                </div>
                <div className={styles.right} >
                    <Image className={styles.img} src={img} alt='image' />
                </div >
            </div>
            
            {/* Form Section */}
            <Form />
            <div className={styles.msgSection}>
                <Image className={styles.logo} src={logo} alt='logo' />
                <h1>“Entrust your smile to the professionals”</h1>
            </div>
        </div>
    )
}

export default BookNow