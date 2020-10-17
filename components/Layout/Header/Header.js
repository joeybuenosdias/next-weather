import { useContext } from 'react';
import LayoutContext from '../LayoutContext';

export default function Header () {
    const context = useContext(LayoutContext);
    const { setIsNavOpen } = context;
    return (
        <header>
            <button onClick={() => setIsNavOpen(true)}>Menu</button>
        </header>
    )
}