import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
    children: ReactNode;
    direction?: Direction;
    delay?: number; // ms
    duration?: number; // ms
    distance?: number; // px
    once?: boolean; // true: ek baar animate, false: har baar scroll pe
    className?: string;
};

const hiddenTransform = (dir: Direction, d: number) => {
    switch (dir) {
        case "up":
            return `translate3d(0, ${d}px, 0)`;
        case "down":
            return `translate3d(0, -${d}px, 0)`;
        case "left":
            return `translate3d(${d}px, 0, 0)`;
        case "right":
            return `translate3d(-${d}px, 0, 0)`;
        default:
            return "none";
    }
};

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 700,
    distance = 32,
    once = true,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // reduced motion ya purane browser: seedha dikha do
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    const style: CSSProperties = {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform(direction, distance),
        filter: visible ? "blur(0)" : "blur(6px)",
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
    };

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
}