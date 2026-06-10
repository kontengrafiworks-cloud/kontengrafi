import { waLink } from "@/lib/contacts";
import { BRAND, NudgeArrow, Pinwheel } from "@/lib/brand";
import { useReveal } from "@/lib/reveal";

// Simple platform icon set
const PLATFORMS = [
    { slug: "instagram", label: "Instagram" },
    { slug: "tiktok", label: "TikTok" },
    { slug: "youtube", label: "YouTube" },
    { slug: "pinterest", label: "Pinterest" },
    { slug: "facebook", label: "Facebook" },
    { slug: "x", label: "X" },
    { slug: "linkedin", label: "LinkedIn" },
    { slug: "spotify", label: "Spotify" },
    { slug: "shopee", label: "Shopee" },
    { slug: "whatsapp", label: "WhatsApp" },
];

export const Hero = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);
    const r4 = useReveal(450);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden"
        >
            {/* Subtle dotted grid background */}
            <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

            <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 text-center">
                {/* Massive Invoko-style headline (Inter, weight 400) */}
                <h1
                    ref={r1}
                    className="reveal font-display tracking-[-0.035em] text-[#0B1120]"
                    style={{
                        fontSize: "clamp(2.4rem, 8.5vw, 7rem)",
                        lineHeight: 1.02,
                        fontWeight: 400,
                    }}
                >
                    A helping hand
                    <br className="hidden md:block" />
                    <span className="relative inline-block">
                        behind every p
                        <span className="relative inline-block align-baseline mx-[-0.05em]">
                            o
                            {/* Inline pinwheel overlap (static, no spin) */}
                            <Pinwheel
                                className="absolute inset-0 m-auto w-[0.7em] h-[0.7em] text-[#2A4FE0]"
                                title=""
                            />
                        </span>
                        st
                    </span>
                    .
                </h1>

                {/* Sketch arrow with caption (Invoko-style) */}
                <div
                    ref={r2}
                    className="reveal relative mx-auto mt-6 md:mt-8 w-fit"
                >
                    <div className="relative flex items-center justify-center gap-3">
                        <NudgeArrow className="w-20 h-12 text-[#0B1120]/50 -mr-2" />
                        <span
                            className="text-[#0B1120]/55 text-base md:text-lg"
                            style={{
                                fontFamily:
                                    "'Caveat', 'Bradley Hand', cursive",
                            }}
                        >
                            kami bantu
                        </span>
                    </div>
                </div>

                {/* Sub copy */}
                <p
                    ref={r3}
                    className="reveal mt-12 md:mt-16 max-w-[640px] mx-auto text-base md:text-lg text-[#1D1D1F]/70 leading-relaxed"
                >
                    Kontengrafi adalah studio konten yang memproduksi{" "}
                    <span className="text-[#0B1120] font-medium underline decoration-[#2A4FE0]/40 decoration-2 underline-offset-4">
                        UGC
                    </span>{" "}
                    dan{" "}
                    <span className="text-[#0B1120] font-medium underline decoration-[#2A4FE0]/40 decoration-2 underline-offset-4">
                        commercial content
                    </span>{" "}
                    untuk brand mana pun — siap tayang setiap minggu, tanpa
                    Anda harus pegang kamera.
                </p>

                {/* CTAs */}
                <div
                    ref={r4}
                    className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
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

                {/* Platforms strip — minimal, Invoko-style */}
                <div className="mt-24 md:mt-32">
                    <div className="text-xs text-[#1D1D1F]/40 mb-6">
                        Hadir di semua platform untuk konten brand Anda
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap">
                                {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
                                    <img
                                        key={`${p.slug}-${i}`}
                                        src={`https://cdn.simpleicons.org/${p.slug}/0B1120`}
                                        alt={p.label}
                                        className="h-6 md:h-7 opacity-50 hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F4F6FA] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F4F6FA] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Load Caveat for handwritten note */}
            <link
                href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
        </section>
    );
};
