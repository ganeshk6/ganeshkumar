import type { IconType } from "react-icons";
import {
    SiExpress,
    SiFigma,
    SiGit,
    SiCss,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiClaude,
    SiJira,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cpu, Database, LayoutPanelLeft, Code2, Server, Users, Wrench } from "lucide-react";

type Skill = { name: string; icon?: IconType; color?: string };

const categories: {
    title: string;
    icon: React.ElementType;
    gradient: string;
    skills: Skill[];
}[] = [
    {
        title: "Programming Languages",
        icon: Code2,
        gradient: "from-cyan-400 to-blue-600",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776ab" },
            { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
            { name: "SQL" },
            { name: "PHP", icon: SiPhp, color: "#777bb4" },
        ],
    },
    {
        title: "Core CS",
        icon: Cpu,
        gradient: "from-blue-500 to-violet-600",
        skills: [
            { name: "Data Structures" },
            { name: "Algorithms" },
            { name: "OOP" },
            { name: "DBMS" },
            { name: "Operating Systems" },
            { name: "Computer Networks" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        gradient: "from-fuchsia-500 to-pink-600",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776ab" },
            { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
            { name: "Express.js", icon: SiExpress, color: "#a1a1aa" },
            { name: "REST API Development" },
            { name: "API Integration" },
            { name: "Authentication & Middleware" },
        ],
    },
    {
        title: "Frontend",
        icon: LayoutPanelLeft,
        gradient: "from-sky-400 to-blue-500",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61dafb" },
            { name: "Redux", icon: SiRedux, color: "#764abc" },
            { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#f7df1e" },
            { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
            { name: "CSS", icon: SiCss, color: "#1572b6" },
            { name: "Responsive UI Development" },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        gradient: "from-emerald-400 to-teal-600",
        skills: [
            { name: "MySQL", icon: SiMysql, color: "#4479a1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: Wrench,
        gradient: "from-fuchsia-500 to-purple-600",
        skills: [
            { name: "Git & GitHub", icon: SiGit, color: "#f05032" },
            { name: "Postman", icon: SiPostman, color: "#ff6c37" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "Figma", icon: SiFigma, color: "#f24e1e" },
            { name: "Jira", icon: SiJira, color: "#0052CC" },
            { name: "Vercel", icon: SiVercel, color: "#ffffff" },
            { name: "Claude", icon: SiClaude, color: "#D97757" },
        ],
    },
    {
        title: "Soft Skills",
        icon: Users,
        gradient: "from-amber-400 to-orange-500",
        skills: [
            { name: "Problem-Solving" },
            { name: "Critical Thinking" },
            { name: "Communication" },
            { name: "Team Collaboration" },
            { name: "Time Management" },
            { name: "Adaptability" },
        ],
    },
];

const total = categories.reduce((n, c) => n + c.skills.length, 0);

export default function TechStack() {
    return (
        <>
            <section id="skills" className="mx-auto w-full max-w-7xl pt-27 px-4 md:px-6 xl:px-0">
                {/* Heading */}
                <div className="flex items-center gap-3 font-code text-xs">
                    <span className="text-cyan-400">03</span>
                    <span className="h-px w-8 bg-zinc-700" />
                    <span className="uppercase tracking-[0.3em] text-zinc-500">Tech Stack</span>
                </div>
                <h2 className="mt-3 bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                    Tools I build with
                </h2>
                <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-zinc-400">
                    A working toolkit of {total}+ technologies across the stack — from languages and
                    frameworks to databases, platforms, and the way I work.
                </p>

                {/* Cards */}
                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map(({ title, icon: Icon, gradient, skills }) => (
                        <div
                            key={title}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_12px_30px_-12px_rgba(59,130,246,0.4)]"
                        >
                            {/* hover glow */}
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative flex items-center gap-3">
                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                >
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-white">{title}</h3>
                                    <p className="font-code text-[10px] text-zinc-500">{skills.length} skills</p>
                                </div>
                            </div>

                            <div className="relative mt-5 flex flex-wrap gap-2">
                                {skills.map(({ name, icon: SkillIcon, color }) => (
                                    <span
                                        key={name}
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                                    >
                                        {SkillIcon ? (
                                            <SkillIcon size={13} style={{ color }} />
                                        ) : (
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                        )}
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}