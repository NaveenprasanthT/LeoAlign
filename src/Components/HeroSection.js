import styles from '@/styles/Home.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Entrust your smile to the professionals</h1>
        <form>
          
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <button className={styles.bookScan}>Book Scan</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
