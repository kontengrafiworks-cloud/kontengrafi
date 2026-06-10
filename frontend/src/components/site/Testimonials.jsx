import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    const scrollRef = useRef(null);

    const scrollBy = (delta) => {
        scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
    };

    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-10 md:py-14 overflow-hidden"
        >
            <div className="overflow-hidden border-y border-[#0B1120]/8 py-4 mb-8 md:mb-10 bg-white">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...QUOTES, ...QUOTES].map((q, i) => (
                        <span
                            key={i}
                            className="text-base md:text-xl text-[#0B1120]/70 mx-5 md:mx-6 inline-flex items-center gap-5 md:gap-6 font-display"
                            style={{ fontWeight: 400 }}
                        >
                            "{q}"
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2A4FE0]" />
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8"
                >
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[640px]"
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 3rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Brand yang sudah berhenti pegang kamera.
                    </h2>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            data-testid="testimonials-prev"
                            onClick={() => scrollBy(-380)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            data-testid="testimonials-next"
                            onClick={() => scrollBy(380)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    data-testid="testimonials-track"
                    className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar"
                    style={{
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {FULL_TESTIMONIALS.map((t, idx) => (
                        <Card key={t.name} t={t} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ t, idx }) => {
    return (
        <article
            data-testid={`testimonial-card-${idx}`}
            className="shrink-0 snap-start bg-white border border-[#0B1120]/8 rounded-2xl p-6 md:p-7 flex flex-col justify-between hover:shadow-md transition-all duration-300 w-[85%] sm:w-[55%] md:w-[360px]"
        >
            <div>
                <Quote size={20} className="text-[#2A4FE0]/40 mb-3" />
                <p className="text-[15px] md:text-base leading-relaxed text-[#0B1120]">
                    {t.quote}
                </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0B1120]/8">
                <div className="text-sm font-semibold text-[#0B1120]">
                    {t.name}
                </div>
                <div className="text-xs text-[#1D1D1F]/55 mt-0.5">
                    {t.role}
                </div>
                <div className="mt-2 text-[11px] text-[#1D1D1F]/40">
                    {t.meta}
                </div>
            </div>
        </article>
    );
};
