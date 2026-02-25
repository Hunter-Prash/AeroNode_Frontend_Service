'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plane, User, Search, Briefcase } from 'lucide-react';
import styles from './SearchWidget.module.css';
import DatePicker from './DatePicker';
import CustomSelect from './CustomSelect';

export default function SearchWidget() {
    const [origin, setOrigin] = useState({ code: 'NYC', city: 'New York' });
    const [destination, setDestination] = useState({ code: 'TYO', city: 'Tokyo' });

    // State for operational components
    const [departureDate, setDepartureDate] = useState('2024-10-15');
    const [returnDate, setReturnDate] = useState('2024-10-22');
    const [passengers, setPassengers] = useState<string | number>(2);
    const [tripClass, setTripClass] = useState<string | number>('Business');

    const handleSwap = () => {
        const temp = origin;
        setOrigin(destination);
        setDestination(temp);
    };

    const router = useRouter();

    const handleSearch = () => {
        // In a real app, we would pass query params here
        router.push('/search');
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

                    <div className={`${styles.inputWrapper} ${styles.inputWrapperRight}`}>
                        <span className={styles.label}>To</span>
                        <input
                            className={`${styles.inputDisplay} ${styles.inputDisplayRight}`}
                            value={destination.city}
                            onChange={(e) => setDestination({ ...destination, city: e.target.value })}
                        />
                        <span className={styles.subLabel}>{destination.code}</span>
                    </div>
                </div>

                <button
                    className={styles.searchButton}
                    onClick={handleSearch}
                >
                    <Search size={24} />
                </button>
            </div>

            {/* Details Row */}
            <div className={styles.filtersRow}>

                <DatePicker
                    label="Departure"
                    value={departureDate}
                    onChange={setDepartureDate}
                />

                <DatePicker
                    label="Return"
                    value={returnDate}
                    onChange={setReturnDate}
                    min={departureDate}
                />

                <CustomSelect
                    label="Travelers"
                    icon={User}
                    value={passengers}
                    onChange={setPassengers}
                    options={[
                        { value: 1, label: '1 Adult' },
                        { value: 2, label: '2 Adults' },
                        { value: 3, label: '3 Adults' },
                        { value: 4, label: '4 Adults' },
                        { value: 5, label: '5 Adults' }
                    ]}
                />

                <CustomSelect
                    label="Class"
                    icon={Briefcase}
                    value={tripClass}
                    onChange={setTripClass}
                    iconColor="#0EA5E9"
                    options={[
                        { value: 'Economy', label: 'Economy' },
                        { value: 'Business', label: 'Business' },
                        { value: 'First', label: 'First Class' }
                    ]}
                />

            </div>
        </div>
    );
}
