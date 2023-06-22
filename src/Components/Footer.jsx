import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import IG from '../../public/assets/IG.png'
import fb from '../../public/assets/facebook.png'
import Link from 'next/link'



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
                    <p><Link style={{textDecoration: 'none', color: '#000'}} href='/Privacy-Policy'> Privacy Policy</Link>  | <Link style={{textDecoration: 'none', color: '#000'}} href='/Terms-and-Condition'> Terms and Conditions</Link></p>
                </div>
            </div>
            <div className={styles.socialIcons}>
                <a className={styles.socialIcon} href="https://www.instagram.com/leo_align/"><Image style={{ width: '100%', height: '100%' }} src={IG} alt='icons' /></a>

                <a className={styles.socialIcon} href="https://www.facebook.com/profile.php?id=100093060575261&mibextid=ZbWKwL"><Image style={{ width: '100%', height: '100%' }} src={fb} alt='icons' /></a>

            </div>
        </div>
    )
}

export default Footer