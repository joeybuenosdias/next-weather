import LayoutContext from '../LayoutContext';

export default function Header () {
    return (
        <LayoutContext.Consumer>
            {({ setIsNavOpen }) => {
                return (
                    <header>
                        <button onClick={() => setIsNavOpen(true)}>Menu</button>
                    </header>
                )
            }}
        </LayoutContext.Consumer>
    )
}