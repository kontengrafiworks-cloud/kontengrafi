import { ArrowUpRight, Instagram, MessageCircle, Mail } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

export const Contact = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="py-24 md:py-32 bg-white relative overflow-hidden"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">
                <div className="flex items-baseline gap-4 mb-10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047FF]">
                        ( 05 ) Hubungi Kami
                    </span>
                    <span className="flex-1 h-px bg-[#0A1A4A]/15" />
                </div>

                <div ref={r1} className="reveal">
                    <h2
                        className="font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#0A1A4A]"
                        style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
                    >
                        Let's
                        <br />
                        <span className="text-[#0047FF]">Make</span>
                        <br />
                        Something.
                    </h2>
                </div>

                <div
                    ref={r2}
                    className="reveal mt-16 grid grid-cols-12 gap-4 md:gap-5"
                >
                    {/* WhatsApp Big CTA */}
                    <a
                        data-testid="contact-whatsapp-cta"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-12 lg:col-span-8 group relative overflow-hidden bg-[#0047FF] text-white p-8 md:p-12 flex flex-col justify-between min-h-[340px] hover:bg-[#0036CC] transition-all duration-500"
                    >
                        <div className="flex items-start justify-between">
                            <MessageCircle size={32} />
                            <ArrowUpRight
                                size={36}
                                className="group-hover:rotate-45 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                                Chat langsung — respon &lt; 30 menit
                            </div>
                            <div
                                className="mt-3 font-display font-black uppercase leading-[0.9] tracking-[-0.02em]"
                                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                            >
                                WhatsApp
                                <br />
                                Kami.
                            </div>
                        </div>
                    </a>

                    {/* Socials & info */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-5">
                        <a
                            data-testid="contact-instagram"
                            href={CONTACT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-[#0A1A4A] text-white p-6 md:p-8 hover:bg-[#0F2A6B] transition-all duration-500 flex items-center justify-between flex-1"
                        >
                            <div className="flex items-center gap-4">
                                <Instagram size={22} />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                                        Instagram
                                    </div>
                                    <div className="font-display font-black uppercase text-xl tracking-tight">
                                        @kontengrafi
                                    </div>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="group-hover:rotate-45 transition-transform duration-300"
                            />
                        </a>

                        <a
                            data-testid="contact-tiktok"
                            href={CONTACT.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-[#0A1A4A] text-white p-6 md:p-8 hover:bg-[#0F2A6B] transition-all duration-500 flex items-center justify-between flex-1"
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-display font-black uppercase text-lg">
                                    TT
                                </span>
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                                        TikTok
                                    </div>
                                    <div className="font-display font-black uppercase text-xl tracking-tight">
                                        @kontengrafi
                                    </div>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="group-hover:rotate-45 transition-transform duration-300"
                            />
                        </a>

                        <a
                            data-testid="contact-email"
                            href={`mailto:${CONTACT.email}`}
                            className="group border border-[#0A1A4A]/20 p-6 md:p-8 hover:border-[#0A1A4A] transition-all duration-500 flex items-center justify-between flex-1"
                        >
                            <div className="flex items-center gap-4">
                                <Mail size={20} className="text-[#0A1A4A]" />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A1A4A]/50">
                                        Email
                                    </div>
                                    <div className="font-display font-black uppercase text-sm md:text-base tracking-tight text-[#0A1A4A]">
                                        {CONTACT.email}
                                    </div>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="text-[#0A1A4A] group-hover:rotate-45 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
