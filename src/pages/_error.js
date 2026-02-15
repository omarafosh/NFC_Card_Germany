'use client';

import { useEffect } from 'react';

export default function Error({ statusCode }) {
    useEffect(() => {
        // Redirect to dashboard on error
        if (typeof window !== 'undefined') {
            window.location.href = '/dashboard';
        }
    }, []);

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
                <h1>{statusCode ? `Error ${statusCode}` : 'Error'}</h1>
                <p>Redirecting to dashboard...</p>
            </div>
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};
