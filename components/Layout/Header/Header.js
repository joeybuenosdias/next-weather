export default function Header ({
    setIsNavOpen
}) {
    return (
        <header>
            <button onClick={() => setIsNavOpen(true)}>Menu</button>
        </header>
    )
}