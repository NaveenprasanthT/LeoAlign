import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/FAQ.module.css'
import Image from 'next/image'
import faqForm from '../../../public/assets/faqForm.png'
import Accordion from '../Accordion/Accordion';




const Faq = () => {
    const items = [
        { title: 'Who can provide dental aligner treatment ? ', content: 'Dental aligners should be provided only by a certified aligner trained Orthodontist doctor. At Leoalign the work flow of your aligners is in the hands of highly experienced orthodontists and u can directly revert back to your doctor directly for all the queries related' },
        { title: 'What s the right age for Aligner?', content: 'The ideal age for aligners varies, but they are typically suitable for teenagers and adults. Orthodontic evaluations around 12–14 years old help determine if aligners are needed, while younger children may benefit from early intervention orthodontics.' },
        { title: 'Does Aligner treatment change face features?', content: 'Aligner treatment primarily focuses on straightening teeth and correcting dental alignment. While it can enhance facial aesthetics indirectly by improving the smile, it does not directly alter or change the underlying facial features in a significant way.' },
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