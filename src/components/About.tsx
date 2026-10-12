import {Award, Calendar, Code2, GraduationCap, MapPin, Target, Users, Zap} from "lucide-react";
import Reveal from "./Reveal";

const education = [
    {
        title: "Master of Computer Application",
        place: "Rajiv Gandhi Prodyogiki Vishwavidyalay",
        meta: [
            { icon: Calendar, text: "2025 - 2027" },
            { icon: Award, text: "Pursuing" },
        ],
        color: "blue",
    },
    {
        title: "Bachelor of Computer Application",
        place: "Dev Bhoomi Uttarakhand University",
        meta: [
            { icon: Calendar, text: "2021 - 2024" },
            { icon: Award, text: "CGPA: 8.99" },
        ],
        color: "violet",
    },
];

const stats = [
    { icon: MapPin, value: "India", label: "Based in" },
    { icon: GraduationCap, value: "2", label: "Education" },
    { icon: Calendar, value: "2+", label: "Experience" },
];

const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Readable, tested and maintainable by design." },
    { icon: Zap, title: "Performance", desc: "Fast, accessible experiences that stay smooth." },
    { icon: Target, title: "Problem Solver", desc: "Turning tangled problems into simple solutions." },
    { icon: Users, title: "Collaborative", desc: "Clear communication across every team I join." },
];

const card =
    "group rounded-2xl border border-white/[0.08] bg-[#0d0d12] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-[#10101a] hover:shadow-[0_12px_30px_-12px_rgba(59,130,246,0.4)]";

const iconBox =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-500/10";

export default function About() {
    return (
        <>
            <section id="about" className="mx-auto w-full max-w-7xl pt-20 px-4 md:px-6 xl:px-0">
                {/* Section label + heading */}
                <Reveal>
                    <div className="flex items-center gap-3 font-code text-xs">
                        <span className="text-cyan-400">01</span>
                        <span className="h-px w-8 bg-zinc-700" />
                        <span className="uppercase tracking-[0.3em] text-zinc-500">About Me</span>
                    </div>
                    <h2 className="mt-3 bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                        Get to know me
                    </h2>
                </Reveal>

                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <Reveal direction="right">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-4 py-1.5 font-code text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                                <Code2 size={12} />
                                Full Stack Developer
                            </span>
                        </Reveal>
                        <Reveal direction="right" delay={100}>
                            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-zinc-400">
                                I am a Full Stack Developer experienced in building production-ready
                                web applications and RESTful APIs using React.js, Next.js, Node.js,
                                Express.js, JavaScript, and TypeScript, with strong skills in
                                databases, API integration, authentication, deployment, debugging,
                                and problem-solving.
                            </p>
                        </Reveal>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {stats.map(({ icon: Icon, value, label }, i) => (
                                <Reveal key={label} delay={200 + i * 100} className="h-full">
                                    <div className={`${card} h-full p-5`}>
                                        <Icon size={16} className="text-blue-400" />
                                        <div className="mt-3 text-2xl font-bold text-white">{value}</div>
                                        <div className="mt-1 font-code text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                                            {label}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Education timeline */}
                    <div>
                        <div className="flex items-center gap-3 font-code text-xs">
                            <span className="h-px w-6 bg-zinc-700" />
                            <span className="uppercase tracking-[0.3em] text-zinc-500">Education</span>
                        </div>

                        <div className="relative mt-8 space-y-4 pl-10">
                            {/* vertical line */}
                            <span className="absolute left-[7px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent" />

                            {education.map((e, i) => {
                                const isCyan = e.color === "blue";
                                return (
                                    <Reveal key={e.title} direction="left" delay={150 + i * 150} className="relative">
                                        <span
                                            className={`absolute -left-10 top-[14px] flex h-4 w-4 items-center justify-center rounded-full border-2 bg-[#0a0a0f] ${
                                                isCyan ? "border-blue-400" : "border-violet-400"
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${
                                                    isCyan ? "bg-blue-400" : "bg-violet-400"
                                                }`}
                                            />
                                        </span>

                                        <div className={`${card} flex gap-4 p-5`}>
                                            <div className={iconBox}>
                                                <GraduationCap
                                                    size={16}
                                                    className={isCyan ? "text-blue-400" : "text-blue-400"}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">{e.title}</h3>
                                                <p className="mt-1 text-sm text-zinc-400">{e.place}</p>
                                                <div className="mt-3 flex gap-4 font-code text-[11px] text-zinc-500">
                                                    {e.meta.map(({ icon: Icon, text }) => (
                                                        <span key={text} className="inline-flex items-center gap-1.5">
                                                            <Icon size={13} />
                                                            {text}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="mt-13 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map(({ icon: Icon, title, desc }, i) => (
                        <Reveal key={title} delay={(i % 4) * 100} className="h-full">
                            <div key={title} className={`${card} h-full p-6`}>
                                <div className={iconBox}>
                                    <Icon size={18} className="text-blue-400" />
                                </div>
                                <h3 className="mt-6 font-semibold text-white">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}