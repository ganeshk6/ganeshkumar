import type { MouseEvent } from "react";

const HEADER_OFFSET = 100; // fixed navbar ki height ke hisaab se badlo

// Lenis (optional smooth scroll) ke liye, bina Lenis install kiye bhi chalta hai
type Scroller = { scrollTo: (target: number, options?: { duration?: number }) => void };
let scroller: Scroller | null = null;
export const setScroller = (s: Scroller | null) => {
    scroller = s;
};

// offsetTop transforms (reveal animation) ko ignore karta hai, isliye position sahi aati hai
function getTop(el: HTMLElement) {
    let y = 0;
    let node: HTMLElement | null = el;
    while (node) {
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
    }
    return y;
}

export function scrollToSection(id: string) {
    const top =
        id === "home"
            ? 0
            : (() => {
                  const el = document.getElementById(id);
                  return el ? getTop(el) - HEADER_OFFSET : null;
              })();
    if (top === null) return;

    if (scroller) scroller.scrollTo(top, { duration: 1.2 });
    else window.scrollTo({ top, behavior: "smooth" });
}

// section ka absolute top (transform/animation se bina badle)
export function getSectionTop(id: string) {
    const el = document.getElementById(id);
    return el ? getTop(el) : null;
}
// <a> ke onClick ke liye: default jump rokta hai, URL mein # nahi aata
export function handleNavClick(e: MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    scrollToSection(id);
}