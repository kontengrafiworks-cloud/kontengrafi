import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

const ANNOTATIONS = [
    {
        pos: "top-[6%] left-[2%]",
        label: "brief sederhana",
        desc: "cukup kirim brief",
        underline: false,
    },
    {
        pos: "top-[6%] right-[2%]",
        label: "shotlist lengkap",
        desc: "siap dieksekusi tim",
        underline: true,
    },
    {
        pos: "bottom-[6%] left-[2%]",
        label: "brand voice",
        desc: "konsisten setiap AI shoot",
        underline: false,
    },
    {
        pos: "bottom-[6%] right-[2%]",
        label: "file siap pakai",
        desc: "multi-rasio per platform",
        underline: true,
    },
];

export const BesideYou = () => {
    const rTitle = useReveal(0);

    return (
        <section
            id="beside"
            data-testid="beside-section"
            className="relative py-10 md:py-14"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
                    <div ref={rTitle} className="reveal col-span-12 md:col-span-4">
                        <h2
                            className="font-display tracking-[-0.03em] text-[#0B1120]"
                            style={{
                                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                                lineHeight: 1.04,
                                fontWeight: 400,
                            }}
                        >
                            Tim produksi yang berdiri di samping Anda.
                        </h2>
                        <p className="mt-4 text-base text-[#1D1D1F]/65 leading-relaxed max-w-sm">
                            Kontengrafi mengerjakan{" "}
                            <span className="underline decoration-[#2A4FE0]/40 decoration-2 underline-offset-2">
                                AI produksi konten
                            </span>{" "}
                            — dari brief, AI shoot, sampai file siap upload —
                            sehingga Anda fokus mengelola brand, bukan
                            mengelola produksi.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-8 relative">
                        <div className="relative aspect-[5/4] md:aspect-[16/10] bg-bento-grid rounded-2xl border border-[#0B1120]/8 overflow-hidden">
                            <div className="absolute inset-y-[14%] inset-x-[26%] bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(11,17,32,0.25)] border border-[#0B1120]/8 overflow-hidden">
                                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#0B1120]/8">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                                    <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                                    <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                                    <span className="ml-2 text-[10px] text-[#0B1120]/40">
                                        konten / brand-anda / siap-upload
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-0.5 p-0.5">
                                    {[
                                        FASHION_IMAGES.editorial_1,
                                        FNB_IMAGES.coffee_pour,
                                        FASHION_IMAGES.streetwear,
                                        FNB_IMAGES.plated_food,
                                        FASHION_IMAGES.editorial_2,
                                        FNB_IMAGES.cocktail,
                                    ].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt=""
                                            loading="lazy"
                                            className="aspect-square object-cover"
                                        />
                                    ))}
                                </div>
                            </div>

                            {ANNOTATIONS.map((a, i) => (
                                <Annotation key={i} {...a} idx={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Annotation = ({ pos, label, desc, underline, idx }) => {
    const ref = useReveal(idx * 80);
    return (
        <div
            ref={ref}
            className={`reveal absolute ${pos} max-w-[120px] hidden md:block`}
        >
            <div
                className={`font-medium text-sm text-[#0B1120] ${underline ? "underline decoration-[#0B1120]/70 decoration-1 underline-offset-2" : ""}`}
            >
                {label}
            </div>
            <div className="mt-0.5 text-[11px] text-[#1D1D1F]/55 leading-snug">
                {desc}
            </div>
        </div>
    );
};
