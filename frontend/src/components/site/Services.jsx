import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

// "OUR SERVICES" — Bold numbered list, inspired by the OUR COACHES reference.
const SERVICES = [
    {
        num: "001",
        title: "UGC",
        sub: "Authentic Content",
        desc: "Konten autentik dengan gaya storytelling kreator — terasa nyata dan engagement tinggi.",
    },
    {
        num: "002",
        title: "FASHION",
        sub: "Editorial & Lookbook",
        desc: "Fashion photography sinematik — lookbook, campaign, drop, hingga social cuts.",
        highlight: true,
    },
    {
        num: "003",
        title: "F&B",
        sub: "Food / Beverage",
        desc: "Foto & video kuliner yang menggugah — plated food, pour shots, dan brand visual.",
    },
    {
        num: "004",
        title: "PRODUCT",
        sub: "Commerce Shots",
        desc: "Studio product shots untuk e-commerce, marketplace, dan katalog yang konversi tinggi.",
    },
    {
        num: "005",
        title: "VIDEO",
        sub: "Brand Film & Reels",
        desc: "Brand film, reels, dan iklan pendek dengan kualitas sinematik untuk semua platform.",
    },
];

export const Services = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(120);

    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative bg-[#0A1A4A] text-white py-24 md:py-32 overflow-hidden noise"
        >
            <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">
                {/* Top header */}
                <div
                    ref={r1}
                    className="reveal flex items-center justify-between mb-12"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3D7BFF]">
                        + KG'S LAYANAN
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                        ( 02 )
                    </span>
                </div>

                {/* Massive title */}
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-20">
                    <h2
                        ref={r2}
                        className="reveal col-span-12 md:col-span-9 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#3D7BFF]"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)" }}
                    >
                        Our
                        <br />
                        Services{" "}
                        <span className="inline-block text-white/90">
                            (5)
                        </span>
                    </h2>

                    <div className="hidden md:block col-span-3 relative">
                        <img
                            src={FASHION_IMAGES.streetwear}
                            alt=""
                            className="w-full aspect-[4/5] object-cover grayscale opacity-90 border border-white/10"
                            loading="lazy"
                        />
                        <div className="absolute -top-3 -left-3 font-mono text-[10px] uppercase tracking-wider text-white/60">
                            × × ×
                        </div>
                    </div>
                </div>

                {/* Intro caption */}
                <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
                    <p className="col-span-12 md:col-span-5 md:col-start-7 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.15em] leading-relaxed text-white/70">
                        Lima layanan inti yang menutupi 90% kebutuhan konten
                        brand fashion & F&B. Dari konsep, eksekusi, sampai aset
                        final — satu pintu.
                    </p>
                </div>

                {/* Numbered list — OUR COACHES style */}
                <div className="border-t border-white/15">
                    {SERVICES.map((s, idx) => (
                        <ServiceRow key={s.num} {...s} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceRow = ({ num, title, sub, desc, highlight, idx }) => {
    const ref = useReveal(idx * 80);
    return (
        <div
            ref={ref}
            data-testid={`service-row-${title.toLowerCase()}`}
            className={`reveal group relative border-b border-white/15 py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-8 items-center transition-all duration-500 hover:bg-white/[0.04] ${
                highlight ? "bg-[#0047FF]/15" : ""
            }`}
        >
            <span className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm text-white/40">
                {num}
            </span>
            <h3
                className="col-span-10 md:col-span-5 font-display font-black uppercase tracking-[-0.02em] text-[#3D7BFF] group-hover:text-white transition-colors duration-500"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
                {title}
                <span className="ml-3 font-serif-italic font-medium not-italic text-white/70 text-base md:text-lg align-middle">
                    {sub}
                </span>
            </h3>
            <p className="col-span-12 md:col-span-5 md:col-start-8 font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-white/70">
                {desc}
            </p>
        </div>
    );
};
