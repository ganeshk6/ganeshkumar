import { ArrowRight, ArrowUp, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiLeetcode } from "react-icons/si";

// ---- Apni details yahan badlo ----
const NAME = "Ganesh Kumar";
const EMAIL = "ganesh620671@email.com";
const GITHUB = "https://github.com/ganeshk6";
const LINKEDIN = "https://www.linkedin.com/in/ganesh-kumar-47988621b/";
const LEETCODE = "https://leetcode.com/u/ganesh62/";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];
// -----------------------------------

const initials = NAME.split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const socialBtn =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white";

export default function Footer() {
    return (
        <footer className="relative mt-24 overflow-hidden border-t border-white/[0.06]">
            {/* background glow */}
            <span className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),transparent_70%)]" />

            <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 xl:px-0">
                {/* CTA band */}
                <div className="flex flex-col items-start justify-between gap-10 py-16 sm:py-20 md:flex-row md:items-center">
                    <div>
                        <p className="font-code text-[11px] uppercase tracking-[0.3em] text-cyan-500/80">
                            Ready to build?
                        </p>
                        <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                            Let&apos;s create something
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-transparent">
                                extraordinary
                            </span>
                            <span className="text-violet-500">.</span>
                        </h2>
                    </div>

                    <a
                        href="#contact"
                        className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_-8px_rgba(99,102,241,0.95)]"
                    >
                        Get In Touch
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Footer bar */}
                <div className="border-t border-white/[0.06] py-6">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                        {/* Logo */}
                        <a href="#home" className="group flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-4xl bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white shadow-[0_0_20px_-4px_rgba(99,102,241,0.8)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                {initials}
                            </span>
                            <span className="text-sm font-semibold text-white">{NAME}</span>
                        </a>

                        {/* Nav */}
                        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {navLinks.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="relative text-xs text-zinc-500 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-violet-500 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>

                        {/* Socials */}
                        <div className="flex items-center gap-2">
                            <a href={LEETCODE} target="_blank" rel="noreferrer" aria-label="GitHub" className={socialBtn}>
                                <SiLeetcode size={14} />
                            </a>
                            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className={socialBtn}>
                                <SiGithub size={14} />
                            </a>
                            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={socialBtn}>
                                <FaLinkedinIn size={14} />
                            </a>
                            <a href={`mailto:${EMAIL}`} aria-label="Email" className={socialBtn}>
                                <Mail size={14} />
                            </a>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                aria-label="Back to top"
                                className={socialBtn}
                            >
                                <ArrowUp size={14} />
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 border-t border-white/[0.05] pt-5 text-center font-code text-[11px] text-zinc-600">
                        © {new Date().getFullYear()} {NAME} — Built with React.js &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}