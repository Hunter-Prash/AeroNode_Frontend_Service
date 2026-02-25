'use client';

import { Mail } from 'lucide-react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className="container">
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <Mail size={32} />
                    </div>

                    <h2 className={styles.title}>Don't Miss the Next Adventure</h2>
                    <p className={styles.subtitle}>Join 10,000+ travelers getting the best deals delivered to their inbox weekly.</p>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" className={styles.input} />
                        <button type="submit" className={styles.button}>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
