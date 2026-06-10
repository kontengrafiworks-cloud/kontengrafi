import { ArrowRight, Instagram, MessageCircle, Mail } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

const ASK_AI_PROMPT = encodeURIComponent(
    `Saya pemilik brand di Indonesia. Apakah Kontengrafi (studio konten UGC & commercial untuk Instagram, TikTok, dan e-commerce) cocok untuk skala saya? Apa keuntungannya dibandingkan hire freelance lepas? Apa yang harus saya coba dulu?`,
);

const AI_LINKS = [
    {
        slug: "chatgpt",
        cdn: "openai",
        label: "Ask ChatGPT",
        href: `https://chat.openai.com/?q=${ASK_AI_PROMPT}`,
    },
    {
        slug: "claude",
        cdn: "claude",
        label: "Ask Claude",
        href: `https://claude.ai/new?q=${ASK_AI_PROMPT}`,
    },
    {
        slug: "perplexity",
        cdn: "perplexity",
        label: "Ask Perplexity",
        href: `https://www.perplexity.ai/?q=${ASK_AI_PROMPT}`,
    },
];

export const FinalCta = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-20 md:py-32"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10 text-center">
                <div ref={r1} className="reveal">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(2.2rem, 6vw, 5rem)",
                            lineHeight: 1.02,
                            fontWeight: 400,
                        }}
                    >
                        Start working with our team.
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-[#1D1D1F]/65 max-w-[580px] mx-auto">
                        Chat di WhatsApp untuk konsultasi gratis 15 menit.
                        Tidak yakin Kontengrafi pas untuk brand Anda? Tanya AI
                        favorit Anda dulu.
                    </p>
                </div>

                <div
                    ref={r2}
                    className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <a
                        data-testid="final-cta-whatsapp"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2A4FE0] hover:bg-[#1F3DBF] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium transition-all"
                    >
                        <MessageCircle size={16} />
                        Chat WhatsApp
                        <ArrowRight size={16} />
                    </a>
                    <a
                        data-testid="final-cta-instagram"
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/30 text-[#0B1120] px-6 py-3.5 rounded-full text-sm md:text-base font-medium transition-all"
                    >
                        <Instagram size={16} />
                        Instagram
                    </a>
                    <a
                        data-testid="final-cta-email"
                        href={`mailto:${CONTACT.email}`}
                        className="inline-flex items-center gap-2 bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/30 text-[#0B1120] px-6 py-3.5 rounded-full text-sm md:text-base font-medium transition-all"
                    >
                        <Mail size={16} />
                        Email
                    </a>
                </div>

                {/* Ask AI sub-section — Invoko style */}
                <div className="mt-20 md:mt-28">
                    <h3
                        className="font-display tracking-tight text-[#0B1120]"
                        style={{
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: 400,
                        }}
                    >
                        Curious if Kontengrafi is right for you?
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#1D1D1F]/60 max-w-[540px] mx-auto">
                        Ask your favorite AI if Kontengrafi fits your
                        workflow, where it saves time, and what you should try
                        first.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        {AI_LINKS.map((a) => (
                            <a
                                key={a.slug}
                                data-testid={`ask-ai-${a.slug}`}
                                href={a.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/30 text-[#0B1120] px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${a.cdn}/0B1120`}
                                    alt=""
                                    className="w-4 h-4"
                                />
                                {a.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
