import { useContext } from 'react';

/** components */
import LayoutContext from '../LayoutContext';

/** styles */
import styles from './Header.module.css';

export default function Header () {
    const context = useContext(LayoutContext);
    const { setIsNavOpen } = context;
    return (
        <header className={styles.header}>
            <button onClick={() => setIsNavOpen(true)}>Menu</button>
        </header>
    )
}