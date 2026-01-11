'use client';

import { Calendar } from 'lucide-react';
import styles from './DatePicker.module.css';

interface DatePickerProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    min?: string;
}

export default function DatePicker({ label, value, onChange, min }: DatePickerProps) {

    // Format the date for display (e.g., "15 Oct 2024")
    const formatDate = (dateString: string) => {
        if (!dateString) return 'Select Date';
        const date = new Date(dateString);
        // Adjust for timezone offset to prevent showing previous day due to UTC conversion
        // Actually, input type="date" value is YYYY-MM-DD. 
        // We can just parse it as local components.
        const [y, m, d] = dateString.split('-').map(Number);
        const localDate = new Date(y, m - 1, d);

        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(localDate);
    };

    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <div className={styles.valueRow}>
                <Calendar size={16} className="text-blue-400" style={{ color: '#60A5FA' }} />
                <span>{formatDate(value)}</span>
            </div>

            <input
                type="date"
                className={styles.dateInput}
                value={value}
                min={min}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
