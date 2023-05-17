import React from 'react'
import styles from '@/styles/BookNow.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import call from '../../public/assets/call.png'
import img from '../../public/assets/faqForm.png'

const Form = () => {
    return (
        <form action="" className={styles.formSection} >
            <Image className={styles.logo} src={logo} alt='logo' />
            <p className={styles.content}>Enhance your smile and confidence with state of art treatment protocols and world-class aligners. Give yourself the best gift possible….your smile….. get LEOALIGNED.</p>
            <div className={styles.formWrap}>
                <div className={styles.formSectionLeft}>
                    <Image className={styles.image} src={img} alt='formImages' />
                </div>
                <div className={styles.form}>
                    <div className={styles.formLeft}>
                        <label htmlFor="name">NAME</label>
                        <input  autoComplete='name' id='name'  type="text" placeholder='Enter your name' />
                        <label htmlFor="email">EMAIL</label>
                        <input  autoComplete='email' id='email' type="email" placeholder='Enter your Email ID' />
                    </div>
                    <div className={styles.formRight}>
                        <>
                            <label  htmlFor="phone">PHONE NUMBER</label>
                            <input  autoComplete='phone' id='phone' type="text" placeholder='Enter your Phone number' />
                        </>
                        <>
                            <label htmlFor="loc">LOCATION</label>
                            <input id='loc' type="text" placeholder='Enter your Location' />
                        </>
                    </div>
                    <div className={styles.formBottom}>
                        <label htmlFor="msg">WHAT ARE YOU LOOKING FOR?</label>
                        <input  autoComplete='message' id='msg' type="text" placeholder='ENter your messages...' />
                    </div>
                </div>
            </div>
            <div className={styles.submitSection}>
                <input type="submit" value='Book scan' />
                <a href='tel:+918951183999' className={styles.call}>
                    <Image height={40} src={call} alt='' />
                    <h3>8951183999</h3>
                </a>
            </div>
        </form>
    )
}

export default Form