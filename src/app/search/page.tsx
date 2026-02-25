import SearchHeader from '@/components/SearchHeader';
import FlightList from '@/components/FlightList';
import MapSection from '@/components/MapSection';
import styles from '@/components/SearchResults.module.css';

export default function SearchPage() {
    return (
        <div className={styles.layoutContainer}>
            <SearchHeader />

            <main className={styles.mainContent}>
                <div className={styles.leftPanel}>
                    <FlightList />
                </div>

                <div className={styles.rightPanel}>
                    <MapSection />
                </div>
            </main>
        </div>
    );
}
