'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Application Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Unexpected Error
                    </h1>
                    <p className="text-zinc-400">
                        The application encountered an internal error.
                    </p>
                    {error?.message && (
                        <div className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-500">
                            {error.message}
                        </div>
                    )}
                </div>

                <div className="pt-4 flex flex-col gap-3">
                    <button
                        onClick={() => reset()}
                        className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-all"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = '/dashboard'}
                        className="text-sm text-zinc-500 hover:text-white"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

