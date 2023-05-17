import React from 'react'
import styles from '@/styles/WhyLeo.module.css'
import Image from 'next/image'
import doc1 from '../../public/assets/GowriShankar.png'
import doc2 from '../../public/assets/feroz.png'
import doc3 from '../../public/assets/lahari.png'


const WhyLeo = () => {

    const data = [
        {
            img: doc1,
            name: 'Dr. Gowri Shankar',
            designation: 'MDS',
            content: <div className={styles.content}>
                <ul>
                    <li>Orthodontics & Dento Facial Orthopaedics.</li>
                    <li>Aligner Expert, Treatment plan provider.</li>
                    <li>Professor, Department of Orthodontics.</li>
                    <li>Author, Dentest, Dental bytes.</li>
                    <li>Mentor, LeoAlign.</li>
                </ul>
                <h3>25+ Years for experience</h3>
            </div>,
        },
        {
            img: doc2,
            name: 'Dr. Feroz',
            designation: 'MDS',
            content: <div className={styles.content}>
                <ul>
                    <li> Orthodontics & Dento Facial Orthopaedics.</li>
                    <li>Aligner Expert.</li>
                    <li>Smile Designer.</li>
                    <li>Cosmetic & Aesthetic dentist.</li>
                    <li>Director, LeoAlign.</li>
                </ul>
                <h3>15+ Years for experience</h3>
            </div>,
        },
        {
            img: doc3,
            name: 'Dr. Lahari',
            designation: 'MDS',
            content: <div className={styles.content}>
                <ul>
                    <li>Public Health Dentist.</li>
                    <li>Gold Medalist.</li>
                    <li>Smile Designing Expert.</li>
                    <li>Director, LeoAlign.</li>
                </ul>
                <h3>15+ Years for experience</h3>
            </div>,
        },
    ]

    const countData = [
        {
            count: '16000+',
            content: 'Patients Treated'
        },
        {
            count: '250+',
            content: 'Team of Dentist'
        },
        {
            count: '700+',
            content: 'Our Providers'
        },
    ]

    return (
        <div className={styles.wrap} >
            <div className={styles.head}>
                <h1><span className={styles.red}>|</span> Why <span className={styles.red}>Leoalign</span> ???</h1>
                <h1>Meet our <span className={styles.red}>ALIGNER EXPERTS</span> - Finest <span className={styles.red}>ORTHODONTISTS</span> in INDIA</h1>
            </div>
            <div className={styles.doctorCards}>
                {
                    data.map((item, key) => (
                        <div className={styles.cardWrap} key={key}>
                            <Image className={styles.img} src={item.img} alt='image' />
                            <div className={styles.name_designation}>
                                <h5 className={styles.name}>{item.name}</h5>
                                <p className={styles.designation}>{item.designation}</p>
                            </div>
                            {item.content}
                        </div>
                    ))
                }
            </div>
            <div className={styles.countSection}>
                {
                    countData.map((item, key) => (
                        <div className={styles.count} key={key} >
                            <h1>{item.count}</h1>
                            <div className={styles.line}></div>
                            <h2>{item.content}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyLeo