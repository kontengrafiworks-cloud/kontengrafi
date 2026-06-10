import { Quote } from "lucide-react";
import { useReveal } from "@/lib/reveal";
import { PORTRAIT_AVATARS } from "@/lib/images";

const ITEMS = [
    {
        quote: "Konten dari Kontengrafi langsung naikkan kualitas feed kami. Hasilnya rapi, cepat, dan sesuai brief.",
        name: "Rizky Ardian",
        role: "Founder, Soon Apparel",
        img: PORTRAIT_AVATARS.male_1,
    },
    {
        quote: "Tim yang paling efisien yang pernah saya kerjakan. Brief jam 10 pagi, mockup siap sore harinya.",
        name: "Laras Pradipta",
        role: "Marketing Lead, Aurelle Beauty",
        img: PORTRAIT_AVATARS.female_1,
    },
    {
        quote: "Estetikanya konsisten sinematik. Klien-klien kami selalu kira shooting-nya pakai budget besar.",
        name: "Bayu Hartono",
        role: "Creative Director, Studio Halaman",
        img: PORTRAIT_AVATARS.male_2,
    },
];

export const Testimonials = () => {
    const rHead = useReveal(0);
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="py-24 md:py-32 bg-[#0A1A4A] text-white relative overflow-hidden noise"
        >
            <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">
                <div className="flex items-baseline gap-4 mb-10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3D7BFF]">
                        ( 04 ) Testimoni
                    </span>
                    <span className="flex-1 h-px bg-white/15" />
                </div>

                <div
                    ref={rHead}
                    className="reveal grid grid-cols-12 gap-6 md:gap-10 items-end mb-16"
                >
                    <h2
                        className="col-span-12 md:col-span-9 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-white"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
                    >
                        Kata
                        <br />
                        <span className="text-[#3D7BFF]">Mereka.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {ITEMS.map((t, idx) => (
                        <Card key={t.name} t={t} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ t, idx }) => {
    const ref = useReveal(idx * 150);
    return (
        <article
            ref={ref}
            data-testid={`testimonial-card-${idx}`}
            className="reveal border border-white/15 p-8 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/40 transition-all duration-500 min-h-[320px]"
        >
            <Quote size={28} className="text-[#3D7BFF]" />
            <p className="mt-6 font-serif-italic text-xl md:text-2xl leading-[1.3] text-white">
                “{t.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-5">
                <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover grayscale"
                />
                <div>
                    <div className="font-display font-bold uppercase text-sm tracking-tight text-white">
                        {t.name}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                        {t.role}
                    </div>
                </div>
            </div>
        </article>
    );
};
