'use client';

import { Layers, Plus, Minus, Sun } from 'lucide-react';
import styles from './MapSection.module.css';

export default function MapSection() {
    return (
        <section className={styles.section}>
            {/* Background Map Image - using a generic world map or abstract texture */}
            <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                alt="World Map"
                className={styles.mapImage}
            />
            <div className={styles.overlay}></div>

            {/* SVG Path Overlay */}
            <svg className={styles.flightPathSvg}>
                {/* A simple quadratic bezier curve from left (NYC) to right (TYO) */}
                <path d="M -100 500 Q 400 100 1200 400" className={styles.pathLine} />
                {/* Plane icon on path */}
                <g transform="translate(800, 260) rotate(15)">
                    <path fill="white" d="M2 12h2c0-2 2-3 4-3 3 0 5 3 6 5 2 0 6-2 8 0 1 1 1 3 0 4h-2c-2 3-5 3-5 3h-2c-3 0-5-2-5-4 0-1 0-2 0-2l-6-3z" />
                </g>
            </svg>

            {/* Controls */}
            <div className={styles.controls}>
                <button className={styles.controlBtn}><Layers size={20} /></button>
                <button className={styles.controlBtn}><Plus size={20} /></button>
                <button className={styles.controlBtn}><Minus size={20} /></button>
            </div>

            {/* Weather Widget */}
            <div className={styles.weatherWidget}>
                <div className={styles.weatherHeader}>Destination Weather</div>
                <div className={styles.tempRow}>
                    <div>
                        <div className={styles.temp}>18°C</div>
                        <div className={styles.location}>Tokyo, Japan</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Sun size={32} className={styles.weatherIcon} />
                        <div className={styles.conditionText}>Partly Cloudy</div>
                    </div>
                </div>

                <div className={styles.detailsRow}>
                    <span>Wind: 12km/h</span>
                    <span>H: 65%</span>
                </div>
            </div>
        </section>
    );
}
