import styles from '@/styles/Home.module.css';
import { db } from '../../src/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import emailjs from 'emailjs-com'

function HeroSection() {
  const [number, setNumber] = useState('')
  const [sending, setSending] = useState(false)

  const handleNoSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: 'Only Phone Number',
      number: number
    }
    emailjs.send('service_s1cxqme', 'template_r70646i', formData, 'eqE16NGcWEsR7KlX7')
            .then(() => {
                console.log('Email sent successfully!');
                setSending(false);
                setNumber('')
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            })
  }

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>“Entrust your smile to the professionals”</h1>
        <form onSubmit={sending ? '' : handleNoSubmit} >
          <div className={styles.number}>
            <div className={styles.code} htmlFor="">+ 91</div>
            <input onChange={(e) => setNumber(e.target.value)} value={number} type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
          <input type='submit' className={styles.bookScan} value={sending ? 'sending' : 'Book Scan'} />
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
