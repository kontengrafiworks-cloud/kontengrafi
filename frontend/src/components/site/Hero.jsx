import { waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

// Platform icons sandwiched inline within the headline (Invoko-style)
const INLINE_PLATFORMS = [
    "instagram",
    "tiktok",
    "youtube",
    "pinterest",
    "facebook",
    "x",
    "shopee",
    "spotify",
];

const MARQUEE_PLATFORMS = [
    { slug: "instagram", label: "Instagram" },
    { slug: "tiktok", label: "TikTok" },
    { slug: "youtube", label: "YouTube" },
    { slug: "pinterest", label: "Pinterest" },
    { slug: "facebook", label: "Facebook" },
    { slug: "x", label: "X" },
    { slug: "spotify", label: "Spotify" },
    { slug: "shopee", label: "Shopee" },
    { slug: "whatsapp", label: "WhatsApp" },
    { slug: "googlechrome", label: "Chrome" },
];

// Hand-drawn arrow pointing LEFT at the icons (kami bantu = "we help [these platforms]")
const KamiBantuAnnotation = () => (
    <span className="inline-flex items-center gap-1 align-middle ml-1" aria-hidden>
        <svg
            width="38"
            height="34"
            viewBox="0 0 38 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0B1120]/55 inline-block"
        >
            <path d="M 34 28 C 24 26, 14 22, 6 12" />
            <path d="M 4 16 L 6 8 L 12 12" />
        </svg>
        <span
            className="text-base md:text-xl text-[#0B1120]/65 leading-none"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
        >
            kami bantu
        </span>
    </span>
);

export const Hero = () => {
    const r1 = useReveal(0);
    const r1b = useReveal(120);
    const r1c = useReveal(240);
    const r2 = useReveal(360);
    const r3 = useReveal(480);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
        >
            {/* Subtle dotted grid background */}
            <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

            <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
                {/* Massive Invoko-style headline with inline icons */}
                <h1
                    ref={r1}
                    className="reveal font-display tracking-[-0.035em] text-[#0B1120]"
                    style={{
                        fontSize: "clamp(2.4rem, 8.5vw, 7rem)",
                        lineHeight: 1.04,
                        fontWeight: 400,
                    }}
                >
                    A helping hand
                </h1>

                {/* Decorative icons row between headline lines (Invoko-style) */}
                <div
                    ref={r1b}
                    className="reveal relative my-4 md:my-6 flex items-center justify-center gap-3 md:gap-4"
                >
                    <div className="flex items-center -space-x-2 md:-space-x-3">
                        {INLINE_PLATFORMS.map((slug, i) => (
                            <span
                                key={slug}
                                className="grid place-items-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl border border-[#0B1120]/10 shadow-[0_8px_20px_-8px_rgba(11,17,32,0.18)] ring-1 ring-white"
                                style={{
                                    zIndex: 10 - i,
                                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 3}deg)`,
                                }}
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${slug}/0B1120`}
                                    alt=""
                                    className="w-5 h-5 md:w-7 md:h-7"
                                    loading="lazy"
                                />
                            </span>
                        ))}
                    </div>
                    <KamiBantuAnnotation />
                </div>

                <h1
                    ref={r1c}
                    className="reveal font-display tracking-[-0.035em] text-[#0B1120]"
                    style={{
                        fontSize: "clamp(2.4rem, 8.5vw, 7rem)",
                        lineHeight: 1.04,
                        fontWeight: 400,
                    }}
                >
                    behind every post.
                </h1>

                {/* Sub copy */}
                <p
                    ref={r2}
                    className="reveal mt-12 md:mt-16 max-w-[640px] mx-auto text-base md:text-lg text-[#1D1D1F]/70 leading-relaxed"
                >
                    Kontengrafi adalah studio konten yang memproduksi{" "}
                    <span className="text-[#0B1120] font-medium underline decoration-[#2A4FE0]/50 decoration-2 underline-offset-4">
                        UGC
                    </span>{" "}
                    dan{" "}
                    <span className="text-[#0B1120] font-medium underline decoration-[#2A4FE0]/50 decoration-2 underline-offset-4">
                        commercial content
                    </span>{" "}
                    untuk brand mana pun — siap tayang setiap minggu, tanpa
                    Anda harus pegang kamera.
                </p>

                {/* CTAs */}
                <div
                    ref={r3}
                    className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
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

                {/* Platforms marquee strip — minimal, Invoko-style */}
                <div className="mt-24 md:mt-32">
                    <div className="text-xs text-[#1D1D1F]/40 mb-6">
                        Hadir di semua platform untuk konten brand Anda
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
