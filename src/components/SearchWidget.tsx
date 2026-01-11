'use client';

import { useState } from 'react';
import { Plane, Calendar, User, ChevronDown, Repeat, Search, MapPin } from 'lucide-react';
import styles from './SearchWidget.module.css';

export default function SearchWidget() {
    const [origin, setOrigin] = useState({ code: 'NYC', city: 'New York' });
    const [destination, setDestination] = useState({ code: 'TYO', city: 'Tokyo' });
    const [passengers, setPassengers] = useState(2);
    const [tripClass, setTripClass] = useState('Business');

    const handleSwap = () => {
        const temp = origin;
        setOrigin(destination);
        setDestination(temp);
    };

    return (
        <div className={styles.widgetContainer}>

            {/* Route Info / Inputs */}
            <div className={styles.inputsRow}>
                <div className={styles.locationGroup}>
                    <div className={styles.inputWrapper}>
                        <span className={styles.label}>From</span>
                        <input
                            className={styles.inputDisplay}
                            value={origin.city}
                            onChange={(e) => setOrigin({ ...origin, city: e.target.value })}
                        />
                        <span className={styles.subLabel}>{origin.code}</span>
                    </div>

                    <button className={styles.swapButton} onClick={handleSwap}>
                        <Plane size={16} className="rotate-90" />
                    </button>

                    <div className={styles.inputWrapper} style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                        <span className={styles.label}>To</span>
                        <input
                            className={styles.inputDisplay}
                            value={destination.city}
                            onChange={(e) => setDestination({ ...destination, city: e.target.value })}
                            style={{ textAlign: 'right' }}
                        />
                        <span className={styles.subLabel}>{destination.code}</span>
                    </div>
                </div>

                <button
                    className={styles.searchButton}
                    onClick={() => alert(`Searching flights from ${origin.city} to ${destination.city}`)}
                >
                    <Search size={24} />
                </button>
            </div>

            {/* Details Row */}
            <div className={styles.filtersRow}>

                <div className={styles.filterItem}>
                    <span className={styles.label}>Departure</span>
                    <div className={styles.filterValue}>
                        <Calendar size={16} className="text-blue-400" />
                        <span>2024-10-15</span>
                    </div>
                </div>

                <div className={styles.filterItem}>
                    <span className={styles.label}>Return</span>
                    <div className={styles.filterValue}>
                        <Calendar size={16} className="text-blue-400" />
                        <span>2024-10-22</span>
                    </div>
                </div>

                <div className={styles.filterItem}>
                    <span className={styles.label}>Travelers</span>
                    <div className={styles.filterValue}>
                        <User size={16} className="text-blue-400" />
                        <span>{passengers} Adults</span>
                        <ChevronDown size={14} style={{ opacity: 0.5 }} />
                    </div>
                </div>

                <div className={styles.filterItem}>
                    <span className={styles.label}>Class</span>
                    <div className={styles.filterValue}>
                        <div style={{ width: 16, height: 16, background: '#0EA5E9', borderRadius: 4 }}></div>
                        <span>{tripClass}</span>
                        <ChevronDown size={14} style={{ opacity: 0.5 }} />
                    </div>
                </div>

            </div>
        </div>
    );
}
