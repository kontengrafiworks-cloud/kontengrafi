import { useState } from "react";
import { Play, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { useReveal } from "@/lib/reveal";
import { PORTFOLIO, FILTERS } from "@/lib/portfolio";

const matchesFilter = (item, filter) => {
    if (filter === "all") return true;
    if (filter === "photo" || filter === "video") return item.type === filter;
    return item.cat === filter;
};

export const Portfolio = () => {
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState(null);
    const rHead = useReveal(0);

    const items = PORTFOLIO.filter((it) => matchesFilter(it, filter));

    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10"
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
                        Pilihan foto & video dari berbagai brand — klik untuk
                        lihat versi penuh.
                    </p>
                </div>

                {/* Filter tabs */}
                <div
                    data-testid="portfolio-filters"
                    className="flex flex-wrap gap-2 mb-8"
                >
                    {FILTERS.map((f) => (
                        <button
                            key={f.id}
                            data-testid={`filter-${f.id}`}
                            onClick={() => setFilter(f.id)}
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

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {items.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                            onOpen={() => setActive(item)}
                        />
                    ))}
                </div>

                {items.length === 0 && (
                    <div className="py-20 text-center text-sm text-[#1D1D1F]/50">
                        Belum ada karya di kategori ini.
                    </div>
                )}
            </div>

            {/* Lightbox modal */}
            <Lightbox item={active} onClose={() => setActive(null)} />
        </section>
    );
};

const Card = ({ item, onOpen }) => {
    return (
        <button
            data-testid={`portfolio-item-${item.id}`}
            onClick={onOpen}
            className="group relative block overflow-hidden rounded-xl bg-[#0B1120]/5 aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-[#2A4FE0] focus:ring-offset-2 focus:ring-offset-[#F4F6FA]"
        >
            <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    {item.cat}
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
    return (
        <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
            <DialogContent
                data-testid="portfolio-lightbox"
                className="max-w-5xl bg-[#0B1120] border-0 p-0 overflow-hidden text-white"
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
                        <div className="bg-black aspect-video flex items-center justify-center">
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
                                    className="w-full h-full"
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
                                    preload="none"
                                    className="w-full h-full max-h-[80vh] object-contain"
                                />
                            )}
                        </div>

                        <div className="px-5 py-4 flex items-center justify-between text-sm">
                            <div>
                                <div className="text-xs uppercase tracking-wider text-white/50">
                                    {item.cat} · {item.type}
                                </div>
                                <div className="font-semibold mt-0.5">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
