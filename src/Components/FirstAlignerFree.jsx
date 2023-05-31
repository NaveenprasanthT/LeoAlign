import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import styles from '@/styles/FirstAlignerFree.module.css'
// import video from '../../public/assets/leoalignVideo.mp4'

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

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);




    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % 4);
            setFadeIn(true);
            setTimeout(() => {
                setFadeIn(false);
            }, 400); // Adjust the delay here if needed
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);



    return (
        <>
            <style jsx>{`
        

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

            <div className={styles.mainContent}>
                <div className={styles.container} >
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
                    <video
                        autoPlay
                        className={styles.viedo}
                        ref={videoEl}
                        src="/assets/leoalignVideo.mp4"
                        type="video/mp4"
                        loop
                        muted
                    />
                </div>
            </div>
            <div className={styles.scroll} id='about'>
                <marquee behavior="scroll" direction=""><span className={styles.red} >Try</span> it before you <span className={styles.red} >choose</span> it <span className={styles.red} > Try</span> it before you <span className={styles.red} >choose</span> it<span className={styles.red} >Try </span> it before you <span className={styles.red} >choose</span> it</marquee>
            </div>
        </>
    )
}

export default FirstAlignerFree