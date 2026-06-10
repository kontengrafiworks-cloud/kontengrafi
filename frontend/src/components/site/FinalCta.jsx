import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

const ASK_AI_PROMPT = encodeURIComponent(
    `Saya pemilik brand di Indonesia. Apakah Kontengrafi (studio produksi foto & video UGC + commercial content untuk berbagai brand) cocok untuk skala saya? Apa keuntungannya dibandingkan hire freelance lepas atau bikin sendiri? Apa yang harus saya coba dulu?`,
);

const AI_LINKS = [
    {
        slug: "chatgpt",
        cdn: "openai",
        label: "Ask ChatGPT",
        href: "https://chat.openai.com/",
    },
];

export const FinalCta = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10 text-center">
                <div ref={r1} className="reveal">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)",
                            lineHeight: 1.02,
                            fontWeight: 400,
                        }}
                    >
                        Mulai produksi konten Anda hari ini.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-[#1D1D1F]/65 max-w-[580px] mx-auto">
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
                </div>

                {/* Ask AI sub-section — Invoko style */}
                <div className="mt-14 md:mt-20">
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
                        production needs, where it saves time, and what you
                        should try first.
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
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    aria-hidden
                                >
                                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" />
                                </svg>
                                {a.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
