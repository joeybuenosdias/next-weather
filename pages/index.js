/** components */
import Home from '../features/Home/Home';
import Layout from '../components/Layout/Layout';

export default function Index() {
    return (
        <Layout sectionName='home'>
            <Home />
        </Layout>
    )
}