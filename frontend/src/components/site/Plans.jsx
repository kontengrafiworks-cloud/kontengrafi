import { Check } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { useReveal } from "@/lib/reveal";

const PLANS = [
    {
        id: "starter",
        name: "Starter",
        tag: "Untuk brand yang baru mulai",
        price: "Rp 4 jt",
        period: "/ paket",
        features: [
            "1 hari AI shoot (4 jam)",
            "12 foto UGC siap pakai",
            "2 reel pendek",
            "Multi-rasio per platform",
        ],
        cta: "Pilih Starter",
    },
    {
        id: "grow",
        name: "Grow",
        tag: "Paling banyak diambil",
        price: "Rp 9 jt",
        period: "/ bulan",
        features: [
            "2 hari AI shoot per bulan",
            "30 foto UGC + commercial",
            "6 reel & motion content",
            "Brand voice + brief custom",
            "File final multi-rasio + revisi",
        ],
        cta: "Pilih Grow",
        highlight: true,
    },
    {
        id: "studio",
        name: "Studio",
        tag: "Untuk brand scale-up",
        price: "Custom",
        period: "",
        features: [
            "Tim AI produksi dedicated",
            "Brand film + campaign",
            "Volume konten besar",
            "Strategy session bulanan",
            "Priority support",
        ],
        cta: "Bicara dengan kami",
    },
];

export const Plans = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);

    return (
        <section
            id="plans"
            data-testid="plans-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={r1} className="reveal text-center mb-10 md:mb-14">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Paket produksi konten yang fleksibel.
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-[#1D1D1F]/65 max-w-[600px] mx-auto">
                        Semua paket sudah termasuk AI shoot, edit, dan delivery
                        file siap pakai. Tanpa biaya tersembunyi.
                    </p>
                </div>

                <div
                    ref={r2}
                    className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
                >
                    {PLANS.map((p) => (
                        <PlanCard key={p.id} p={p} />
                    ))}
                </div>

                <div className="mt-8 text-center text-sm text-[#1D1D1F]/50">
                    Kebutuhan khusus? Kami buatkan paket custom — chat kami di
                    WhatsApp.
                </div>
            </div>
        </section>
    );
};

const PlanCard = ({ p }) => {
    return (
        <article
            data-testid={`plan-card-${p.id}`}
            className={`relative rounded-2xl p-7 md:p-8 flex flex-col transition-all duration-300 ${
                p.highlight
                    ? "bg-[#0B1120] text-white border border-[#0B1120] shadow-xl md:-translate-y-3"
                    : "bg-white text-[#0B1120] border border-[#0B1120]/10 hover:shadow-md"
            }`}
        >
            {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2A4FE0] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Paling Populer
                </span>
            )}

            <div
                className={`text-xs font-medium ${p.highlight ? "text-[#7E94FF]" : "text-[#1D1D1F]/55"}`}
            >
                {p.tag}
            </div>
            <h3
                className="mt-2 font-display tracking-tight"
                style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 500,
                }}
            >
                {p.name}
            </h3>

            <div className="mt-5 flex items-baseline gap-1">
                <span
                    className="font-display tracking-tight"
                    style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        fontWeight: 500,
                    }}
                >
                    {p.price}
                </span>
                <span
                    className={`text-sm ${p.highlight ? "text-white/60" : "text-[#1D1D1F]/55"}`}
                >
                    {p.period}
                </span>
            </div>

            <ul
                className={`mt-6 space-y-2.5 text-sm ${p.highlight ? "text-white/85" : "text-[#1D1D1F]/80"} flex-1`}
            >
                {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                        <Check
                            size={16}
                            className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-[#7E94FF]" : "text-[#2A4FE0]"}`}
                        />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <a
                data-testid={`plan-cta-${p.id}`}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all ${
                    p.highlight
                        ? "bg-white text-[#0B1120] hover:bg-[#7E94FF] hover:text-white"
                        : "bg-[#0B1120] text-white hover:bg-[#2A4FE0]"
                }`}
            >
                {p.cta}
            </a>
        </article>
    );
};
