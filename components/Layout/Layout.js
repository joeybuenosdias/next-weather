/** components */
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

/** styles */
import styles from './Layout.module.css';

export default function Layout({
    sectionName,
    children
}) {
    return (
        <section
            className={styles.section}
            id={sectionName}
        >
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </section>
    )
}