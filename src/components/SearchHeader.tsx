'use client';

import { Search, Calendar, Users, Bell, ArrowRight } from 'lucide-react';
import styles from './SearchHeader.module.css';
import Link from 'next/link';

export default function SearchHeader() {
  return (
    <header className={styles.header}>
      {/* Invisible spacer to center the middle element */}
      <div style={{ width: 40 }}>
         {/* Could put a small logo here if needed */}
         <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700 }}>AeroNode</Link>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchItem}>
          <span>NYC</span>
          <ArrowRight size={14} className="text-gray-400" />
          <span>TYO</span>
        </div>
        
        <div className={styles.separator}>|</div>
        
        <div className={styles.searchItem}>
          <Calendar size={16} className="text-gray-400" />
          <span>Oct 15 - Oct 22</span>
        </div>

        <div className={styles.separator}>|</div>

        <div className={styles.searchItem}>
          <Users size={16} className="text-gray-400" />
          <span>2 Adults</span>
        </div>

        <button className={styles.searchIconBtn}>
          <Search size={16} />
        </button>
      </div>

      <button className={styles.notificationBtn}>
        <Bell size={20} />
        <span className={styles.badge}></span>
      </button>
    </header>
  );
}
