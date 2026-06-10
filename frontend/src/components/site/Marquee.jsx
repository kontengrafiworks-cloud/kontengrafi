const ITEMS = [
    "UGC",
    "Commercial Photo",
    "Product Video",
    "Lifestyle",
    "Brand Story",
    "Social Media",
    "E-commerce",
    "Fashion",
];

export const Marquee = () => {
    return (
        <section
            data-testid="marquee-section"
            className="border-y border-slate-200 py-6 overflow-hidden bg-white"
        >
            <div className="flex animate-marquee whitespace-nowrap">
                {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
                    <span
                        key={i}
                        className="font-display font-bold text-2xl md:text-4xl text-slate-900 mx-8 flex items-center gap-8"
                    >
                        {item}
                        <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
                    </span>
                ))}
            </div>
        </section>
    );
};
