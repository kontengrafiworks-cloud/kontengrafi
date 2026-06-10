import { useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { useReveal } from "@/lib/reveal";
import { PORTFOLIO, FILTERS } from "@/lib/portfolio";

export const Portfolio = () => {
    const [filter, setFilter] = useState(FILTERS[0].id);
    const [active, setActive] = useState(null);
    const rHead = useReveal(0);
    const scrollRef = useRef(null);

    const items = PORTFOLIO.filter((it) => it.cat === filter);

    const scrollBy = (delta) => {
        scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
    };

    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
                >
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            lineHeight: 1.05,
                            fontWeight: 700,
                            textWrap: "balance",
                        }}
                    >
                        Karya yang kami produksi.
                    </h2>
                    <p className="text-sm md:text-base text-[#1D1D1F]/60 max-w-md">
                        Geser ke samping untuk lihat lebih banyak — klik
                        untuk versi penuh.
                    </p>
                </div>

                {/* Filter tabs + arrow controls */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                        data-testid="portfolio-filters"
                        className="flex flex-wrap gap-2"
                    >
                        {FILTERS.map((f) => (
                            <button
                                key={f.id}
                                data-testid={`filter-${f.id}`}
                                onClick={() => {
                                    setFilter(f.id);
                                    scrollRef.current?.scrollTo({ left: 0 });
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    filter === f.id
                                        ? "bg-[#0B1120] text-white"
                                        : "bg-white border border-[#0B1120]/10 text-[#0B1120] hover:border-[#0B1120]/30"
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            data-testid="portfolio-prev"
                            onClick={() => scrollBy(-480)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            data-testid="portfolio-next"
                            onClick={() => scrollBy(480)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Next"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Horizontal slider */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        data-testid="portfolio-track"
                        className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar -mx-6 md:-mx-10 px-6 md:px-10"
                        style={{
                            scrollBehavior: "smooth",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {items.map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                                onOpen={() => setActive(item)}
                            />
                        ))}
                    </div>
                    {/* edge fade */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F4F6FA] to-transparent hidden md:block" />
                </div>

                {items.length === 0 && (
                    <div className="py-20 text-center text-sm text-[#1D1D1F]/50">
                        Belum ada karya di kategori ini.
                    </div>
                )}
            </div>

            <Lightbox item={active} onClose={() => setActive(null)} />
        </section>
    );
};

const Card = ({ item, onOpen }) => {
    const isVideo = item.type === "video";
    // Photos = 4:5, Videos = 9:16 (vertical reels)
    const ratio = isVideo ? "aspect-[9/16]" : "aspect-[4/5]";
    const width = isVideo
        ? "w-48 md:w-56 lg:w-64"
        : "w-60 md:w-72 lg:w-80";
    return (
        <button
            data-testid={`portfolio-item-${item.id}`}
            onClick={onOpen}
            className={`group relative shrink-0 snap-start overflow-hidden rounded-xl bg-[#0B1120]/5 ${width} ${ratio} focus:outline-none focus:ring-2 focus:ring-[#2A4FE0] focus:ring-offset-2 focus:ring-offset-[#F4F6FA]`}
        >
            <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/75 via-[#0B1120]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {item.type === "video" && (
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 grid place-items-center shadow-md group-hover:scale-110 transition-transform">
                    <Play
                        size={14}
                        className="text-[#0B1120] ml-0.5"
                        fill="currentColor"
                    />
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-3 text-left opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                <div className="text-[10px] uppercase tracking-wider text-white/80">
                    {item.type}
                </div>
                <div className="text-sm font-semibold text-white truncate">
                    {item.title}
                </div>
            </div>
        </button>
    );
};

const Lightbox = ({ item, onClose }) => {
    const open = Boolean(item);
    const isVerticalVideo = item?.type === "video" && !item?.embed;
    return (
        <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
            <DialogContent
                data-testid="portfolio-lightbox"
                className={`${
                    isVerticalVideo ? "max-w-md" : "max-w-5xl"
                } bg-[#0B1120] border-0 p-0 overflow-hidden text-white`}
            >
                <button
                    data-testid="lightbox-close"
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {item && (
                    <div className="flex flex-col">
                        <div className="bg-black flex items-center justify-center">
                            {item.type === "photo" ? (
                                <img
                                    src={item.full}
                                    alt={item.title}
                                    className="max-h-[80vh] max-w-full object-contain"
                                />
                            ) : item.embed ? (
                                <iframe
                                    src={item.full}
                                    title={item.title}
                                    className="w-full aspect-video"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    src={item.full}
                                    poster={item.thumb}
                                    controls
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                    className="max-h-[80vh] max-w-full object-contain"
                                />
                            )}
                        </div>

                        <div className="px-5 py-4 text-sm">
                            <div className="text-xs uppercase tracking-wider text-white/50">
                                {item.cat} · {item.type}
                            </div>
                            <div className="font-semibold mt-0.5">
                                {item.title}
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
