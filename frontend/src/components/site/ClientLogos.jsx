import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";

const CLIENTS = [
    {
        name: "Lavish",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/w9qbuowt_image.png",
    },
    {
        name: "iMFG",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/99lx5puj_4997e50b-5965-4d46-8cde-4b14a49b07e5.png",
    },
    {
        name: "GKB Green Lake City",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/bb5xnpwo_image.png",
    },
    {
        name: "Écloria Luxury Jewelry",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/zd1b2234_image.png",
    },
    {
        name: "Kafamilk",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/itjra3zt_image.png",
    },
    {
        name: "DCI — Dentyn Care International",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/a2kzei3s_Logo%20DCI%20%281%29.jpg",
    },
    {
        name: "FUT",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/gkbcxf9u_Untitled%20design.png",
    },
];

// Duplicate track so auto-scroll loops seamlessly
const TRACK = [...CLIENTS, ...CLIENTS];

export const ClientLogos = () => {
    const rHead = useReveal(0);
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef({ startX: 0, scrollLeftStart: 0 });

    // Auto-scroll loop (scrollLeft based, plays nicely with manual drag)
    useEffect(() => {
        let raf;
        let last = performance.now();
        const SPEED = 35; // px per second

        const tick = (now) => {
            const dt = (now - last) / 1000;
            last = now;
            const el = trackRef.current;
            if (el && !isPaused && !isDragging) {
                el.scrollLeft += SPEED * dt;
                const half = el.scrollWidth / 2;
                if (el.scrollLeft >= half) {
                    el.scrollLeft -= half;
                } else if (el.scrollLeft < 0) {
                    el.scrollLeft += half;
                }
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [isPaused, isDragging]);

    // --- Mouse drag handlers (desktop) ---
    const onMouseDown = (e) => {
        const el = trackRef.current;
        if (!el) return;
        setIsDragging(true);
        dragRef.current = {
            startX: e.pageX - el.offsetLeft,
            scrollLeftStart: el.scrollLeft,
        };
    };
    const onMouseMove = (e) => {
        if (!isDragging) return;
        const el = trackRef.current;
        if (!el) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - dragRef.current.startX) * 1.5;
        el.scrollLeft = dragRef.current.scrollLeftStart - walk;
    };
    const onMouseUp = () => setIsDragging(false);

    return (
        <section
            id="clients"
            data-testid="clients-section"
            className="relative py-12 md:py-16"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal text-center mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#1D1D1F]/55">
                        <span className="w-6 h-px bg-[#0B1120]/20" />
                        Dipercaya oleh
                        <span className="w-6 h-px bg-[#0B1120]/20" />
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={trackRef}
                        data-testid="clients-track"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            setIsDragging(false);
                        }}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        className={`flex items-center gap-5 md:gap-7 overflow-x-auto no-scrollbar py-3 select-none ${
                            isDragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                        style={{
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                        }}
                    >
                        {TRACK.map((c, i) => (
                            <div
                                key={`${c.name}-${i}`}
                                data-testid={`client-logo-${i}`}
                                className="flex-shrink-0 bg-white border border-[#0B1120]/8 rounded-2xl shadow-[0_4px_18px_-8px_rgba(11,17,32,0.15)] flex items-center justify-center"
                                style={{
                                    width: "168px",
                                    height: "112px",
                                    padding: "16px",
                                }}
                                title={c.name}
                            >
                                <img
                                    src={c.logo}
                                    alt={c.name}
                                    loading="lazy"
                                    draggable={false}
                                    className="block object-contain pointer-events-none"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        width: "auto",
                                        height: "auto",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Edge fade matching page bg */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#F4F6FA] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#F4F6FA] to-transparent" />
                </div>

                <div className="mt-4 text-center text-[11px] text-[#1D1D1F]/40">
                    Geser untuk lihat lebih banyak
                </div>
            </div>
        </section>
    );
};
