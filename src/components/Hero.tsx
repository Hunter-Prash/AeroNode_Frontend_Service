import styles from './Hero.module.css';
import SearchWidget from './SearchWidget';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
          
            <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Travel Warning"
                className={styles.bgImage}
            />

            <div className={styles.content}>
                <span className={styles.badge}>Live Flight Updates</span>
                <h1 className={styles.title}>The World is<br />Waiting for You.</h1>
                <p className={styles.subtitle}>
                    Explore premium destinations at prices that keep you grounded. Experience the art of modern travel.
                </p>

                <SearchWidget />
            </div>
        </section>
    );
}
