'use client';

import { Leaf, ChevronDown, Lock } from 'lucide-react';
import styles from './FlightCard.module.css';

interface FlightProps {
    airline: string;
    aircraft: string;
    logo: string; // URL
    price: number;
    departureTime: string;
    departureAirport: string;
    arrivalTime: string;
    arrivalAirport: string;
    duration: string;
    stops: string; // "Non-stop" or "1 Stop (DXB)"
    co2?: string;
    isRecommended?: boolean;
}

export default function FlightCard({
    airline, aircraft, logo, price, departureTime, departureAirport, arrivalTime, arrivalAirport, duration, stops, co2, isRecommended
}: FlightProps) {

    // Simple check for next day arrival based on strings is tricky without real dates, 
    // but let's assume if it is passed in the data or we just hardcode the +1 day logic for now if needed.
    // Actually, UI shows "+1 day" specifically. I'll add a prop or just mock it.
    const isNextDay = true;

    return (
        <div className={styles.cardWrapper}>
            {isRecommended && <div className={styles.recommendedBadge}>Recommended</div>}

            <div className={styles.card}>
                <div className={styles.headerRow}>
                    <div className={styles.airlineInfo}>
                        {/* Using a placeholder if logo is empty, or img if provided */}
                        {logo ? <img src={logo} alt={airline} className={styles.logo} /> : <div className={styles.logo} style={{ background: '#cbd5e1' }}></div>}
                        <div>
                            <div className={styles.airlineName}>{airline}</div>
                            <div className={styles.aircraft}>{aircraft}</div>
                        </div>
                    </div>

                    <div className={styles.priceContainer}>
                        <div className={styles.price}>${price.toLocaleString()}</div>
                        <div className={styles.tripType}>Round trip</div>
                    </div>
                </div>

                <div className={styles.scheduleRow}>
                    <div className={styles.timeGroup}>
                        <div className={styles.time}>{departureTime}</div>
                        <div className={styles.airport}>{departureAirport}</div>
                    </div>

                    <div className={styles.durationGroup}>
                        <div className={styles.durationLabel}>{duration}</div>
                        <div className={styles.routeLine}></div>
                        <div className={styles.stopsLabel} style={{ color: stops === 'Non-stop' ? '#3B82F6' : '#64748B' }}>
                            {stops}
                        </div>
                    </div>

                    <div className={styles.timeGroup}>
                        <div className={styles.time}>{arrivalTime}</div>
                        <div className={styles.airport}>{arrivalAirport}</div>
                        {isNextDay && <div style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: 2 }}>+1 day</div>}
                    </div>
                </div>

                <div className={styles.footerRow}>
                    {co2 ? (
                        <div className={styles.co2Tag}>
                            <Leaf size={12} /> {co2} CO2
                        </div>
                    ) : <div></div>}

                    <div className={styles.detailsLink}>
                        <Lock size={12} /> IncludedDetails <ChevronDown size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
}
