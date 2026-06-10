import { useEffect, useRef } from "react";

// Hook: adds the `in-view` class when element enters viewport.
export function useReveal(delay = 0) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.animationDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return ref;
}
