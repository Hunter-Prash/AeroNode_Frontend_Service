'use client';

import { Star, ArrowRight } from 'lucide-react';
import styles from './Trending.module.css';

const destinations = [
    {
        id: 1,
        name: "Kyoto, Japan",
        rating: 4.9,
        reviews: 3.1, // k
        price: 845,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Santorini, Gr.",
        rating: 4.8,
        reviews: 1.2,
        price: 620,
        image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?q=80&w=1000&auto=format&fit=crop" // Santorini
    },
    {
        id: 3,
        name: "Banff, Canada",
        rating: 5.0,
        reviews: 980, // count
        price: 450,
        image: "https://images.unsplash.com/photo-1533054359487-21c60f7e4123?q=80&w=1000&auto=format&fit=crop" // Rocky Mountains
    },
    {
        id: 4,
        name: "Cinque Terre",
        rating: 4.7,
        reviews: 2.1,
        price: 910,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Trending() {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Trending This Season</h2>
                        <p className={styles.subtitle}>Curated getaways popular with travelers like you.</p>
                    </div>
                    <a href="#" className={styles.viewAll}>
                        View all destinations <ArrowRight size={16} />
                    </a>
                </div>

                <div className={styles.grid}>
                    {destinations.map(dest => (
                        <div key={dest.id} className={styles.card} onClick={() => alert(`View details for ${dest.name}`)}>
                            <div className={styles.imageOverlay}>
                                <img src={dest.image} alt={dest.name} className={styles.cardImage} />
                                <div className={styles.cardInfo}>
                                    <h3 className={styles.destinationName}>{dest.name}</h3>
                                    <div className={styles.rating}>
                                        <Star size={12} fill="#FCD34D" color="#FCD34D" />
                                        <span>{dest.rating} ({dest.reviews > 10 ? `${dest.reviews}k` : dest.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>
                                    <div className={styles.priceLabel}>Roundtrip</div>
                                    <div className={styles.priceValue}>${dest.price}</div>
                                </div>
                                <div className={styles.tripArrow}>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
