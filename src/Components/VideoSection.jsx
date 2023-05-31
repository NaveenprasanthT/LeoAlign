import React, { useRef, useEffect } from 'react'
import styles from '@/styles/Video.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

const VideoSection = () => {

    const videoEl = useRef(null);
    const videoEl2 = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };
    const attemptPlay2 = () => {
        videoEl2 &&
            videoEl2.current &&
            videoEl2.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
        attemptPlay2();
    }, []);

    const data = [
        {
            video: '/assets/teethVideos/CrookedTeeth.mp4',
            content: 'Crooked Teeth'
        },
        {
            video: '/assets/teethVideos/CrossBite.mp4',
            content: 'Cross Bite'
        },
        {
            video: '/assets/teethVideos/DeepBite.mp4',
            content: 'Deep Bite'
        },
        {
            video: '/assets/teethVideos/ForwardlyPlaced.mp4',
            content: 'Forwardly Placed'
        },
        {
            video: '/assets/teethVideos/OpenBite.mp4',
            content: 'Open Bite'
        },
        {
            video: '/assets/teethVideos/TeethGap.mp4',
            content: 'Teeth Gap'
        },
    ]

    return (
        <div className={styles.wrapSection}>
            <div className={styles.head}>
                <p>Your smile is precious</p>
                <h1>Let only professionals take care of it!</h1>
            </div>
            <div className={styles.videoSection}>
                <div className={styles.title}>
                    <h2>Craft your Smile with</h2>
                    <Image className={styles.logo} src={logo} alt='logo' />
                </div>
                <div className={styles.videoCards}>
                    {
                        data.map((item, key) => (
                            <div className={styles.card} key={key}>

                                <video
                                    autoPlay
                                    className={styles.viedo}
                                    ref={videoEl}
                                    src={item.video}
                                    type="video/mp4"
                                    loop
                                    muted
                                />
                                <div className={styles.videoDesc}>{item.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.mainVideo}>
                <div className={styles.pathTo} style={{ display: 'flex' }}>
                    <h1>Path to </h1>
                    <Image className={styles.PathLogo} src={logo} alt='logo' />
                </div>
                <video
                    autoPlay
                    className={styles.largeViedo}
                    ref={videoEl2}
                    src="/assets/mainVideo.mp4"
                    type="video/mp4"
                    loop
                    muted
                />
            </div>
        </div>
    )
}

export default VideoSection



//  <video
// autoPlay
// className={styles.viedo}
// ref={videoEl}
// src='/assets/teethVideos/leoalignVideo.mp4'
// type="video/mp4"
// loop
// muted
// />