import Link from 'next/link';

export default function Custom404() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#09090b',
            color: '#fff',
            fontFamily: 'system-ui, sans-serif'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
                <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>Page not found</p>
                <Link href="/" style={{
                    padding: '0.75rem 1.5rem',
                    background: '#fff',
                    color: '#000',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}>
                    Go Home
                </Link>
            </div>
        </div>
    );
}
