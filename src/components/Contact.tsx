import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";

// ---- Apni details yahan badlo ----
const EMAIL = "ganesh620671@email.com";
const PHONE = "+91 9693780132";
const LOCATION = "India";
const GITHUB = "https://github.com/ganeshk6";
const LINKEDIN = "https://www.linkedin.com/in/ganesh-kumar-47988621b/";
// -----------------------------------

type Status = "idle" | "sending" | "success" | "error";

const infoCard =
    "group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_12px_30px_-14px_rgba(59,130,246,0.45)]";

const field =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 hover:border-white/[0.16] focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]";

const label = "mb-2 block font-code text-[10px] uppercase tracking-[0.2em] text-zinc-500";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    subject: `New portfolio message from ${data.name}`,
                    from_name: "Portfolio Contact",
                    botcheck: data.website ? "on" : "", // spam honeypot
                }),
            });
            const json = await res.json();
            if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong");
            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 6000);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
        }
    }

    return (
        <>
            <section id="contact" className="mx-auto w-full max-w-7xl pt-27 px-4 md:px-6 xl:px-0">
                {/* Heading */}
                <Reveal>
                    <div className="flex items-center gap-3 font-code text-xs">
                        <span className="text-cyan-400">09</span>
                        <span className="h-px w-8 bg-zinc-700" />
                        <span className="uppercase tracking-[0.3em] text-zinc-500">Get In Touch</span>
                    </div>
                    <h2 className="mt-3 bg-gradient-to-r from-blue-600 via-sky-300 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                        Let&apos;s build something
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
                    {/* LEFT */}
                    <div className="space-y-4">
                        <Reveal direction="right" delay={0}>
                            <a href={`mailto:${EMAIL}`} className={infoCard}>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Mail size={18} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-code text-[10px] uppercase tracking-[0.2em] text-zinc-500">Email</p>
                                    <p className="truncate text-sm font-semibold text-white">{EMAIL}</p>
                                </div>
                                <ArrowUpRight size={14} className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                            </a>
                        </Reveal>
                        <Reveal direction="right" delay={100}>
                            <div className={infoCard}>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="font-code text-[10px] uppercase tracking-[0.2em] text-zinc-500">Location</p>
                                    <p className="text-sm font-semibold text-white">{LOCATION}</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="right" delay={200}>
                            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={infoCard}>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Phone size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-code text-[10px] uppercase tracking-[0.2em] text-zinc-500">Phone</p>
                                    <p className="text-sm font-semibold text-white">{PHONE}</p>
                                </div>
                                <ArrowUpRight size={14} className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                            </a>
                        </Reveal>
                        <Reveal direction="right" delay={300}>
                            <p className="pt-3 font-code text-[10px] uppercase tracking-[0.3em] text-zinc-500">Connect</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { name: "GitHub", href: GITHUB, icon: SiGithub },
                                    { name: "LinkedIn", href: LINKEDIN, icon: FaLinkedinIn },
                                ].map(({ name, href, icon: Icon }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#0d0d12] py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                                    >
                                        <Icon size={15} />
                                        {name}
                                    </a>
                                ))}
                            </div>
                        </Reveal>

                        {/* Available card */}
                        <Reveal direction="right" delay={400}>
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-5 transition-all duration-300 hover:border-violet-400/40">
                                <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                                <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    </span>
                                    Available for work
                                </div>
                                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                                    Open to full-time, part-time, and freelance opportunities — usually replies within 24 hours.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT: Form */}
                    <Reveal direction="left" delay={200}>
                        <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className={label}>Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        minLength={2}
                                        maxLength={80}
                                        placeholder="John Doe"
                                        autoComplete="name"
                                        className={field}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={label}>Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        maxLength={120}
                                        placeholder="john@example.com"
                                        autoComplete="email"
                                        className={field}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className={label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={7}
                                    placeholder="Tell me about your project..."
                                    className={`${field} resize-none`}
                                />
                            </div>

                            {/* Honeypot: bots ke liye, insaan ko dikhta nahi */}
                            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(99,102,241,0.9)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={15} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-4 text-sm text-emerald-300" role="status">
                                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                                    Message sent! I’ll get back to you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/[0.07] p-4 text-sm text-red-300" role="alert">
                                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                                    {errorMsg || "The message couldn't be sent. Please try again."}
                                </div>
                            )}
                        </form>
                    </Reveal>
                </div>
            </section>
        </>
    );
}