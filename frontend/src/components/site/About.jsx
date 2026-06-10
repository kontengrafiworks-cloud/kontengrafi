import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

export const About = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);

    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-32 bg-white overflow-hidden"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">
                {/* Section label */}
                <div
                    ref={r1}
                    className="reveal flex items-baseline gap-4 mb-16"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047FF]">
                        ( 01 ) Cerita Kami
                    </span>
                    <span className="flex-1 h-px bg-[#0A1A4A]/15" />
                </div>

                <div className="grid grid-cols-12 gap-6 md:gap-10">
                    {/* Left — Serif italic title */}
                    <div ref={r2} className="reveal col-span-12 md:col-span-5">
                        <h2 className="font-serif-italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#0A1A4A] tracking-tight">
                            Visual <br />
                            Identity.
                        </h2>
                        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] leading-relaxed text-[#0A1A4A]/70 space-y-4 max-w-sm">
                            <p>
                                Kami melakukan riset visual untuk setiap brand
                                — memahami siapa audiens, bagaimana mereka
                                berinteraksi, dan apa yang membuat mereka
                                kembali.
                            </p>
                            <p>
                                Insight tersebut menjadi pondasi setiap konten
                                yang kami produksi — bersih, sinematik, dan
                                punya karakter.
                            </p>
                        </div>
                    </div>

                    {/* Middle — Vertical image stack */}
                    <div
                        ref={r3}
                        className="reveal col-span-6 md:col-span-3 flex flex-col gap-3"
                    >
                        <img
                            src={FASHION_IMAGES.editorial_1}
                            alt="Fashion editorial"
                            className="w-full aspect-[3/4] object-cover"
                            loading="lazy"
                        />
                        <img
                            src={FNB_IMAGES.plated_food}
                            alt="Plated food"
                            className="w-full aspect-[3/4] object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Right — Annotation list */}
                    <div className="col-span-6 md:col-span-4 flex flex-col gap-8 md:pt-10">
                        {[
                            {
                                k: "Noise Texture",
                                v: "Tekstur film grain untuk nuansa sinematik dan tactile.",
                            },
                            {
                                k: "Trajectory",
                                v: "Komposisi yang mengarahkan mata — bukan sekadar pretty.",
                            },
                            {
                                k: "Dynamic Shapes",
                                v: "Permainan bentuk & framing yang menambah energi visual.",
                            },
                        ].map((it) => (
                            <Annotation key={it.k} k={it.k} v={it.v} />
                        ))}
                    </div>
                </div>

                {/* Decorative svg curves */}
                <svg
                    className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
                    width="160"
                    height="320"
                    viewBox="0 0 160 320"
                    fill="none"
                >
                    <path
                        d="M10 10 Q 80 80, 150 60 T 60 200 T 140 310"
                        stroke="#0047FF"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                    />
                </svg>
            </div>
        </section>
    );
};

const Annotation = ({ k, v }) => {
    const ref = useReveal(120);
    return (
        <div ref={ref} className="reveal">
            <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-xs uppercase tracking-wider text-[#0A1A4A]">
                    {k}
                </span>
                <span className="flex-1 h-px border-t border-dashed border-[#0A1A4A]/30" />
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-[#0A1A4A]/60">
                {v}
            </p>
        </div>
    );
};
