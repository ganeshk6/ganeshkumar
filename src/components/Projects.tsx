"use client";

import { useState } from "react";
import { ArrowUpRight, BarChart3, MapPinned, ShoppingCart, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ExpenceTracker from "../assets/expence-tracker.png";
import AdminDashboard from "../assets/admin-dashboard.png";
import hiddenscotland from "../assets/hiddenscotland.png";
import Reveal from "./Reveal";

type Project = {
    title: string;
    category: "Full Stack" | "Frontend";
    label: string;
    icon: LucideIcon;
    gradient: string;
    image?: string; // screenshot ka path (e.g. "/projects/expense.png"), optional
    summary: string;
    points: string[];
    tags: string[];
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        title: "Hidden Scotland",
        category: "Full Stack",
        label: "Travel / Web Application",
        icon: MapPinned,
        image:hiddenscotland,
        gradient: "from-emerald-500/25 via-teal-600/20 to-blue-600/30",
        summary:
            "A single-page application built with React.js and Inertia.js, integrated seamlessly with a Laravel backend, with maps, routes and live weather.",
        points: [
            "Implemented multiple role-based logins (admin, editor, user) with secure authentication and authorization layers.",
            "Integrated Google Maps, Places and Directions APIs for location search, geocoding and route navigation.",
            "Integrated Google Weather API to display real-time weather updates for selected locations.",
            "Designed responsive, mobile-first UI components with cross-device compatibility.",
            "Worked with MySQL for relational data, optimized queries and efficient API responses.",
            "Configured and deployed the app on an Ubuntu-based server for stable production releases.",
            "Collaborated with international stakeholders following Agile methodologies.",
        ],
        tags: ["React.js", "Inertia.js", "Node.js", "Laravel", "MySQL", "Google Maps APIs", "OpenAI", "Payment Gateway"],
        github: "",
        live: "https://hiddenscotland.com/stay",
    },
    {
        title: "Expense Tracker App",
        category: "Full Stack",
        label: "Full Stack / Web Application",
        icon: Wallet,
        image: ExpenceTracker,
        gradient: "from-cyan-500/30 via-blue-600/20 to-violet-600/30",
        summary:
            "A full-stack expense tracker built with React.js, Node.js, Express.js and MySQL, using Sequelize ORM for database management, with AI-powered category suggestions and premium subscriptions.",
        points: [
            "Integrated Google Gemini AI API to suggest expense categories while adding expenses, improving automation and user experience.",
            "Implemented Cashfree Payment Gateway with a premium subscription system for secure purchases and premium feature access.",
            "Developed an interactive leaderboard ranking users by their expense tracking activity and engagement.",
            "Added expense export and download functionality so users can manage their expense records.",
            "Designed RESTful APIs for authentication, expense management, subscriptions, payments and leaderboard.",
            "Implemented role-based access control, subscription-based feature management and secure API authentication.",
        ],
        tags: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize", "Gemini AI", "Cashfree"],
        github: "https://github.com/ganeshk6/expence-tracker-app",
        live: "http://15.252.146.151/",
    },
    {
        title: "Admin Dashboard",
        category: "Frontend",
        label: "Frontend / Dashboard",
        icon: BarChart3,
        image:AdminDashboard,
        gradient: "from-violet-500/30 via-fuchsia-600/20 to-blue-600/25",
        summary:
            "An interactive admin dashboard with dynamic, responsive components and rich data visualizations for analytics and reporting.",
        points: [
            "Built dynamic and responsive React.js components for seamless user interaction.",
            "Integrated Chart.js and D3.js to visualize complex datasets and enhance analytical and reporting capabilities.",
        ],
        tags: ["React.js", "Chart.js", "D3.js"],
        github: "",
        live: "https://react-admin-ganesh.netlify.app/",
    },
    {
        title: "E-commerce",
        category: "Frontend",
        label: "Frontend / E-commerce",
        icon: ShoppingCart,
        gradient: "from-orange-500/25 via-pink-600/20 to-violet-600/30",
        summary:
            "A responsive, user-friendly Next.js e-commerce application with optimized routing, performance and centralized state management.",
        points: [
            "Implemented Fetch API for efficient data fetching between client-side and server-side components.",
            "Utilized Redux for centralized state management, ensuring predictable state transitions and better scalability.",
            "Built a responsive Next.js storefront with optimized routing and performance.",
        ],
        tags: ["Next.js", "Fetch API", "Redux"],
        github: "https://github.com/ganeshk6/nwg-ecommerce",
        live: "https://nwg-ecommerce.vercel.app/",
    },
];

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// Desktop (lg) grid 6 columns: pehla card bada, baaki balanced
function spanClass(i: number, n: number) {
    if (n <= 2) return "lg:col-span-3";
    if (n === 3) return "lg:col-span-2";
    return ["lg:col-span-4", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"][i % 4];
}

const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white";

export default function Projects() {
    const [active, setActive] = useState("All");
    const [open, setOpen] = useState<string | null>(null);

    const list = active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <>
            <section id="work" className="mx-auto w-full max-w-7xl pt-27 px-4 md:px-6 xl:px-0">
                <style>{`@keyframes projectIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`}</style>

                {/* Heading */}
                <Reveal>
                    <div className="flex items-center gap-3 font-code text-xs">
                        <span className="text-cyan-400">04</span>
                        <span className="h-px w-8 bg-zinc-700" />
                        <span className="uppercase tracking-[0.3em] text-zinc-500">Featured Work</span>
                    </div>
                    <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h2 className="bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                                Featured Work
                            </h2>
                            <p className="mt-4 text-[15px] text-zinc-400">
                                A selection of things I&apos;ve designed, built, and shipped.
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActive(f)}
                                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                                        active === f
                                            ? "border-transparent bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_0_20px_-4px_rgba(99,102,241,0.7)]"
                                            : "border-white/[0.1] bg-white/[0.03] text-zinc-400 hover:border-blue-400/40 hover:text-white"
                                    }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Grid */}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                    {list.map((p, i) => {
                        const Icon = p.icon;
                        const expanded = open === p.title;
                        const featured = i === 0 && list.length >= 4;
                        return (
                            <Reveal
                                key={p.title + active}
                                delay={(i % 2) * 120}
                                className={`h-full ${spanClass(i, list.length)}`}
                            >

                                <article
                                    style={{ animation: `projectIn .5s ease-out ${i * 80}ms both` }}
                                    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_16px_40px_-16px_rgba(59,130,246,0.45)] ${spanClass(
                                        i,
                                        list.length
                                    )} ${list.length === 3 || list.length === 4 ? "" : ""}`}
                                >
                                    {/* left hover border (top → bottom) */}
                                    <span className="absolute left-0 top-0 z-20 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-y-100" />

                                    {/* Preview */}
                                    <div
                                        className={`relative h-44 overflow-hidden bg-gradient-to-br sm:h-52 ${p.gradient} ${
                                            featured ? "lg:h-64" : ""
                                        }`}
                                    >
                                        {p.image ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <>
                                                <span className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                                        <Icon size={28} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <span className="absolute left-3 top-3 rounded-md border border-cyan-400/30 bg-black/50 px-2.5 py-1 font-code text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur">
                                            {p.label}
                                        </span>
                                        {i === 0 && (
                                            <span className="absolute right-3 top-3 rounded-md bg-cyan-400 px-2.5 py-1 font-code text-[10px] font-bold uppercase tracking-wider text-black">
                                                Featured
                                            </span>
                                        )}
                                        <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d12] to-transparent" />
                                    </div>

                                    {/* Body */}
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <h3
                                            className={`font-semibold transition-colors duration-300 group-hover:text-cyan-300 ${
                                                featured ? "text-xl text-cyan-300" : "text-base text-white"
                                            }`}
                                        >
                                            {p.title}
                                        </h3>

                                        <p
                                            className={`mt-3 text-sm leading-relaxed text-zinc-400 ${
                                                expanded ? "" : "line-clamp-3"
                                            }`}
                                        >
                                            {p.summary}
                                        </p>

                                        {expanded && (
                                            <ul className="mt-4 space-y-2.5">
                                                {p.points.map((pt) => (
                                                    <li key={pt} className="flex gap-3 text-[13px] leading-relaxed text-zinc-400">
                                                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <button
                                            onClick={() => setOpen(expanded ? null : p.title)}
                                            className="mt-2 w-fit font-code text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                                        >
                                            {expanded ? "Show less" : "Read more"}
                                        </button>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-code text-[11px] text-zinc-300 transition-colors duration-300 group-hover:border-blue-400/25"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {(p.github || p.live) && (
                                            <div className="mt-auto flex gap-2 pt-6">
                                                {p.github && (
                                                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconBtn}>
                                                        <SiGithub size={15} />
                                                    </a>
                                                )}
                                                {p.live && (
                                                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo" className={iconBtn}>
                                                        <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}