import React, { useState, useEffect } from 'react'
import styles from '@/styles/Testimonials.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'


const Testimonials = () => {

    const data = [
        {
            name: 'Sakshi S',
            designation: 'Infulencer',
            img: require('../../public/assets/review/testimonialPerson.png'),
            review: 'Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am'
        },
        {
            name: 'Prateek Huda',
            designation: 'Software Engineer',
            img: require('../../public/assets/review/testimonialPerson2.png'),
            review: 'My overlapped front teeth were corrected with perfect finishing with in six months of my treatment. My overall confidence levels are raised after I am.'
        },
        {
            name: 'Samiksha Rao ',
            designation: 'Fashion Technology Student',
            img: require('../../public/assets/review/testimonialPerson3.png'),
            review: 'I corrected by forwardly placed teeth with Leoalign and I cant be more thankful. They corrected my smile without removing additional teeth and I am utterly happy to be'
        },
        {
            name: 'Niharika Goyal',
            designation: 'Student Of Fine Arts',
            img: require('../../public/assets/review/testimonialPerson4.png'),
            review: 'My teeth were irregular and I had speech issues coz of that. Leoalign not only corrected my teeth but improved my speech as well….elated to be'
        },
        {
            name: 'Deekshita Gowda',
            designation: 'Classical Dancer ',
            img: require('../../public/assets/review/testimonialPerson5.png'),
            review: 'All my stage fears and inhibitions vanished once my smile got corrected through Leoalign. I evolved like a butterfly and just cant stop smiling….beaming with pride to be'
        },
        {
            name: 'Swagat Sindiri',
            designation: 'Entrepreneur',
            img: require('../../public/assets/review/testimonialPerson6.png'),
            review: 'My upper and lower teeth were placed in a very wrong position and were giving me jaw pain. Leoalign corrected my cross bite and put my teeth in Ideal position. I am sure to say I got saved by getting'
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
                <div className={styles.title}><h1 style={{ color: 'var(--secondary-color)' }}></h1><Image className={styles.logo} src={logo} alt="logo" /> <h1>Smiles</h1></div>
                <p>Stories to share…smile victories to cherish……our LEOALIGNED patients….</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div className={styles.cardWrap} key={key}>
                            <Image className={styles.img} src={item.img} alt='Person' />
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