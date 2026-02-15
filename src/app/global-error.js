'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error('Global Error:', error);
    }, [error]);

    return (
        <html>
            <body style={{
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#09090b',
                color: '#fff',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Something went wrong!
                    </h1>
                    <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>
                        An unexpected error occurred. Please try again.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '9999px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}
