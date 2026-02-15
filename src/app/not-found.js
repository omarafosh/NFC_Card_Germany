'use client';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-7xl font-black text-white/10">404</h1>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-zinc-400">
                        The requested resource could not be found on this server.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/dashboard"
                        className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-all inline-block"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

