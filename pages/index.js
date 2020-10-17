/** components */
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

export default function Home() {
    return (
        <Layout sectionName='home'>
            <h1>Next.js Weather App</h1>
            <div>Sun</div>
            <Link href='/weather'>
                <button>See Weather</button>
            </Link>
        </Layout>
    )
}