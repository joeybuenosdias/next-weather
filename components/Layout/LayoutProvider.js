import { useState } from 'react';

/** components */
import LayoutContext from './LayoutContext';

export default function LayoutProvider({ children }) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <LayoutContext.Provider
            value={{
                isNavOpen,
                setIsNavOpen,
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}