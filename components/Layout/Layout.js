/** components */
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

export default function Layout({
    sectionName,
    children
}) {
    return (
        <section id={sectionName}>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </section>
    )
}