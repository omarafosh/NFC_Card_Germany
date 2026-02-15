'use client';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl flex items-center justify-center">
                        <AlertTriangle className="w-12 h-12 text-indigo-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-zinc-400">
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-bold transition hover:bg-zinc-200 active:scale-95 shadow-lg shadow-indigo-500/10"
                    >
                        <Home className="w-5 h-5" />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
