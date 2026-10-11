import { ArrowUpRight, Award, Code2, ExternalLink, Target, Trophy } from "lucide-react";

const profiles = [
    {
        name: "LeetCode",
        username: "@ganesh62", // <- apna username daalo
        url: "https://leetcode.com/u/ganesh62",
        desc: "Mastering Data Structures & Algorithms.",
        stats: [
            { icon: Target, value: "100+", label: "Solved" },
            { icon: Trophy, value: "Top 10%", label: "Rank" },
            { icon: Award, value: "1600+", label: "Rating" },
        ],
    },
];

export default function CodingProfiles() {
    return (
        <>
            <section id="profiles" className="mx-auto w-full max-w-7xl pt-27 px-4 md:px-6 xl:px-0">
                {/* Heading */}
                <div className="flex items-center gap-3 font-code text-xs">
                    <span className="text-cyan-400">06</span>
                    <span className="h-px w-8 bg-zinc-700" />
                    <span className="uppercase tracking-[0.3em] text-zinc-500">Coding Profiles</span>
                </div>
                <h2 className="mt-3 bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                    Competitive Programming
                </h2>
                <p className="mt-4 max-w-xl text-[15px] text-zinc-400">
                    Where I sharpen algorithms and data structures — one problem at a time.
                </p>

                {/* Cards */}
                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {profiles.map((p) => (
                        <article
                            key={p.name}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_16px_40px_-16px_rgba(59,130,246,0.45)] sm:p-6"
                        >
                            {/* top gradient line */}
                            <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transition-opacity duration-300 group-hover:via-cyan-300" />

                            {/* left border: top → bottom on hover */}
                            {/* <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-y-100" /> */}

                            {/* hover glow */}
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.14),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Header */}
                            <div className="relative flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-400/50 group-hover:bg-blue-500/20">
                                        <Code2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                                        <p className="font-code text-xs text-zinc-500">{p.username}</p>
                                    </div>
                                </div>

                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Open ${p.name} profile`}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white group-hover:text-white"
                                >
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </div>

                            <p className="relative mt-6 text-sm text-zinc-400">{p.desc}</p>

                            {/* Stats */}
                            <div className="relative mt-6 grid grid-cols-3 gap-3">
                                {p.stats.map(({ icon: Icon, value, label }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.03] px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 sm:py-5"
                                    >
                                        <Icon size={16} className="text-blue-400" />
                                        <div className="mt-2 text-base font-bold text-white sm:text-lg">{value}</div>
                                        <div className="mt-0.5 font-code text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className="relative mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:shadow-[0_0_24px_-6px_rgba(99,102,241,0.8)]"
                            >
                                View Profile
                                <ExternalLink size={14} />
                            </a>
                        </article>
                    ))}
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}