import styles from '@/styles/Home.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>“Entrust your smile to the professionals”</h1>
        <form>
          <div className={styles.number}>
            <div className={styles.code} htmlFor="">+ 91</div>
            <input  type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
          <input type='submit' className={styles.bookScan} value='Book Scan' />
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
