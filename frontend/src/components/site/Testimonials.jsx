import { useReveal } from "@/lib/reveal";
import { PORTRAIT_AVATARS } from "@/lib/images";

const QUOTES = [
    "Konten bulanan kami yang dulu butuh 2 minggu sekarang cuma 2 hari.",
    "Engagement Instagram naik 3x sejak kami pakai Kontengrafi.",
    "Mereka tahu cara bicara dengan audiens fashion saya.",
    "Saya kira shooting-nya pakai budget 50 jutaan. Ternyata jauh di bawah.",
    "Foto menu baru langsung naik traffic ke GoFood kami.",
    "Brief jam 10 pagi, mockup feed siap sore.",
    "Tim paling efisien yang pernah saya kerjakan.",
    "Akhirnya bisa fokus jual, bukan pegang kamera.",
];

const FULL_TESTIMONIALS = [
    {
        quote:
            "Saya dictate brief sambil setir, kemudian Kontengrafi siapkan storyboard malam itu juga. Itu yang pertama.",
        name: "Sophie K.",
        role: "Founder · Soon Apparel",
        meta: "Brand Voice Sync + Approval Flow",
        img: PORTRAIT_AVATARS.female_1,
    },
    {
        quote:
            "Yang bikin saya nempel itu konsistensi — Kontengrafi pakai gaya brand kami persis, bahkan setelah 4 bulan.",
        name: "Marcus R.",
        role: "Marketing Lead · Aurelle Beauty",
        meta: "Shoot Day Access · Tiap bulan",
        img: PORTRAIT_AVATARS.male_1,
    },
    {
        quote:
            "Awalnya saya skeptis outsourcing konten. Tapi sekarang konten feed jadi tugas yang tidak pernah saya pikirkan lagi.",
        name: "Yuri T.",
        role: "Owner · Halaman Coffee",
        meta: "Early client · sejak Q1 2025",
        img: PORTRAIT_AVATARS.male_2,
    },
];

export const Testimonials = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 md:py-36 overflow-hidden"
        >
            {/* Marquee strip */}
            <div className="overflow-hidden border-y border-[#14183A]/8 py-5 mb-20 md:mb-28 bg-white/40">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...QUOTES, ...QUOTES].map((q, i) => (
                        <span
                            key={i}
                            className="font-serif-italic text-xl md:text-2xl text-[#14183A]/75 mx-6 inline-flex items-center gap-6"
                        >
                            "{q}"
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2A4FE0]" />
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-14 md:mb-20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2A4FE0] mb-5">
                        ( Testimoni )
                    </div>
                    <h2
                        className="font-display font-bold tracking-[-0.03em] text-[#14183A] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            lineHeight: 1.05,
                        }}
                    >
                        Apa kata mereka{" "}
                        <span className="font-serif-italic text-[#2A4FE0] font-normal">
                            yang sudah bekerja
                        </span>{" "}
                        dengan kami.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {FULL_TESTIMONIALS.map((t, idx) => (
                        <Card key={t.name} t={t} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ t, idx }) => {
    const ref = useReveal(idx * 120);
    return (
        <article
            ref={ref}
            data-testid={`testimonial-card-${idx}`}
            className="reveal bg-white border border-[#14183A]/8 rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[320px]"
        >
            <p className="font-serif-italic text-lg md:text-xl leading-snug text-[#14183A]">
                "{t.quote}"
            </p>
            <div className="mt-8">
                <div className="flex items-center gap-3 pt-5 border-t border-[#14183A]/8">
                    <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <div className="text-sm font-semibold text-[#14183A]">
                            {t.name}
                        </div>
                        <div className="text-[12px] text-[#14183A]/60">
                            {t.role}
                        </div>
                    </div>
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#14183A]/40">
                    {t.meta}
                </div>
            </div>
        </article>
    );
};
