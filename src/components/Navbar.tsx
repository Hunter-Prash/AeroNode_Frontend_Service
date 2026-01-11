'use client';

import Link from 'next/link';
import { Plane } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.navLinks}>
            <Link href="#" className={styles.navLink}>Flights</Link>
            <Link href="#" className={styles.navLink}>Hotels</Link>
            <Link href="#" className={styles.navLink}>Car Rental</Link>
            <Link href="#" className={styles.navLink}>Deals</Link>
          </div>

          <div className={styles.authButtons}>
            <button className={styles.signInBtn} onClick={() => alert('Sign In clicked')}>Sign In</button>
            <button className={styles.joinBtn} onClick={() => alert('Join Club clicked')}>Join Club</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
