import { waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

const INLINE_PLATFORMS = [
    "instagram",
    "tiktok",
    "youtube",
    "pinterest",
    "facebook",
    "x",
    "shopee",
];

const MARQUEE_PLATFORMS = [
    { slug: "instagram", label: "Instagram" },
    { slug: "tiktok", label: "TikTok" },
    { slug: "youtube", label: "YouTube" },
    { slug: "pinterest", label: "Pinterest" },
    { slug: "facebook", label: "Facebook" },
    { slug: "x", label: "X" },
    { slug: "shopee", label: "Shopee" },
    { slug: "whatsapp", label: "WhatsApp" },
    { slug: "googlechrome", label: "Chrome" },
];

// Annotation: "kami bantu" caption + arrow CLEARLY pointing left at icons cluster
const KamiBantuAnnotation = () => (
    <span
        className="inline-flex items-end gap-1 align-bottom ml-1.5 md:ml-2 pb-0.5"
        aria-hidden
    >
        <svg
            width="40"
            height="28"
            viewBox="0 0 56 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0B1120]/70"
        >
            <path d="M 52 32 C 38 30, 22 24, 8 14" />
            <path d="M 4 18 L 8 8 L 16 14" />
        </svg>
        <span
            className="text-sm md:text-lg text-[#0B1120]/80 leading-none whitespace-nowrap"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
        >
            kami bantu
        </span>
    </span>
);

export const Hero = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(180);
    const r3 = useReveal(340);
    const r4 = useReveal(480);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden"
        >
            <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

            <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
                {/* Headline */}
                <h1
                    ref={r1}
                    className="reveal font-display tracking-[-0.03em] text-[#0B1120]"
                    style={{
                        fontSize: "clamp(2rem, 5.5vw, 4.4rem)",
                        lineHeight: 1.05,
                        fontWeight: 700,
                        textWrap: "balance",
                    }}
                >
                    A helping hand
                    <br />
                    behind every post.
                </h1>

                {/* Icons cluster + arrow annotation — BELOW headline */}
                <div
                    ref={r2}
                    className="reveal mt-6 md:mt-8 flex items-end justify-center flex-wrap gap-2"
                >
                    <div className="flex items-center -space-x-1.5 md:-space-x-2">
                        {INLINE_PLATFORMS.map((slug, i) => (
                            <span
                                key={slug}
                                className="grid place-items-center w-8 h-8 md:w-11 md:h-11 bg-white rounded-lg md:rounded-xl border border-[#0B1120]/10 shadow-[0_6px_14px_-6px_rgba(11,17,32,0.18)] ring-1 ring-white"
                                style={{
                                    zIndex: 10 - i,
                                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 3}deg)`,
                                }}
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${slug}/0B1120`}
                                    alt=""
                                    className="w-4 h-4 md:w-5 md:h-5"
                                    loading="lazy"
                                />
                            </span>
                        ))}
                    </div>
                    <KamiBantuAnnotation />
                </div>

                {/* Sub copy */}
                <p
                    ref={r3}
                    className="reveal mt-6 md:mt-8 max-w-[560px] mx-auto text-base md:text-lg text-[#1D1D1F]/70 leading-relaxed"
                >
                    Studio produksi foto & video — UGC dan{" "}
                    <span className="text-[#0B1120] font-medium underline decoration-[#2A4FE0]/50 decoration-2 underline-offset-4">
                        commercial content
                    </span>{" "}
                    untuk brand mana pun.
                </p>

                {/* CTAs */}
                <div
                    ref={r4}
                    className="reveal mt-6 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        data-testid="hero-cta-primary"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2A4FE0] hover:bg-[#1F3DBF] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium transition-all"
                    >
                        Mulai Sekarang
                    </a>
                    <span className="text-xs md:text-sm text-[#1D1D1F]/50">
                        Aktif untuk brand di Indonesia
                    </span>
                </div>

                {/* Platforms marquee strip */}
                <div className="mt-12 md:mt-16">
                    <div className="text-xs text-[#1D1D1F]/40 mb-5">
                        Konten siap pakai untuk semua platform brand Anda
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap">
                                {[...MARQUEE_PLATFORMS, ...MARQUEE_PLATFORMS].map(
                                    (p, i) => (
                                        <img
                                            key={`${p.slug}-${i}`}
                                            src={`https://cdn.simpleicons.org/${p.slug}/0B1120`}
                                            alt={p.label}
                                            className="h-6 md:h-7 opacity-50 hover:opacity-100 transition-opacity"
                                            loading="lazy"
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F4F6FA] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F4F6FA] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};
