import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

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
                        Chat di WhatsApp untuk konsultasi gratis 15 menit —
                        kami bantu cari format konten yang pas untuk brand Anda.
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
            </div>
        </section>
    );
};
