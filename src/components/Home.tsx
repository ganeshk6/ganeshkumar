import { useEffect, useState } from "react";
import rightArrow from "../assets/right-arrow.svg";
import download from "../assets/download.svg";
import leetcode from "../assets/leetcode.svg";

export default function Home() {
    const developerRoles = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "NodeJs Developer",
        "Backend Develope"
    ]

    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(()=>{
        const currentRole = developerRoles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;
        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % developerRoles.length);
        }else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                        ? currentRole.substring(0, text.length - 1)
                        : currentRole.substring(0, text.length + 1)
                    );
                },
                isDeleting ? 45 : 100
            );
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex])

    return(
        <main id="home" className="px-4 md:px-6">
            <section className="flex min-h-screen items-center pt-32">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="">
                        <button className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] px-3.5 py-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                            </span>
                            <span className="text-[11px] font-medium tracking-wide text-cyan-300">Open to opportunities</span>
                        </button>
                        <p className="mb-3 font-code text-sm uppercase tracking-[0.25em] text-zinc-500">Hi, I'm</p>
                        <h1 className="font-heading font-black leading-[0.9] tracking-tighter">
                            <span className="block text-[clamp(3rem,8vw,5.5rem)] text-white">Ganesh</span>
                            <span className="block gradient-text text-[clamp(3rem,8vw,5.5rem)]">Kumar</span>
                        </h1>
                        <div className="mb-7 mt-5 flex h-8 items-center gap-3">
                            <span className="h-0.5 w-5 rounded-full bg-blue-400"></span>
                            <span className="font-code text-lg font-light tracking-wide text-zinc-300">
                                {text}
                                <span className="ml-px animate-pulse text-blue-400">|</span>
                            </span>
                        </div>
                        <p className="mb-10 max-w-xl leading-7 leading-relaxed text-zinc-400">
                            I'm a Full Stack Developer experienced in
                            building production-ready web applications and RESTful APIs
                            using React.js, Next.js, Node.js, Express.js, JavaScript,
                            and TypeScript. I specialize in developing responsive user
                            interfaces, scalable backend systems, database management,
                            API integration, authentication, and application deployment.
                            I enjoy solving complex problems, debugging applications,
                            and writing clean, maintainable code to deliver efficient
                            and reliable software solutions.
                        </p>
                        <div className="mb-10 flex flex-wrap gap-4">
                            <button className="
                                flex shrink-0 items-center gap-2 rounded-xl
                                bg-gradient-to-r from-blue-600 to-violet-600
                                px-7 py-3.5 text-sm font-semibold text-white
                                shadow-lg shadow-blue-600/20 transition-all
                                duration-300 hover:-translate-y-0.5
                                hover:shadow-blue-500/40">View my work
                                <img src={rightArrow} alt="work" className="h-6 w-6 object-contain brightness-0 invert" />
                            </button>
                            <a className="justify-center inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/[0.08]">
                                <img src={download} alt="Resume" className="h-6 w-6 object-contain brightness-0 invert" />
                                Resume
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-code text-[10px] uppercase tracking-[0.3em] text-zinc-600">Connect</span>
                            <span className="h-px w-6 bg-zinc-800"></span>
                            <a href="https://github.com/ganeshk6" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/ganesh-kumar-47988621b/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="mailto:ganesh620671@gmail.com" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                            </a>
                            <a
                                href="https://leetcode.com/u/ganesh62/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400"
                            >
                                <img
                                    src={leetcode}
                                    alt="LeetCode"
                                    className="h-[20px] w-[20px] object-contain brightness-0 invert transition-all group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[1000%] group-hover:hue-rotate-[145deg]"
                                />
                            </a>
                        </div>

                    </div>
                    <div className="ml-auto hidden w-[400px] lg:block">
                        <div className="animate-float">
                            {/* Border wrapper: yahi gradient hai, p-[1.5px] se sirf patli ring dikhegi */}
                            <div
                                className="rounded-[20px] p-[1.5px]"
                                style={{
                                    background:
                                        "conic-gradient(from var(--angle), #2563eb, transparent 25%, #7c3aed 50%, transparent 75%, #2563eb)",
                                    animation: "border-spin 5s linear infinite",
                                }}
                            >
                                <div className="overflow-hidden rounded-[18.5px] bg-[#0b0b12]">
                                    {/* Editor Header */}
                                    <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />

                                        <span className="ml-2 font-code text-xs text-zinc-500">
                                            developer.ts
                                        </span>
                                    </div>

                                    {/* Code Content */}
                                    <div className="space-y-1.5 p-5 font-code text-[13px] leading-relaxed">
                                        {/* Line 1 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                1
                                            </span>
                                            <span>
                                                <span className="text-violet-400">const</span>{" "}
                                                <span className="text-cyan-300">developer</span>{" "}
                                                <span className="text-zinc-500">=</span>{" "}
                                                <span className="text-zinc-400">{"{"}</span>
                                            </span>
                                        </div>

                                        {/* Line 2 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                2
                                            </span>
                                            <span className="pl-4">
                                                <span className="text-sky-300">name</span>
                                                <span className="text-zinc-500">: </span>
                                                <span className="text-emerald-300">
                                                    'Ganesh Kumar'
                                                </span>
                                                <span className="text-zinc-500">,</span>
                                            </span>
                                        </div>

                                        {/* Line 3 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                3
                                            </span>
                                            <span className="pl-4">
                                                <span className="text-sky-300">role</span>
                                                <span className="text-zinc-500">: </span>
                                                <span className="text-emerald-300">
                                                    'Full Stack Developer'
                                                </span>
                                                <span className="text-zinc-500">,</span>
                                            </span>
                                        </div>

                                        {/* Line 4 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                4
                                            </span>
                                            <span className="pl-4">
                                                <span className="text-sky-300">location</span>
                                                <span className="text-zinc-500">: </span>
                                                <span className="text-emerald-300">
                                                    'India'
                                                </span>
                                                <span className="text-zinc-500">,</span>
                                            </span>
                                        </div>

                                        {/* Line 5 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                5
                                            </span>
                                            <span className="pl-4">
                                                <span className="text-sky-300">stack</span>
                                                <span className="text-zinc-500">: </span>
                                                <span className="text-zinc-400">[</span>
                                                <span className="text-emerald-300">'MERN'</span>
                                                <span className="text-zinc-500">, </span>
                                                <span className="text-emerald-300">'Node.js'</span>
                                                <span className="text-zinc-500">, </span>
                                                <span className="text-emerald-300">'Laravel'</span>
                                                <span className="text-zinc-400">]</span>
                                                <span className="text-zinc-500">,</span>
                                            </span>
                                        </div>

                                        {/* Line 6 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                6
                                            </span>
                                            <span className="pl-4">
                                                <span className="text-sky-300">available</span>
                                                <span className="text-zinc-500">: </span>
                                                <span className="text-emerald-300">true</span>
                                                <span className="text-zinc-500">,</span>
                                            </span>
                                        </div>

                                        {/* Line 7 */}
                                        <div className="flex gap-3">
                                            <span className="w-4 select-none text-right text-zinc-700">
                                                7
                                            </span>
                                            <span className="text-zinc-400">{"}"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl mt-15 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                    <p className="text-2xl font-black text-white sm:text-3xl">5+</p>
                    <p className="mt-0.5 font-code text-sm text-zinc-500">Projects</p>
                </div>
                <div>
                    <p className="text-2xl font-black text-white sm:text-3xl">2+</p>
                    <p className="mt-0.5 font-code text-sm text-zinc-500">Years Coding</p>
                </div>
                <div>
                    <p className="text-2xl font-black text-white sm:text-3xl">100%</p>
                    <p className="mt-0.5 font-code text-sm text-zinc-500">Commitment</p>
                </div>
            </div>
            <div className="mx-auto w-full max-w-7xl mt-27 grid grid-cols-2 gap-6 border-t border-white/[0.05] pt-8 sm:grid-cols-4"></div>
      </main>            
    )
}