import Link from 'next/link';

/** styles */
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Next.js Weather App</h1>
            <div className={styles.logo} />
            <Link href='/weather'>
                <button>See Weather</button>
            </Link>
        </div>
    )
}