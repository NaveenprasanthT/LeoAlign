import React, { useState } from 'react'
import Image from 'next/image';
import styles from '@/styles/FirstAlignerFree.module.css'

const FirstAlignerFree = () => {
    const [highlightedContentIndex, setHighlightedContentIndex] = useState(0);

    const handleContentClick = (index) => {
        setHighlightedContentIndex(index);
    };

    const contentItems = [
        { title: 'Service 1' },
        { title: 'Service 2' },
        { title: 'Service 3' },
        { title: 'Service 4' },
    ];



    return (
        <>
            <div className={styles.header}>
                <h1>First time in INDIA</h1>
                <h1>Get Your FIRST ALIGNER For Free</h1>
            </div>
        </>
    )
}

export default FirstAlignerFree