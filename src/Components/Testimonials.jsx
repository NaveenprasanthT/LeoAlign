import React, { useState, useEffect } from 'react'
import styles from '@/styles/Testimonials.module.css'
import Image from 'next/image'
import person1 from '../../public/assets/testimonialPerson.png'
import logo from '../../public/assets/logo.png'


const Testimonials = () => {

    const data = [
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Name1',
            designation: 'designation',
            img: require('../../public/assets/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },


    ]
    const images = [
        '/assets/aligner01.png',
        '/assets/aligner02.png',
        '/assets/aligner03.png',
        '/assets/aligner01.png',
        // Add more image URLs here
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % 4);
            setFadeIn(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setFadeIn(false);
            }, 400); // Adjust the delay here if needed
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.head}>
                <div style={{ display: 'flex' }} ><h1 style={{ color: 'var(--secondary-color)' }}>I </h1><Image className={styles.logo} src={logo} alt="logo" /> <h1>Smiles</h1></div>
                <p>Stories to share…smile victories to cherish……our LEOALIGNED patients….</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div className={styles.cardWrap} key={key}>
                            <Image className={styles.img} src={person1} alt='Person' />
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.designation}>{item.designation}</div>
                            <div className={styles.review}>
                                {item.review} <span className={styles.highlight}> Leoaligned.</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.bestSmile}>
                <div className={styles.title}>Your Best Smile Crafted At <Image className={styles.bestSmileLogo} src={logo} alt="logo" /></div>
                <div className={styles.contentWrap}>
                    <div className={styles.left}>
                        <div className={styles.listItem}>Completely Professional</div>
                        <div className={styles.listItem}>Customised</div>
                        <div className={styles.listItem}>Invisible</div>
                        <div className={styles.listItem}>Removable</div>
                        <div className={styles.listItem}>Digital</div>
                        <div className={styles.listItem}>Painless</div>
                        <div className={styles.listItem}>Accurate Results</div>
                    </div>
                    <div className={styles.right}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt='image'
                                style={{
                                    opacity: index === currentImage ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                                className={fadeIn ? 'fade-in' : ''}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials