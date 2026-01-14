'use client';

import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import styles from './FlightList.module.css';
import FlightCard from './FlightCard';

const MOCK_FLIGHTS = [
    {
        id: 1,
        airline: 'Japan Airlines',
        aircraft: 'Boeing 787-9',
        logo: 'https://logo.clearbit.com/jal.co.jp',
        price: 1240,
        departureTime: '10:35',
        departureAirport: 'JFK',
        arrivalTime: '14:00',
        arrivalAirport: 'NRT',
        duration: '14h 25m',
        stops: 'Non-stop',
        co2: '-12%',
        isRecommended: true
    },
    {
        id: 2,
        airline: 'Emirates',
        aircraft: 'Airbus A380',
        logo: 'https://logo.clearbit.com/emirates.com',
        price: 985,
        departureTime: '18:20',
        departureAirport: 'JFK',
        arrivalTime: '23:00',
        arrivalAirport: 'HND',
        duration: '19h 40m',
        stops: '1 Stop (DXB)',
        co2: ''
    },
    {
        id: 3,
        airline: 'American Airlines',
        aircraft: 'Boeing 777-300ER',
        logo: 'https://logo.clearbit.com/aa.com',
        price: 1105,
        departureTime: '11:15',
        departureAirport: 'JFK',
        arrivalTime: '14:25',
        arrivalAirport: 'HND',
        duration: '16h 10m',
        stops: '1 Stop (LAX)',
        co2: ''
    },
    {
        id: 4,
        airline: 'ANA',
        aircraft: 'Boeing 787 Dreamliner',
        logo: 'https://logo.clearbit.com/ana.co.jp',
        price: 1350,
        departureTime: '09:00',
        departureAirport: 'JFK',
        arrivalTime: '12:00',
        arrivalAirport: 'NRT',
        duration: '14h 00m',
        stops: 'Non-stop',
        co2: ''
    }
];

export default function FlightList() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.titleArea}>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>Explore Flights</h1>
                    <span className={styles.resultsCount}>142 results found</span>
                </div>

                <div className={styles.filterRow}>
                    <button className={`${styles.filterBtn} ${styles.active}`}>
                        <SlidersHorizontal size={14} /> Filters
                    </button>
                    <button className={styles.filterBtn}>
                        Best Price <span style={{ color: '#10B981' }}>$845</span>
                    </button>
                    <button className={styles.filterBtn}>
                        Quickest <span style={{ color: '#64748B' }}>14h 20m</span>
                    </button>
                    <button className={styles.filterBtn}>
                        Stops <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            <div className={styles.flightGrid}>
                {MOCK_FLIGHTS.map(flight => (
                    <FlightCard key={flight.id} {...flight} />
                ))}
            </div>
        </aside>
    );
}
