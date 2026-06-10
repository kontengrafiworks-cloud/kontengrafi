import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

// Section: "Beside every brand" — mimics Invoko's "An AI helper beside you"
export const BesideYou = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);

    return (
        <section
            id="beside"
            data-testid="beside-section"
            className="relative py-24 md:py-36 overflow-hidden"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10 text-center">
                <h2
                    ref={r1}
                    className="reveal font-display font-bold tracking-[-0.03em] text-[#14183A]"
                    style={{
                        fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                        lineHeight: 1.05,
                    }}
                >
                    A creative team{" "}
                    <span className="font-serif-italic text-[#2A4FE0] font-normal">
                        beside you
                    </span>
                    .
                </h2>
                <p
                    ref={r2}
                    className="reveal mt-5 max-w-[620px] mx-auto text-base md:text-lg text-[#14183A]/70 leading-relaxed"
                >
                    Kami mulai dari brand, audiens, dan apa yang sedang
                    Anda kerjakan. Lalu kami bantu menyiapkan konten yang
                    siap tayang setiap minggu — tanpa Anda harus pegang
                    kamera.
                </p>
            </div>

            {/* Phone mockup with feed posts */}
            <div className="mt-16 md:mt-20 max-w-[1180px] mx-auto px-6 md:px-10">
                <div className="relative mx-auto max-w-[920px]">
                    {/* Glow */}
                    <div className="absolute inset-0 -translate-y-6 bg-[#2A4FE0]/15 blur-3xl rounded-[64px] pointer-events-none" />

                    {/* Feed mock container */}
                    <div className="relative bg-white rounded-[40px] border border-[#14183A]/8 shadow-[0_30px_80px_-20px_rgba(20,24,58,0.25)] p-5 md:p-8">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <div className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#14183A]/40">
                                @brandanda • content queue
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            <FeedCard
                                img={FASHION_IMAGES.editorial_1}
                                tag="Lookbook"
                                title="SS26 Drop"
                                likes="2,341"
                            />
                            <FeedCard
                                img={FNB_IMAGES.coffee_pour}
                                tag="Reel"
                                title="Cold Brew"
                                likes="8,912"
                                highlight
                            />
                            <FeedCard
                                img={FASHION_IMAGES.streetwear}
                                tag="Carousel"
                                title="Street Edit"
                                likes="1,604"
                            />
                            <FeedCard
                                img={FNB_IMAGES.plated_food}
                                tag="Story"
                                title="New Menu"
                                likes="976"
                            />
                            <FeedCard
                                img={FASHION_IMAGES.editorial_2}
                                tag="Reel"
                                title="Winter Vibe"
                                likes="5,210"
                            />
                            <FeedCard
                                img={FNB_IMAGES.cocktail}
                                tag="Post"
                                title="Bar Night"
                                likes="3,488"
                            />
                        </div>
                    </div>

                    {/* Floating sticker — schedule note */}
                    <div className="hidden md:flex absolute -left-10 top-1/3 -rotate-6 bg-white border border-[#14183A]/10 rounded-2xl shadow-lg px-4 py-3 items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#2A4FE0]/10 grid place-items-center text-[#2A4FE0] font-bold text-sm">
                            12
                        </div>
                        <div className="text-left">
                            <div className="text-[11px] font-semibold text-[#14183A]">
                                Konten dijadwalkan
                            </div>
                            <div className="font-mono text-[9px] uppercase tracking-wider text-[#14183A]/50">
                                Senin–Minggu
                            </div>
                        </div>
                    </div>

                    {/* Floating sticker — engagement */}
                    <div className="hidden md:flex absolute -right-8 -bottom-6 rotate-3 bg-[#14183A] text-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3">
                        <Heart size={16} className="fill-white" />
                        <div className="text-left">
                            <div className="text-[11px] font-semibold">
                                +312% engagement
                            </div>
                            <div className="font-mono text-[9px] uppercase tracking-wider text-white/60">
                                30 hari terakhir
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeedCard = ({ img, tag, title, likes, highlight }) => (
    <div
        className={`group relative overflow-hidden rounded-2xl border ${
            highlight
                ? "border-[#2A4FE0]/40 ring-2 ring-[#2A4FE0]/20"
                : "border-[#14183A]/8"
        }`}
    >
        <div className="aspect-[4/5] overflow-hidden bg-[#14183A]/5">
            <img
                src={img}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-[#14183A] px-2 py-1 rounded-full">
                {tag}
            </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="text-sm font-semibold leading-none">{title}</div>
            <div className="mt-1.5 flex items-center gap-3 text-[10px] opacity-90">
                <span className="inline-flex items-center gap-1">
                    <Heart size={10} /> {likes}
                </span>
                <span className="inline-flex items-center gap-1">
                    <MessageCircle size={10} /> 128
                </span>
                <span className="inline-flex items-center gap-1">
                    <Bookmark size={10} /> 64
                </span>
            </div>
        </div>
    </div>
);
