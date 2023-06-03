import styles from '@/styles/Home.module.css';
import { db } from '../../src/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

function HeroSection() {
  const [number, setNumber] = useState('')
  const [sending, setSending] = useState(false)

  const handleNoSubmit = (e) => {
    e.preventDefault();
    //add data to collection
    const addData = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: '',
          phoneNo: number,
          email: '',
          loc: '',
          msg: '',
        });
        alert("Data collected, we will get back to you soon..!")
        setSending(false);
        setNumber('')
      } catch (e) {
      }
    }
    addData();
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
