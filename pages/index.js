import Link from 'next/link';

export default function Home() {
    return (
        <section>
            <h1>Next.js Weather App</h1>
            <div>Sun</div>
            <Link href='/weather'>
                <button>See Weather</button>
            </Link>
        </section>
    )
}