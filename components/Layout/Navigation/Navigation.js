import { useContext } from 'react';

/** components */
import Link from 'next/link';
import LayoutContext from '../LayoutContext';

/** styles */
import styles from './Navigation.module.css';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Weather', path: '/weather' },
]

export default function Navigation() {
    const context = useContext(LayoutContext);
    const { setIsNavOpen, isNavOpen } = context;

    if (!isNavOpen) {
        return null;
    }

    return (
        <nav className={styles.nav}>
            <div className={styles['nav-header']}>
                <button onClick={() => setIsNavOpen(false)}>Close</button>
            </div>
            <div className={styles['nav-content']}>
                {links.map((link, index) => {
                    return (
                        <Link key={index} href={link.path}>
                            <div className={styles.link}>{link.name}</div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}