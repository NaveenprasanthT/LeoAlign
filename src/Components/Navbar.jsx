import Link from 'next/link';
import { FaBars, FaTimes, FaMapMarkerAlt, FaQuestion, FaEnvelope, FaBook, FaHeart } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn, CiCircleQuestion } from 'react-icons/ci'
import { useState } from 'react';
import logo from '../../public/assets/logo.png'
import map from '../../public/assets/map-pin.png'
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loc, setLoc] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link className={styles.link} href="/" offset={-80}>
                    <Image className={styles.logoImage} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className={styles.menu}>
                <button className={styles.toggle} onClick={toggleMenu}>
                    {isOpen ? <FaTimes style={{ fontSize: '30px' }} /> : <FaBars style={{ fontSize: '30px' }} />}
                </button>
                <ul className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <Link className={styles.link} onClick={() => {setLoc(false); setIsOpen(false)}} href="/#about">
                            <div className={styles.navLink}>
                                <BsPeople className={styles.navIcon} />
                                About Us
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <div className={styles.link} onClick={() => setLoc(!loc)} >
                            <div className={styles.navLink}>
                                <CiLocationOn className={styles.navIcon} />
                                Location
                            </div>
                            <div className={loc ? styles.active : styles.locationList}>
                                <div className={styles.list}>Karnataka</div>
                                <div className={styles.list}>Andhra Pradesh</div>
                                <div className={styles.list}>Telangana</div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.link} onClick={() => {setLoc(false); setIsOpen(false)}} href="/FAQ">
                            <div className={styles.navLink}>
                                <CiCircleQuestion className={styles.navIcon} />
                                FAQs
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.link} onClick={() => {setLoc(false); setIsOpen(false)}} href="tel:+918951183999">
                            <div className={styles.navLink}>
                                <IoCallOutline className={styles.navIcon} />
                                Contact
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.link} onClick={() => {setLoc(false); setIsOpen(false)}} href="/#bookNow">
                            <button className={styles.bookScan}>
                                Book Scan
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
