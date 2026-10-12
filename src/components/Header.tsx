import { useEffect, useRef, useState } from "react";
import { handleNavClick, getSectionTop } from "../utils/scrollToSection";
import logo from "../assets/menu.svg";
import close from "../assets/close.svg";

// id = section ki id (jo <section id="..."> mein hai). Apne sections se match karo.
const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "work" },
    { name: "Profiles", id: "profiles" },
    { name: "Contact", id: "contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    const lockUntil = useRef(0);

    const goTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
        handleNavClick(e, id);
        setActiveId(id);
        lockUntil.current = Date.now() + 1400;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
            if (Date.now() < lockUntil.current) return;

            // screen ke ~35% pe ek "reading line", jis section ka top uske upar gaya wahi active
            const line = window.scrollY + window.innerHeight * 0.35;
            let current = navLinks[0].id;

            navLinks.forEach(({ id }) => {
                const top = getSectionTop(id);
                if (top !== null && top <= line) current = id;
            });

            // page ke bilkul neeche pahunche to last link active
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) current = navLinks[navLinks.length - 1].id;

            setActiveId(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
                isScrolled ? "px-4 pt-3 md:px-6" : "px-4 pt-5 md:px-6"
            }`}
        >
            <nav
                className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl transition-all duration-500 ease-in-out ${
                    isScrolled
                        ? "border border-blue-400/40 bg-slate-950/85 px-3 py-3 shadow-[0_8px_40px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:px-6"
                        : "border border-white/[0.08] bg-slate-950/45 px-3 py-4 backdrop-blur-md sm:px-6"
                }`}
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => {
                        goTo(e, "home");
                        setMenuOpen(false);
                    }}
                    className="group flex shrink-0 items-center gap-3"
                    aria-label="Ganesh home"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        GK
                    </span>
                    <span className="text-lg font-semibold tracking-tight text-white">Ganesh</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => goTo(e, link.id)}
                                className={`relative block py-1 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-violet-500 after:transition-all after:duration-300 ${
                                    activeId === link.id
                                        ? "text-blue-400 after:w-full"
                                        : "text-slate-300 after:w-0 hover:text-white hover:after:w-full"
                                }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire Me */}
                <div className="flex items-center gap-2">
                    <a
                        href="mailto:ganesh620671@gmail.com"
                        className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40 sm:inline-flex"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <img
                            src={menuOpen ? close : logo}
                            alt={menuOpen ? "Close menu" : "Open menu"}
                            className="h-6 w-6 object-contain brightness-0 invert"
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
                        menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                >
                    <ul className="space-y-1 p-3">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => {
                                        goTo(e, link.id);
                                        setMenuOpen(false);
                                    }}
                                    className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                                        activeId === link.id
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li className="pt-2">
                            <a
                                href="mailto:ganesh620671@gmail.com"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}