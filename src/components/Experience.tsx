"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "Script Venue",
        period: "Oct 2024 - Present",
        location: "Onsite",
        summary:
            "Developing and maintaining production-ready web applications for domestic and international clients, handling end-to-end development across frontend, backend, third-party integrations, and deployment.",
        points: [
            "Worked as a Full Stack Developer on Ubuntu-based environments, ensuring stable and secure deployments.",
            "Implemented role-based authentication systems to manage user access and security.",
            "Integrated multiple external APIs such as Google Maps, Google Weather, OpenAI, and other third-party services.",
            "Designed and built subscription-based modules with recurring billing and user management.",
            "Worked on the end-to-end project lifecycle including requirement analysis, development, testing, and deployment."
        ],
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "Laravel",
            "PHP",
            "Google Map API",
            "Payment Gateway",
            "OpenAI",
        ],
    },
    {
        title: "Full Stack Developer (MERN)",
        company: "AppMingle Media",
        period: "Jun 2024 - Sep 2024",
        location: "Onsite",
        summary:
            "Developed full-stack web applications and RESTful APIs, contributing to MERN-based projects, cab booking solutions, and multi-vendor eCommerce platforms with real-time notifications and payment integrations.",
        points: [
            "Developed and maintained scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
            "Designed and implemented RESTful APIs using Node.js and Express.js, enabling seamless communication between frontend and backend systems.",
            "Developed a Cab Booking application, integrating Firebase Cloud Messaging (FCM) for real-time push notifications.",
            "Built a multi-vendor eCommerce application with secure payment gateway integration and backend API development."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MySQL", "Laravel", "PHP"],
    },
    {
        title: "Full Stack Developer Intern (MERN)",
        company: "VerveGen Tech Pvt. Ltd.",
        period: "Feb 2024 - May 2024",
        location: "Onsite",
        summary:
            "Contributed to full-stack application development using MERN technologies and Laravel, building RESTful APIs, optimizing database operations, and integrating third-party services and payment gateways.",
        points: [
            "Developed and maintained scalable full-stack applications using React.js, Node.js, Express.js, MongoDB, PHP, and Laravel",
            "Designed and implemented RESTful APIs using Node.js/Express.js and Laravel, enabling seamless communication between frontend and backend systems.",
            "Implemented database optimization strategies across MongoDB and MySQL to improve application performance and responsiveness.",
            "Collaborated with cross-functional teams on project planning, development, testing, and deployment throughout the software development lifecycle.",
            "Led backend development for the Drycleaneo management system, implementing REST APIs, third-party API integrations, and secure payment gateway integration."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "Laravel", "PHP"],
    },
    {
        title: "Full Stack Developer Intern",
        company: "Hachiweb, Values-Driven Tech",
        period: "Jun 2022 - Nov 2022",
        location: "Onsite",
        summary:
            "Built foundational full-stack development skills through hands-on projects, creating interactive web interfaces and working with PHP, Laravel, JavaScript, and MySQL while collaborating with the development team.",
        points: [
            "Gained expertise in HTML, CSS, JavaScript, PHP, and MySQL through hands-on projects and training sessions.",
            "Developed interactive frontend features with HTML, CSS, and JavaScript, enhancing user engagement.",
            "Collaborated closely with the team to contribute to the development and execution of projects, providing valuable insights and support as an intern.",
        ],
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    },
];

export default function Experience() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [fill, setFill] = useState(0);
    const [activeCount, setActiveCount] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const wrap = wrapRef.current;
            if (!wrap) return;
            const rect = wrap.getBoundingClientRect();
            // line tab tak bharti hai jab tak screen ke ~55% point tak pahunche
            const trigger = window.innerHeight * 0.55;
            const h = Math.min(Math.max(trigger - rect.top, 0), rect.height);
            setFill(h);

            let count = 0;
            dotRefs.current.forEach((d) => {
                if (!d) return;
                const y = d.getBoundingClientRect().top - rect.top + 8;
                if (y <= h) count++;
            });
            setActiveCount(count);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <>
            <section id="experience" className="mx-auto w-full max-w-7xl pt-25 px-4 px-4 md:px-6 xl:px-0">
                {/* Heading */}
                <Reveal>
                    <div className="flex items-center gap-3 font-code text-xs">
                        <span className="text-cyan-400">02</span>
                        <span className="h-px w-8 bg-zinc-700" />
                        <span className="uppercase tracking-[0.3em] text-zinc-500">Career</span>
                    </div>
                    <h2 className="mt-3 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                        Where I&apos;ve worked
                    </h2>
                </Reveal>

                <div ref={wrapRef} className="relative mt-16">
                    {/* Base line */}
                    <span className="absolute bottom-0 left-2 top-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2" />
                    {/* Scroll fill line */}
                    <span
                        className="absolute left-2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 md:left-1/2"
                        style={{ height: fill }}
                    />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, i) => {
                            const active = i < activeCount;
                            const left = i % 2 === 0;
                            return (
                                <div key={exp.title} className="relative pl-10 md:grid md:grid-cols-2 md:pl-0">
                                    {/* Dot */}
                                    <span
                                        ref={(el) => {
                                            dotRefs.current[i] = el;
                                        }}
                                        className={`absolute left-2 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-[#06060b] transition-all duration-300 md:left-1/2 ${
                                            active
                                                ? "border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                                                : "border-zinc-600"
                                        }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                                                active ? "bg-cyan-400" : "bg-zinc-600"
                                            }`}
                                        />
                                    </span>

                                    {/* Card */}
                                    <Reveal
                                        direction={left ? "right" : "left"}
                                        delay={80}
                                        distance={48}
                                        className={left ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"}
                                    >
                                        <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--color-bg-card,#0c0b10)] p-5 transition-colors duration-300 hover:border-white/[0.14] sm:p-6">
                                            {/* Hover left gradient border */}
                                            <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-y-100" />

                                            {/* Number */}
                                            <span className="absolute right-5 top-4 select-none text-3xl font-bold text-white/[0.06] sm:text-4xl">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <h3 className="pr-12 text-lg font-semibold text-white">{exp.title}</h3>
                                            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-cyan-400">
                                                <Building2 size={14} />
                                                {exp.company}
                                            </p>

                                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-code text-[11px] text-zinc-500">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar size={11} />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={11} />
                                                    {exp.location}
                                                </span>
                                            </div>

                                            <p className="mt-5 text-sm leading-relaxed text-zinc-400">{exp.summary}</p>

                                            <ul className="mt-4 space-y-3">
                                                {exp.points.map((p) => (
                                                    <li key={p} className="flex gap-3 text-[13px] leading-relaxed text-zinc-400">
                                                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                                                        <span>{p}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {exp.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-md border border-cyan-400/20 bg-cyan-400/[0.05] px-2.5 py-1 font-code text-[11px] text-cyan-200"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </article>
                                    </Reveal>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05]  sm:grid-cols-4"></div>
        </>
    );
}