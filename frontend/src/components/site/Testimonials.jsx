import { useReveal } from "@/lib/reveal";
import { PORTRAIT_AVATARS } from "@/lib/images";

const QUOTES = [
    "Konten bulanan kami yang dulu butuh 2 minggu sekarang cuma 2 hari.",
    "Engagement Instagram naik 3x sejak kami pakai Kontengrafi.",
    "Mereka tahu cara bicara dengan audiens saya.",
    "Saya kira shooting-nya pakai budget 50 jutaan. Ternyata jauh di bawah.",
    "UGC dari mereka langsung naikkan conversion ads kami.",
    "Brief jam 10 pagi, mockup feed siap sore.",
    "Tim paling efisien yang pernah saya kerjakan.",
    "Akhirnya bisa fokus jual, bukan pegang kamera.",
];

const FULL_TESTIMONIALS = [
    {
        quote:
            "Saya kirim brief lewat WhatsApp dan Kontengrafi siapkan storyboard malam itu juga. Itu yang pertama.",
        name: "Sophie K.",
        role: "Founder · Brand DTC",
        meta: "Brand Voice + Approval Flow",
        img: PORTRAIT_AVATARS.female_1,
    },
    {
        quote:
            "Yang bikin saya nempel itu konsistensi — Kontengrafi pakai gaya brand kami persis, bahkan setelah 4 bulan.",
        name: "Marcus R.",
        role: "Marketing Lead · SaaS",
        meta: "Shoot Access · Tiap bulan",
        img: PORTRAIT_AVATARS.male_1,
    },
    {
        quote:
            "Awalnya saya skeptis outsourcing konten. Tapi sekarang konten feed jadi tugas yang tidak pernah saya pikirkan lagi.",
        name: "Yuri T.",
        role: "Owner · UMKM",
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
            className="relative py-20 md:py-32 overflow-hidden"
        >
            {/* Marquee strip */}
            <div className="overflow-hidden border-y border-[#0B1120]/8 py-5 mb-16 md:mb-20 bg-white">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...QUOTES, ...QUOTES].map((q, i) => (
                        <span
                            key={i}
                            className="text-lg md:text-xl text-[#0B1120]/70 mx-6 inline-flex items-center gap-6 font-display"
                            style={{ fontWeight: 400 }}
                        >
                            "{q}"
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2A4FE0]" />
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-14">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Apa kata mereka yang sudah bekerja dengan kami.
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
            className="reveal bg-white border border-[#0B1120]/8 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[300px]"
        >
            <p className="text-base md:text-lg leading-relaxed text-[#0B1120]">
                "{t.quote}"
            </p>
            <div className="mt-8 pt-5 border-t border-[#0B1120]/8">
                <div className="flex items-center gap-3">
                    <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <div className="text-sm font-semibold text-[#0B1120]">
                            {t.name}
                        </div>
                        <div className="text-xs text-[#1D1D1F]/55">
                            {t.role}
                        </div>
                    </div>
                </div>
                <div className="mt-3 text-[11px] text-[#1D1D1F]/40">
                    {t.meta}
                </div>
            </div>
        </article>
    );
};
