import React from 'react'
import styles from '@/styles/Video.module.css'

const VideoSection = () => {

    const data = [
        {
            video: '',
            content: 'Crooked Teeth'
        },
        {
            video: '',
            content: 'Crossbite'
        },
        {
            video: '',
            content: 'Crowding'
        },
        {
            video: '',
            content: 'Open Bite'
        },
        {
            video: '',
            content: 'Overbite'
        },
        {
            video: '',
            content: 'Overjet'
        },
        {
            video: '',
            content: 'Spacing'
        },
        {
            video: '',
            content: 'Underbite'
        },
    ]

    return (
        <div className={styles.wrapSection}>
            <div className={styles.head}>
                <p>Your smile is precious</p>
                <h1>Let only professionals take care of it!</h1>
            </div>
            <div className={styles.videoSection}>
                <h2>Craft your Smile with Leoalign</h2>
                <div className={styles.videoCards}>
                    {
                        data.map((item, key) => (
                            <div className={styles.card} key={key}>
                                <video src="" />
                                <div className={styles.videoDesc}>{item.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.mainVideo}>
                <h1>Path to Leoalign</h1>
                <video alt='video' src="" />
            </div>
        </div>
    )
}

export default VideoSection