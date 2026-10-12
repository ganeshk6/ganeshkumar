import { useEffect, useState } from "react";

const INITIALS = "GK";
const DURATION = 2000;

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);
    const [hiding, setHiding] = useState(false);

    // loading ke dauran scroll band
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    // 0 -> 100 counter
    useEffect(() => {
        let raf = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const t = Math.min((now - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setProgress(Math.round(eased * 100));
            if (t < 1) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => setHiding(true), 150);
                setTimeout(onFinish, 750);
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-all duration-500 ${
                hiding ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
            }`}
            role="status"
            aria-label="Loading"
        >
            <style>{`
                @keyframes loaderRing {
                    0%   { transform: scale(0.6); opacity: 0.9; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
            `}</style>

            {/* background glow */}
            <span className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_65%)]" />

            {/* Rings + initials */}
            <div className="relative flex h-24 w-24 items-center justify-center">
                {[0, 0.5, 1].map((delay) => (
                    <span
                        key={delay}
                        className="absolute inset-0 rounded-full border border-blue-500/40"
                        style={{ animation: `loaderRing 2s ease-out ${delay}s infinite` }}
                    />
                ))}
                <span className="absolute inset-3 rounded-full border border-blue-400/30" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-extrabold tracking-tight text-white shadow-[0_0_30px_-4px_rgba(59,130,246,0.7)]">
                    {INITIALS}
                </span>
            </div>

            {/* Progress bar */}
            <div className="mt-12 h-[2px] w-44 overflow-hidden rounded-full bg-white/[0.08] sm:w-56">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="mt-4 font-code text-xs tracking-[0.2em] text-zinc-500">{progress}%</p>
        </div>
    );
}