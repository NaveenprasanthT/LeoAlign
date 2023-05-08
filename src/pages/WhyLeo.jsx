import React from 'react'
import styles from '@/styles/WhyLeo.module.css'
import Image from 'next/image'
import doc1 from '../../public/assets/GowriShankar.png'


const WhyLeo = () => {

    const data = [
        {
            img: '',
            name: 'Name1',
            designation: 'MDS',
            content: <ul className={styles.content}>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <h3>25+ Years for experience</h3>
            </ul>,
        },
        {
            img: '',
            name: 'Name2',
            designation: 'MDS',
            content: <ul className={styles.content}>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <h3>25+ Years for experience</h3>
            </ul>,
        },
        {
            img: '',
            name: 'Name3',
            designation: 'MDS',
            content: <ul className={styles.content}>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <h3>25+ Years for experience</h3>
            </ul>,
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
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h1>Why Leoalign ???</h1>
                <h1>Meet our ALIGNER EXPERTS - Finest ORTHODONTISTS in INDIA</h1>
            </div>
            <div className={styles.doctorCards}>
                {
                    data.map((item, key) => (
                        <div className={styles.cardWrap} key={key}>
                            <Image className={styles.img} src={doc1} />
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