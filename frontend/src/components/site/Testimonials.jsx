import { Quote } from "lucide-react";
import { useReveal } from "@/lib/reveal";

const ITEMS = [
    {
        quote: "Konten dari Kontengrafi langsung naikkan kualitas feed kami. Hasilnya rapi, cepat, dan sesuai brief.",
        name: "Rizky Ardian",
        role: "Founder, Soon Apparel",
        img: "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg",
    },
    {
        quote: "Tim yang paling efisien yang pernah saya kerjakan. Brief jam 10 pagi, mockup siap sore harinya.",
        name: "Laras Pradipta",
        role: "Marketing Lead, Aurelle Beauty",
        img: "https://images.pexels.com/photos/12931653/pexels-photo-12931653.jpeg",
    },
    {
        quote: "Estetikanya konsisten sinematik. Klien-klien kami selalu kira shooting-nya pakai budget besar.",
        name: "Bayu Hartono",
        role: "Creative Director, Studio Halaman",
        img: "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg",
    },
];

export const Testimonials = () => {
    const rHead = useReveal(0);
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden"
        >
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#0047FF]/30 rounded-full blur-3xl" />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#7FA8FF]">
                            ( 04 ) Testimoni
                        </span>
                        <h2 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] tracking-tight text-white max-w-[800px]">
                            Kata mereka yang sudah{" "}
                            <span className="text-[#7FA8FF]">bekerja</span> dengan kami.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
            className="reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-500"
        >
            <Quote size={32} className="text-[#0047FF]" />
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed font-display font-medium">
                “{t.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
                <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/60">{t.role}</div>
                </div>
            </div>
        </article>
    );
};
