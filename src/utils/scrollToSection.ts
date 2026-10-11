import type { MouseEvent } from "react";

const HEADER_OFFSET = 100; // fixed navbar ki height ke hisaab se badlo

export function scrollToSection(id: string) {
    if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
}

// <a> ke onClick ke liye: default jump rokta hai, URL mein # nahi aata
export function handleNavClick(e: MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    scrollToSection(id);
}