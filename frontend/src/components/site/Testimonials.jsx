import { useReveal } from "@/lib/reveal";

const QUOTES = [
    "Stok konten kami sekarang penuh 3 bulan ke depan.",
    "Konten bulanan yang dulu butuh 2 minggu sekarang 2 hari.",
    "File final-nya rapi dan tinggal upload.",
    "Saya kira shooting-nya pakai budget 50 jutaan. Ternyata jauh di bawah.",
    "UGC mereka jadi materi iklan favorit tim ads kami.",
    "Brief jam 10 pagi, mockup feed siap sore.",
    "Tim paling efisien yang pernah saya kerjakan.",
    "Akhirnya fokus jual, bukan pegang kamera.",
];

const FULL_TESTIMONIALS = [
    {
        quote:
            "Hasil videonya bagus, saya suka — nggak pusing-pusing stok konten lagi.",
        name: "Lavish",
        role: "Brand",
        meta: "Commercial · UGC",
    },
    {
        quote:
            "Saya males bikin video untuk affiliate, jadi ngestoknya dari Kontengrafi aja.",
        name: "Dinda",
        role: "Affiliator",
        meta: "UGC · Tiap minggu",
    },
    {
        quote:
            "Pengerjaannya cepet sih, apalagi saya distributor — jadi ngerasa nggak usah ribet bikin konten.",
        name: "Kafamilk",
        role: "Brand",
        meta: "Commercial · Volume content",
    },
];

export const Testimonials = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-14 md:py-20 overflow-hidden"
        >
            <div className="overflow-hidden border-y border-[#0B1120]/8 py-5 mb-12 md:mb-16 bg-white">
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
                <div ref={rHead} className="reveal text-center mb-10">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Brand yang sudah berhenti pegang kamera.
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
            <div className="mt-7 pt-5 border-t border-[#0B1120]/8">
                <div className="text-sm font-semibold text-[#0B1120]">
                    {t.name}
                </div>
                <div className="text-xs text-[#1D1D1F]/55 mt-0.5">
                    {t.role}
                </div>
                <div className="mt-3 text-[11px] text-[#1D1D1F]/40">
                    {t.meta}
                </div>
            </div>
        </article>
    );
};
