import { useState } from 'react';

/** components */
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

/** styles */
import styles from './Layout.module.css';

export default function Layout({
    sectionName,
    children
}) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <section
            className={styles.section}
            id={sectionName}
        >
            <Navigation isNavOpen={isNavOpen} />
            <Header
                setIsNavOpen={setIsNavOpen}
            />
            <Content>
                {children}
            </Content>
            <Footer />
        </section>
    )
}