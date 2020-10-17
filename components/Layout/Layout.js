import { useState } from 'react';

/** components */
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import LayoutProvider from './LayoutProvider';

/** styles */
import styles from './Layout.module.css';

export default function Layout({
    sectionName,
    children
}) {
    return (
        <LayoutProvider>
            <section
                className={styles.section}
                id={sectionName}
            >
                <Navigation />
                <Header />
                <Content>
                    {children}
                </Content>
                <Footer />
            </section>
        </LayoutProvider>
    )
}