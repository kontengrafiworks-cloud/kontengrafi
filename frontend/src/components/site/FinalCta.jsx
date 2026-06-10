import { ArrowRight, Instagram, MessageCircle, Mail } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { Pinwheel } from "@/lib/brand";
import { useReveal } from "@/lib/reveal";

// "Ask AI" prompt template — like Invoko's final CTA
const ASK_AI_PROMPT = encodeURIComponent(
    `Saya pemilik brand fashion / F&B di Indonesia. Apakah Kontengrafi (studio konten yang produksi foto & video untuk Instagram, TikTok, dan e-commerce) cocok untuk skala saya? Apa keuntungannya dibandingkan hire freelancer lepas? Apa yang harus saya coba dulu? Situs: https://kontengrafi.id`,
);

const AI_LINKS = [
    {
        slug: "chatgpt",
        label: "Tanya ChatGPT",
        href: `https://chat.openai.com/?q=${ASK_AI_PROMPT}`,
    },
    {
        slug: "claude",
        label: "Tanya Claude",
        href: `https://claude.ai/new?q=${ASK_AI_PROMPT}`,
    },
    {
        slug: "perplexity",
        label: "Tanya Perplexity",
        href: `https://www.perplexity.ai/?q=${ASK_AI_PROMPT}`,
    },
];

export const FinalCta = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Big primary CTA block */}
            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div className="relative bg-[#2A4FE0] text-white rounded-[40px] p-10 md:p-16 lg:p-20 overflow-hidden noise-overlay">
                    {/* Decorative pinwheels */}
                    <div className="absolute -top-16 -right-16 text-white/10 pointer-events-none">
                        <Pinwheel className="w-80 h-80 animate-spin-slow" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 text-white/8 pointer-events-none">
                        <Pinwheel className="w-48 h-48 animate-spin-slow [animation-direction:reverse]" />
                    </div>

                    <div className="relative text-center max-w-[820px] mx-auto">
                        <div
                            ref={r1}
                            className="reveal font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 mb-6"
                        >
                            ( Mulai hari ini )
                        </div>
                        <h2
                            ref={r2}
                            className="reveal font-display font-bold tracking-[-0.03em]"
                            style={{
                                fontSize: "clamp(2.2rem, 6vw, 4.6rem)",
                                lineHeight: 1.02,
                            }}
                        >
                            Mari mulai{" "}
                            <span className="font-serif-italic font-normal text-white/95">
                                bekerja
                            </span>{" "}
                            bersama tim kami.
                        </h2>
                        <p
                            ref={r3}
                            className="reveal mt-6 text-base md:text-lg text-white/80 max-w-[580px] mx-auto"
                        >
                            Chat di WhatsApp untuk konsultasi gratis 15 menit.
                            Tidak yakin? Tanya AI dulu kalau Kontengrafi cocok
                            untuk brand Anda.
                        </p>

                        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
                            <a
                                data-testid="final-cta-whatsapp"
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 bg-white text-[#14183A] hover:bg-[#14183A] hover:text-white px-6 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300"
                            >
                                <MessageCircle size={16} />
                                Chat WhatsApp
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </a>
                            <a
                                data-testid="final-cta-instagram"
                                href={CONTACT.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-sm md:text-base backdrop-blur transition-all duration-300"
                            >
                                <Instagram size={16} />
                                Instagram
                            </a>
                            <a
                                data-testid="final-cta-email"
                                href={`mailto:${CONTACT.email}`}
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-sm md:text-base backdrop-blur transition-all duration-300"
                            >
                                <Mail size={16} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ask AI sub-section */}
            <div className="max-w-[1180px] mx-auto px-6 md:px-10 mt-16 md:mt-20 text-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-[#14183A]">
                    Masih ragu Kontengrafi pas untuk brand Anda?
                </h3>
                <p className="mt-3 text-base text-[#14183A]/65 max-w-[540px] mx-auto">
                    Tanya AI favorit Anda apakah Kontengrafi cocok dengan
                    workflow Anda — kami siapkan prompt-nya.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    {AI_LINKS.map((a) => (
                        <a
                            key={a.slug}
                            data-testid={`ask-ai-${a.slug}`}
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white border border-[#14183A]/10 hover:border-[#14183A]/30 hover:shadow-md text-[#14183A] px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                        >
                            <img
                                src={`https://cdn.simpleicons.org/${a.slug === "chatgpt" ? "openai" : a.slug}/14183a`}
                                alt=""
                                className="w-4 h-4"
                            />
                            {a.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
