import Link from 'next/link';
import { FaBars, FaTimes, FaUser, FaMapMarkerAlt, FaQuestion, FaEnvelope, FaBook } from 'react-icons/fa';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <div>
                        <img src="/logo.png" alt="Logo" />
                    </div>
                </Link>
            </div>
            <div className={styles.menu}>
                <button className={styles.toggle} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <Link href="/about">
                            <div className={styles.navLink}>
                                <FaUser className={styles.navIcon} />
                                About Us
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/location">
                            <div className={styles.navLink}>
                                <FaMapMarkerAlt className={styles.navIcon} />
                                Location
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/faq">
                            <div className={styles.navLink}>
                                <FaQuestion className={styles.navIcon} />
                                FAQs
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            <div className={styles.navLink}>
                                <FaEnvelope className={styles.navIcon} />
                                Contact
                            </div>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <button className={styles.bookScan}>
                            <FaBook className={styles.bookScanIcon} />
                            Book Scan
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
