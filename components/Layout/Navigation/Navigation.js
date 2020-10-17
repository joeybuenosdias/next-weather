export default function Navigation({
    isNavOpen,
}) {
    if(!isNavOpen) {
        return null;
    }

    return (
        <nav>
            Navigation
        </nav>
    );
}