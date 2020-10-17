import { useContext } from 'react';
import LayoutContext from '../LayoutContext';

export default function Navigation() {
    const context = useContext(LayoutContext);
    const { setIsNavOpen, isNavOpen } = context;
    if (!isNavOpen) {
        return null;
    }

    return (
        <nav>
            Navigation
            <button onClick={() => setIsNavOpen(false)}>Close</button>
        </nav>
    )
}