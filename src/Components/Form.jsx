import React, { useState } from 'react'
import styles from '@/styles/BookNow.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import call from '../../public/assets/call.png'
import img from '../../public/assets/faqForm.png'
import { db } from '../../src/firebase'
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [msg, setMsg] = useState('')
    const [sending, setSending] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        //add data to collection
        const addData = async () => {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    name: name,
                    phoneNo: number,
                    email: email,
                    loc: location,
                    msg: msg,
                });
                alert("Data collected, we will get back to soon..!")
                setSending(false);
                setName('')
                setNumber('')
                setEmail('')
                setLocation('')
                setMsg('')

            } catch (e) {
            }
        }
        addData();
    }


    return (
        <form action="" className={styles.formSection} onSubmit={sending ? '' : handleSubmit} >
            <Image className={styles.logo} src={logo} alt='logo' id='bookNow' />
            <p className={styles.content}>Enhance your smile and confidence with state of art treatment protocols and world-class aligners. Give yourself the best gift possible….your smile….. get LEOALIGNED.</p>
            <div className={styles.formWrap}>
                <div className={styles.formSectionLeft}>
                    <Image className={styles.image} src={img} alt='formImages' />
                </div>
                <div className={styles.form}>
                    <div className={styles.formLeft}>
                        <label htmlFor="name">NAME</label>
                        <input required onChange={(e) => setName(e.target.value)} value={name} autoComplete='name' id='name' type="text" placeholder='Enter your name' />
                        <label htmlFor="email">EMAIL</label>
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='email' id='email' type="email" placeholder='Enter your Email ID' />
                    </div>
                    <div className={styles.formRight}>
                        <>
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <input required onChange={(e) => setNumber(e.target.value)} value={number} autoComplete='phone' id='phone' type="text" placeholder='Enter your Phone number' />
                        </>
                        <>
                            <label htmlFor="loc">LOCATION</label>
                            <input onChange={(e) => setLocation(e.target.value)} value={location} id='loc' type="text" placeholder='Enter your Location' />
                        </>
                    </div>
                    <div className={styles.formBottom}>
                        <label htmlFor="msg">WHAT ARE YOU LOOKING FOR?</label>
                        <input onChange={(e) => setMsg(e.target.value)} value={msg} autoComplete='message' id='msg' type="text" placeholder='ENter your messages...' />
                    </div>
                </div>
            </div>
            <div className={styles.submitSection}>
                <input type="submit" value={sending ? 'Sending' : 'Book scan'} />
                <a href='tel:+918951183999' className={styles.call}>
                    <Image height={40} src={call} alt='' />
                    <h3>8951183999</h3>
                </a>
            </div>
        </form>
    )
}

export default Form