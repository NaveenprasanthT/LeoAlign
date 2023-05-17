import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'


const Footer = () => {
    return (
        <div className={styles.footerWrap}>
            <Image src={logo} alt='logo' className={styles.logo} />
            <div className={styles.footerContent}>
                <h1 className={styles.highlight} >Leora Health Care Private Limited</h1>
                <div className={styles.rights}>
                    <p>Copyright</p>
                    <div className={styles.highlight}> © 2023  </div>
                    <p> | All Rights Reserved.</p>
                </div>
                <div className={styles.termsCondition}>
                    <p>Privacy Policy  |  Terms and Conditions</p>
                </div>
            </div>
            <div className={styles.socialIcons}>Social Media</div>
        </div>
    )
}

export default Footer