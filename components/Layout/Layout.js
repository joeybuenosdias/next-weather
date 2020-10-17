/** components */
import Header from './Header/Header';
import Content from './Content/Content';

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
        </section>
    )
}