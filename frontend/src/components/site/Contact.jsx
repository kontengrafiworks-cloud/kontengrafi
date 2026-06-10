import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

export const Contact = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(180);

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="py-24 md:py-32 bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div ref={r1} className="reveal">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#0047FF]">
                        ( 05 ) Hubungi Kami
                    </span>
                    <h2 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter text-slate-900 max-w-[1100px]">
                        Mari buat <span className="text-[#0047FF]">sesuatu</span>
                        <br />
                        yang berkesan.
                    </h2>
                </div>

                <div
                    ref={r2}
                    className="reveal mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                >
                    {/* WhatsApp Big CTA */}
                    <a
                        data-testid="contact-whatsapp-cta"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-[#0047FF] text-white p-10 md:p-14 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 hover:shadow-2xl shadow-[#0047FF]/30 transition-all duration-500"
                    >
                        <div className="flex items-start justify-between">
                            <MessageCircle size={36} />
                            <ArrowUpRight
                                size={36}
                                className="group-hover:rotate-45 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-[0.25em] font-bold text-white/70">
                                Chat langsung
                            </div>
                            <div className="mt-3 font-display font-black text-3xl md:text-5xl tracking-tight">
                                WhatsApp Kami
                            </div>
                            <div className="mt-2 text-white/80 text-base md:text-lg">
                                Respon cepat. Biasanya balas dalam &lt; 30 menit di
                                jam kerja.
                            </div>
                        </div>
                    </a>

                    {/* Socials & info */}
                    <div className="lg:col-span-4 flex flex-col gap-5">
                        <a
                            data-testid="contact-instagram"
                            href={CONTACT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900 rounded-3xl p-7 transition-all duration-500 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <span className="w-11 h-11 grid place-items-center rounded-2xl bg-white border border-slate-200 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                    <Instagram size={18} />
                                </span>
                                <div>
                                    <div className="text-xs uppercase tracking-wider font-semibold opacity-60">
                                        Instagram
                                    </div>
                                    <div className="font-display font-bold text-lg">
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
                            className="group bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900 rounded-3xl p-7 transition-all duration-500 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <span className="w-11 h-11 grid place-items-center rounded-2xl bg-white border border-slate-200 group-hover:bg-white/10 group-hover:border-white/20 transition-all font-display font-black text-sm">
                                    Tk
                                </span>
                                <div>
                                    <div className="text-xs uppercase tracking-wider font-semibold opacity-60">
                                        TikTok
                                    </div>
                                    <div className="font-display font-bold text-lg">
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
                            className="group bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900 rounded-3xl p-7 transition-all duration-500 flex items-center justify-between"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-wider font-semibold opacity-60">
                                    Email
                                </div>
                                <div className="font-display font-bold text-lg">
                                    {CONTACT.email}
                                </div>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="group-hover:rotate-45 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
