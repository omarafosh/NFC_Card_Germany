'use client';
import { useEffect } from 'react';
import { RefreshCcw, AlertCircle } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('App Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-rose-500/10 border border-rose-500/20 rounded-3xl flex items-center justify-center">
                        <AlertCircle className="w-12 h-12 text-rose-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                        Something went wrong!
                    </h1>
                    <p className="text-zinc-400">
                        An unexpected error occurred. Our team has been notified.
                    </p>
                    {error?.message && (
                        <div className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-xs font-mono text-zinc-500 overflow-hidden text-ellipsis">
                            {error.message}
                        </div>
                    )}
                </div>

                <div className="pt-4 flex flex-col gap-3">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-bold transition hover:bg-zinc-200 active:scale-95 shadow-lg"
                    >
                        <RefreshCcw className="w-5 h-5" />
                        Try Again
                    </button>
                    <a
                        href="/dashboard"
                        className="text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                    >
                        Return to Dashboard
                    </a>
                </div>
            </div>
        </div>
    );
}
