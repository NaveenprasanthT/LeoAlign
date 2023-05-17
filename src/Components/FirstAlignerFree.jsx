import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from '@/styles/FirstAlignerFree.module.css'
import img1 from '../../public/assets/aligner01.png'
import img2 from '../../public/assets/aligner02.png'
import img3 from '../../public/assets/aligner03.png'

const FirstAlignerFree = () => {
    const content = [
        {
            id: 1,
            text: "No downpayment",
        },
        {
            id: 2,
            text: "With no EMI’s",
        },
        {
            id: 3,
            text: "No hidden cost",
        },
        {
            id: 4,
            text: "It’s on Us!",
        }
    ];

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
        <>
            <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            width: 60%;
        }

        .content {
            opacity: 0.1;
            transition: opacity 1s ease-in-out;
        }

        .active {
            opacity: 1;
        }

        .content p {
            font-weight: 500;
            font-size: 36px;
            margin: 10px 0;
        }

        @media screen and (max-width: 750px) {
            .content p {
                font-size: 18px;
                /* color: #000000dd; */
            }
        }
    `}</style>
            <div className={styles.header}>
                <h1>First time in <span style={{ color: 'var(--primary-color)' }}>INDIA</span></h1>
                <h1>Get Your <span style={{ color: 'var(--primary-color)' }}>FIRST ALIGNER</span> For Free</h1>
            </div>

            {/* <div className={styles.mainContent}>
                <div className="container" >
                    {content.map((item, index) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}
                            key={item.id}
                            className={`content ${index === activeIndex ? "active" : ""}`}
                        >
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.relative} >
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
            </div> */}
            <div className={styles.scroll} id='about'>
                <marquee behavior="scroll" direction=""><span className={styles.red} >Try</span> it before you <span className={styles.red} >choose</span> it <span className={styles.red} > Try</span> it before you <span className={styles.red} >choose</span> it<span className={styles.red} >Try </span> it before you <span className={styles.red} >choose</span> it</marquee>
            </div>
        </>
    )
}

export default FirstAlignerFree