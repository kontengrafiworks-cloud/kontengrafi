import { ArrowUpRight, Play } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

export const Hero = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);
    const r4 = useReveal(450);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        >
            {/* Subtle grid backdrop */}
            <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#0047FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Eyebrow */}
                <div
                    ref={r1}
                    className="reveal flex items-center gap-3 mb-8"
                >
                    <span className="w-8 h-px bg-[#0047FF]" />
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#0047FF]">
                        Studio Konten · Est. 2025
                    </span>
                </div>

                {/* Main heading */}
                <h1
                    ref={r2}
                    className="reveal font-display font-black text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.92] tracking-tighter text-slate-900 max-w-[1100px]"
                >
                    Next generation
                    <br />
                    <span className="inline-flex items-baseline gap-3 md:gap-5 flex-wrap">
                        <span className="text-[#0047FF]">content</span>
                        <span className="inline-block w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#0047FF] animate-pulse" />
                        untuk merek
                    </span>
                    <br />
                    yang berani.
                </h1>

                {/* Sub-grid */}
                <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
                    <div
                        ref={r3}
                        className="reveal md:col-span-6 lg:col-span-5"
                    >
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Kontengrafi memproduksi foto & video UGC dan
                            komersial dengan tempo yang lebih cepat, hasil
                            sinematik, dan biaya yang masuk akal — siap tayang
                            untuk kampanye Anda berikutnya.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                data-testid="hero-cta-primary"
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0047FF] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#0036CC] hover:-translate-y-0.5 hover:shadow-xl shadow-[#0047FF]/30 transition-all duration-300 group"
                            >
                                Mulai Proyek Anda
                                <ArrowUpRight
                                    size={18}
                                    className="group-hover:rotate-45 transition-transform duration-300"
                                />
                            </a>
                            <a
                                data-testid="hero-cta-secondary"
                                href="#portfolio"
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-slate-900 border border-slate-300 hover:border-slate-900 transition-all duration-300"
                            >
                                <span className="w-6 h-6 rounded-full bg-slate-900 grid place-items-center text-white">
                                    <Play size={10} fill="white" />
                                </span>
                                Lihat Karya
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div
                        ref={r4}
                        className="reveal md:col-span-6 lg:col-span-7 lg:col-start-7 grid grid-cols-3 gap-6 md:gap-10 lg:border-l lg:border-slate-200 lg:pl-12"
                    >
                        {[
                            { v: "120+", l: "Konten terkirim" },
                            { v: "48 jam", l: "Rata-rata pengerjaan" },
                            { v: "30+", l: "Brand bekerja sama" },
                        ].map((s) => (
                            <div key={s.l}>
                                <div className="font-display font-black text-3xl md:text-5xl text-slate-900 tracking-tighter">
                                    {s.v}
                                </div>
                                <div className="mt-2 text-xs md:text-sm text-slate-500 uppercase tracking-wider">
                                    {s.l}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
