"use client";

import { useCallback, useEffect, useState } from "react";
import { BookOpen, ExternalLink, GitFork, RefreshCw, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "ganeshk6";
const REPO_COUNT = 6;
const CACHE_MINUTES = 10;

type GHUser = {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
};

type GHRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    forks_count: number;
    pushed_at: string;
    fork: boolean;
    archived: boolean;
};

const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572a5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4f5d95",
    C: "#555555",
    "C++": "#f34b7d",
    Shell: "#89e051",
    Vue: "#41b883",
    Dart: "#00b4ab",
};

function timeAgo(date: string) {
    const s = (Date.now() - new Date(date).getTime()) / 1000;
    const units: [number, string][] = [
        [31536000, "y"],
        [2592000, "mo"],
        [604800, "w"],
        [86400, "d"],
        [3600, "h"],
        [60, "m"],
    ];
    for (const [sec, label] of units) {
        if (s >= sec) return `${Math.floor(s / sec)}${label === "mo" ? "mo" : label} ago`;
    }
    return "just now";
}

const btn =
    "inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10";

export default function GitHubActivity() {
    const [user, setUser] = useState<GHUser | null>(null);
    const [repos, setRepos] = useState<GHRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const load = useCallback(async (force = false) => {
        const key = `gh-${GITHUB_USERNAME}`;
        setError(false);

        if (!force) {
            try {
                const raw = localStorage.getItem(key);
                if (raw) {
                    const c = JSON.parse(raw);
                    if (Date.now() - c.t < CACHE_MINUTES * 60 * 1000) {
                        setUser(c.user);
                        setRepos(c.repos);
                        setLoading(false);
                        return;
                    }
                }
            } catch {}
        }

        setLoading(true);
        try {
            const [uRes, rRes] = await Promise.all([
                fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`),
            ]);
            if (!uRes.ok || !rRes.ok) throw new Error("GitHub API error");
            const u: GHUser = await uRes.json();
            const r: GHRepo[] = await rRes.json();
            // latest pushed pehle; sirf top 6
            const latest = r
                .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
                .slice(0, REPO_COUNT);
            setUser(u);
            setRepos(latest);
            try {
                localStorage.setItem(key, JSON.stringify({ t: Date.now(), user: u, repos: latest }));
            } catch {}
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return (
        <>
            <section id="github" className="mx-auto w-full max-w-7xl pt-27 px-4 px-4 md:px-6 xl:px-0">
                {/* Heading */}
                <div className="flex items-center gap-3 font-code text-xs">
                    <span className="text-cyan-400">07</span>
                    <span className="h-px w-8 bg-zinc-700" />
                    <span className="uppercase tracking-[0.3em] text-zinc-500">Open Source</span>
                </div>
                <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                        GitHub Activity
                    </h2>
                    <div className="flex gap-3">
                        <button onClick={() => load(true)} disabled={loading} className={`${btn} text-zinc-400 hover:text-white`}>
                            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
                            Refresh
                        </button>
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noreferrer"
                            className={`${btn} text-white`}
                        >
                            <SiGithub size={14} />
                            View Profile
                        </a>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-[280px_1fr]">
                    {/* Profile card */}
                    <Reveal direction="right" className="h-fit">
                        <aside className="group h-fit rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_16px_40px_-16px_rgba(59,130,246,0.4)]">
                            {loading && !user ? (
                                <div className="animate-pulse">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-full bg-white/[0.06]" />
                                        <div className="space-y-2">
                                            <div className="h-3 w-28 rounded bg-white/[0.06]" />
                                            <div className="h-3 w-20 rounded bg-white/[0.04]" />
                                        </div>
                                    </div>
                                    <div className="mt-6 h-12 rounded bg-white/[0.04]" />
                                </div>
                            ) : user ? (
                                <>
                                    <div className="flex items-center gap-4">
                                        <div className="relative shrink-0">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={user.avatar_url}
                                                alt={user.name ?? user.login}
                                                className="h-14 w-14 rounded-full border border-white/10 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#0d0d12] text-white">
                                                <SiGithub size={11} />
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="truncate text-sm font-semibold text-white">{user.name ?? user.login}</h3>
                                            <p className="truncate font-code text-xs text-zinc-500">@{user.login}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-5 text-center">
                                        {[
                                            { v: user.public_repos, l: "Repos", i: BookOpen },
                                            { v: user.followers, l: "Followers", i: Users },
                                            { v: user.following, l: "Following", i: Users },
                                        ].map(({ v, l, i: I }) => (
                                            <div key={l}>
                                                <div className="text-lg font-bold text-white">{v}</div>
                                                <div className="mt-0.5 flex items-center justify-center gap-1 font-code text-[10px] text-zinc-500">
                                                    <I size={10} />
                                                    {l}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p className="text-sm text-zinc-500">Failed to load profile.</p>
                            )}
                        </aside>
                    </Reveal>

                    {/* Repos */}
                    <div>
                        {error ? (
                            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-6 text-sm text-zinc-300">
                                Failed to fetch data from GitHub (the username may be incorrect or the API rate limit may have been reached).{" "}
                                <button onClick={() => load(true)} className="font-semibold text-cyan-400 hover:underline">
                                    Retry
                                </button>
                            </div>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2">
                                {loading && repos.length === 0
                                    ? Array.from({ length: REPO_COUNT }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-[130px] animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.03]"
                                        />
                                    ))
                                    : repos.map((r, i) => (
                                        <Reveal key={r.id} delay={(i % 2) * 120} className="h-full">
                                            <a
                                                href={r.html_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group relative flex min-h-[130px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_16px_40px_-16px_rgba(59,130,246,0.45)]"
                                            >
                                                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                                <div className="relative flex items-center justify-between gap-3">
                                                    <div className="flex min-w-0 items-center gap-2.5">
                                                        <BookOpen size={15} className="shrink-0 text-blue-400" />
                                                        <h4 className="truncate text-sm font-semibold text-blue-400 transition-colors group-hover:text-cyan-300 group-hover:underline">
                                                            {r.name}
                                                        </h4>
                                                    </div>
                                                    <span className="shrink-0 rounded-full border border-white/[0.1] px-2.5 py-0.5 font-code text-[10px] text-zinc-400">
                                                        {r.archived ? "Archived" : "Public"}
                                                    </span>
                                                </div>

                                                <p className="relative mt-3 line-clamp-2 text-xs text-zinc-400">
                                                    {r.description ?? "No description provided."}
                                                </p>

                                                <div className="relative mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-zinc-500">
                                                    <div className="flex items-center gap-4">
                                                        {r.language && (
                                                            <span className="flex items-center gap-1.5">
                                                                <span
                                                                    className="h-2.5 w-2.5 rounded-full"
                                                                    style={{ background: langColors[r.language] ?? "#8b949e" }}
                                                                />
                                                                {r.language}
                                                            </span>
                                                        )}
                                                        {r.forks_count > 0 && (
                                                            <span className="flex items-center gap-1">
                                                                <GitFork size={12} />
                                                                {r.forks_count}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="shrink-0">Updated {timeAgo(r.pushed_at)}</span>
                                                </div>
                                            </a>
                                        </Reveal>
                                    ))}
                            </div>
                        )}

                        {user && !error && (
                            <a
                                href={`https://github.com/${user.login}?tab=repositories`}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 flex items-center justify-center gap-2 font-code text-xs text-zinc-500 transition-colors hover:text-cyan-300"
                            >
                                <ExternalLink size={12} />
                                View all {user.public_repos} repositories
                            </a>
                        )}
                    </div>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}