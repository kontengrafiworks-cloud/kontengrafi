const ITEMS = [
    "Fashion",
    "Food & Beverage",
    "UGC",
    "Commercial",
    "Product Shots",
    "Lookbook",
    "Editorial",
    "Lifestyle",
    "Brand Film",
];

export const Marquee = () => {
    return (
        <section
            data-testid="marquee-section"
            className="border-y border-[#0A1A4A]/10 py-6 md:py-8 overflow-hidden bg-white"
        >
            <div className="flex animate-marquee whitespace-nowrap">
                {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
                    <span
                        key={i}
                        className="font-display font-black uppercase text-2xl md:text-5xl tracking-tight text-[#0A1A4A] mx-6 md:mx-10 flex items-center gap-6 md:gap-10"
                    >
                        {item}
                        <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
                    </span>
                ))}
            </div>
        </section>
    );
};
