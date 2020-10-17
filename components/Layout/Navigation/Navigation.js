import LayoutContext from '../LayoutContext';

export default function Navigation() {
    return (
        <LayoutContext.Consumer>
            {({
                isNavOpen,
                setIsNavOpen,
            }) => {
                if (!isNavOpen) {
                    return null;
                }

                return (
                    <nav>
                        Navigation
                        <button onClick={() => setIsNavOpen(false)}>Close</button>
                    </nav>
                )
            }}
        </LayoutContext.Consumer>
    );
}