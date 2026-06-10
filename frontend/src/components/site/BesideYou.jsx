import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

// Invoko-style: "An AI helper beside you" — annotated bento grid
const ANNOTATIONS = [
    {
        pos: "top-[8%] left-[6%]",
        label: "ask",
        desc: "dari brief Anda yang sederhana",
        underline: false,
    },
    {
        pos: "top-[8%] right-[8%]",
        label: "walk through",
        desc: "kami pandu setiap step",
        underline: true,
    },
    {
        pos: "top-[42%] left-[10%]",
        label: "quick reply",
        desc: "respon brief dalam 30 menit",
        underline: true,
    },
    {
        pos: "top-[42%] right-[8%]",
        label: "handoff",
        desc: "tim kami yang eksekusi",
        underline: false,
    },
    {
        pos: "bottom-[14%] left-[8%]",
        label: "personal helper",
        desc: "menyimpan brand voice Anda",
        underline: false,
    },
    {
        pos: "bottom-[14%] right-[6%]",
        label: "4x faster",
        desc: "dibanding hire freelance lepas",
        underline: true,
    },
];

export const BesideYou = () => {
    const rTitle = useReveal(0);

    return (
        <section
            id="beside"
            data-testid="beside-section"
            className="relative py-20 md:py-32"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
                    {/* Left title */}
                    <div ref={rTitle} className="reveal col-span-12 md:col-span-4">
                        <h2
                            className="font-display tracking-[-0.03em] text-[#0B1120]"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                lineHeight: 1.02,
                                fontWeight: 400,
                            }}
                        >
                            A creative team
                            <br />
                            beside you.
                        </h2>
                        <p className="mt-5 text-base text-[#1D1D1F]/65 leading-relaxed max-w-sm">
                            Kontengrafi mulai dari brand, audiens, dan apa
                            yang sedang Anda kerjakan. Lalu kami siapkan{" "}
                            <span className="underline decoration-[#2A4FE0]/40 decoration-2 underline-offset-2">
                                konten yang siap tayang
                            </span>{" "}
                            setiap minggu.
                        </p>
                    </div>

                    {/* Right: bento grid with mockup + annotations */}
                    <div className="col-span-12 md:col-span-8 relative">
                        <div className="relative aspect-[5/4] md:aspect-[16/10] bg-bento-grid rounded-2xl border border-[#0B1120]/8 overflow-hidden">
                            {/* Browser/feed mock in center */}
                            <div className="absolute inset-[18%] bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(11,17,32,0.25)] border border-[#0B1120]/8 overflow-hidden">
                                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#0B1120]/8">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                                    <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                                    <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                                    <span className="ml-2 text-[10px] text-[#0B1120]/40">
                                        @brandanda — feed
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

                            {/* Annotations */}
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
            className={`reveal absolute ${pos} max-w-[140px] hidden md:block`}
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
