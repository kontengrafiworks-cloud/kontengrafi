import { useEffect, useRef } from "react";

// Hook: adds the `in-view` class when element enters viewport.
// Also reveals immediately if already visible on mount (robust against
// scroll-restoration / anchor navigation / partial-viewport edge cases).
export function useReveal(delay = 0) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.animationDelay = `${delay}ms`;

        // If element is already visible on mount, reveal immediately.
        const rect = el.getBoundingClientRect();
        const inView =
            rect.top < window.innerHeight - 20 && rect.bottom > 20;
        if (inView) {
            el.classList.add("in-view");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(el);

        // Safety net: ensure visibility within 2 seconds even if observer
        // misses (e.g. due to layout shift, scroll-restoration timing).
        const fallback = setTimeout(() => {
            el.classList.add("in-view");
        }, 2000);

        return () => {
            observer.disconnect();
            clearTimeout(fallback);
        };
    }, [delay]);

    return ref;
}
