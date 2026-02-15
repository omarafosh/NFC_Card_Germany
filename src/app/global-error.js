'use client';

export const dynamic = 'force-dynamic';

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#09090b',
                color: '#ffffff',
                fontFamily: 'system-ui, sans-serif'
            }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
                        Critical System Error
                    </h2>
                    <p style={{ color: '#a1a1aa', marginBottom: '24px' }}>
                        {error?.message || 'A catastrophic error occurred.'}
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Recover System
                    </button>
                </div>
            </body>
        </html>
    );
}
