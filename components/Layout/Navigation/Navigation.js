import { useContext } from 'react';

/** components */
import LayoutContext from '../LayoutContext';

/** styles */
import styles from './Navigation.module.css';

export default function Navigation() {
    const context = useContext(LayoutContext);
    const { setIsNavOpen, isNavOpen } = context;
    if (!isNavOpen) {
        return null;
    }

    return (
        <nav className={styles.nav}>
            Navigation
            <button onClick={() => setIsNavOpen(false)}>Close</button>
        </nav>
    )
}