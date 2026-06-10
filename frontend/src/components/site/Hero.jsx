import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { BRAND, Pinwheel } from "@/lib/brand";
import { useReveal } from "@/lib/reveal";

// Platform icons from simpleicons CDN (no install needed)
const PLATFORMS = [
    { slug: "instagram", label: "Instagram" },
    { slug: "tiktok", label: "TikTok" },
    { slug: "youtube", label: "YouTube" },
    { slug: "pinterest", label: "Pinterest" },
    { slug: "shopee", label: "Shopee" },
    { slug: "facebook", label: "Facebook" },
    { slug: "x", label: "X" },
    { slug: "whatsapp", label: "WhatsApp" },
    { slug: "spotify", label: "Spotify" },
    { slug: "linkedin", label: "LinkedIn" },
];

export const Hero = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(120);
    const r3 = useReveal(280);
    const r4 = useReveal(420);
    const r5 = useReveal(560);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
        >
            {/* Background pinwheel decorations */}
            <div className="absolute -top-20 -right-20 text-[#2A4FE0]/8 pointer-events-none">
                <Pinwheel className="w-[420px] h-[420px] animate-spin-slow" />
            </div>
            <div className="absolute top-1/3 -left-32 text-[#2A4FE0]/6 pointer-events-none">
                <Pinwheel className="w-[260px] h-[260px] animate-spin-slow [animation-direction:reverse]" />
            </div>

            <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 text-center">
                {/* Eyebrow pill */}
                <div ref={r1} className="reveal inline-flex">
                    <span className="inline-flex items-center gap-2 bg-white/80 border border-[#14183A]/10 rounded-full pl-2 pr-4 py-1.5 shadow-sm">
                        <span className="w-5 h-5 rounded-full bg-[#2A4FE0] grid place-items-center text-white">
                            <Pinwheel className="w-3 h-3" />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#14183A]/70">
                            Studio Konten untuk Fashion & F&B
                        </span>
                    </span>
                </div>

                {/* Headline with serif italic accent */}
                <h1
                    ref={r2}
                    className="reveal mt-7 font-display font-bold tracking-[-0.035em] text-[#14183A] mx-auto max-w-[1000px]"
                    style={{ fontSize: "clamp(2.4rem, 7vw, 5.8rem)", lineHeight: 1.02 }}
                >
                    A{" "}
                    <span className="font-serif-italic text-[#2A4FE0] font-normal">
                        helping&nbsp;hand
                    </span>{" "}
                    behind <br className="hidden md:block" />
                    every post
                    <span className="text-[#2A4FE0]">.</span>
                </h1>

                {/* Sub */}
                <p
                    ref={r3}
                    className="reveal mt-7 max-w-[640px] mx-auto text-base md:text-lg text-[#14183A]/70 leading-relaxed"
                >
                    {BRAND.description}
                </p>

                {/* CTAs */}
                <div
                    ref={r4}
                    className="reveal mt-9 flex flex-wrap items-center justify-center gap-3"
                >
                    <a
                        data-testid="hero-cta-primary"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-[#14183A] hover:bg-[#2A4FE0] text-white px-6 py-3.5 rounded-full font-semibold text-sm md:text-base shadow-[0_8px_24px_-8px_rgba(20,24,58,0.5)] transition-all duration-300"
                    >
                        Mulai Sekarang
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform"
                        />
                    </a>
                    <a
                        data-testid="hero-cta-secondary"
                        href="#beside"
                        className="inline-flex items-center gap-2 bg-white/70 hover:bg-white border border-[#14183A]/10 text-[#14183A] px-6 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300"
                    >
                        Lihat Cara Kerja
                    </a>
                </div>

                {/* Caption under CTA */}
                <div className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#14183A]/45">
                    Aktif untuk brand di Indonesia &middot; Mulai dari Rp 4 jt
                </div>

                {/* Platforms strip */}
                <div
                    ref={r5}
                    className="reveal mt-16 md:mt-24"
                >
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#14183A]/45 mb-5">
                        Hadir di semua platform yang brand Anda butuhkan
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap">
                                {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
                                    <img
                                        key={`${p.slug}-${i}`}
                                        src={`https://cdn.simpleicons.org/${p.slug}/14183A`}
                                        alt={p.label}
                                        className="h-7 md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* edge fades */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F4EEDF] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F4EEDF] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};
