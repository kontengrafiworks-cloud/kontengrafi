import { ArrowUpRight, MapPin } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

export const Hero = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen bg-[#0A1A4A] text-white overflow-hidden noise"
        >
            {/* Background image collage */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none">
                <img
                    src={FASHION_IMAGES.hero}
                    alt=""
                    className="col-span-7 row-span-6 col-start-6 w-full h-full object-cover opacity-50"
                />
                <div className="col-span-12 row-span-6 absolute inset-0 bg-gradient-to-r from-[#0A1A4A] via-[#0A1A4A]/85 to-[#0A1A4A]/10" />
                <div className="col-span-12 row-span-6 absolute inset-0 bg-gradient-to-t from-[#0A1A4A] to-transparent" />
            </div>

            {/* Top meta row */}
            <div className="relative pt-24 md:pt-28">
                <div
                    ref={r1}
                    className="reveal max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-mono text-white/60"
                >
                    <div className="flex items-center gap-2">
                        <MapPin size={12} />
                        Based in Indonesia
                    </div>
                    <div className="hidden md:block">
                        Next Generation Content Studio
                    </div>
                    <div>© 2026</div>
                </div>
            </div>

            {/* Massive headline */}
            <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 pt-12 md:pt-20">
                <h1
                    ref={r2}
                    className="reveal font-display font-black uppercase leading-[0.85] tracking-[-0.03em] text-white"
                    style={{
                        fontSize: "clamp(3rem, 12vw, 13rem)",
                    }}
                >
                    Next
                    <br />
                    Generation
                    <br />
                    <span className="text-[#3D7BFF]">Content</span>
                </h1>
            </div>

            {/* Bottom meta strip — Alisa Korsak style */}
            <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 mt-16 md:mt-24 pb-20">
                <div
                    ref={r3}
                    className="reveal grid grid-cols-12 gap-6 md:gap-10 items-end"
                >
                    {/* Serif italic name */}
                    <div className="col-span-12 md:col-span-3">
                        <div className="font-serif-italic text-2xl md:text-3xl tracking-wide text-white">
                            Kontengrafi
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                            (Content Studio)
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-12 md:col-span-6 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] leading-relaxed text-white/80">
                        Kontengrafi adalah studio konten yang berfokus pada
                        <span className="text-[#3D7BFF]"> fashion</span> &
                        <span className="text-[#3D7BFF]"> food/beverage</span>.
                        Kami memproduksi foto & video UGC dan komersial dengan
                        tempo cepat dan estetika sinematik untuk merek yang
                        berani.
                    </div>

                    {/* CTA */}
                    <div className="col-span-12 md:col-span-3 flex md:justify-end">
                        <a
                            data-testid="hero-cta-primary"
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-[#0047FF] hover:bg-white hover:text-[#0A1A4A] text-white px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-500"
                        >
                            Mulai Proyek
                            <ArrowUpRight
                                size={16}
                                className="group-hover:rotate-45 transition-transform duration-500"
                            />
                        </a>
                    </div>
                </div>

                {/* Side counter — like 01 02 03 in reference */}
                <div className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 flex-col gap-12 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                    <span className="text-white">01</span>
                    <span>02</span>
                    <span>03</span>
                </div>

                {/* Side image accent — small F&B image floating, top-right area */}
                <div className="hidden xl:block absolute right-14 -top-32 w-28 h-40 overflow-hidden border border-white/20 rotate-3">
                    <img
                        src={FNB_IMAGES.coffee_pour}
                        alt=""
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </div>
        </section>
    );
};
