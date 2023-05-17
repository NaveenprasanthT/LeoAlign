import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/FAQ.module.css'
import Image from 'next/image'
import faqForm from '../../../public/assets/faqForm.png'
import Accordion from '../Accordion/Accordion';




const Faq = () => {
    const items = [
        { title: 'Item 1', content: 'Content for Item 1' },
        { title: 'Item 2', content: 'Content for Item 2' },
        { title: 'Item 3', content: 'Content for Item 3' },
    ];

    return (

        <div className={styles.FaqFormWrap} >
            <div className={styles.left}>
                <Image className={styles.leftImage} src={faqForm} alt='image' />
            </div>
            <div className={styles.right}>
                <div>
                    <Accordion items={items} />
                </div>
            </div>
        </div>
    )
}


export default Faq