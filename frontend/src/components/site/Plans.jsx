import { ArrowRight, Check } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { Pinwheel } from "@/lib/brand";
import { useReveal } from "@/lib/reveal";

const PLANS = [
    {
        id: "starter",
        name: "Starter",
        tag: "Untuk brand yang baru mulai",
        price: "Rp 4 jt",
        period: "/ paket",
        features: [
            "1 hari shoot (4 jam)",
            "12 konten foto siap upload",
            "2 reel pendek",
            "Content calendar bulanan",
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
            "2 hari shoot (full day)",
            "30 konten foto + 6 reel",
            "Brand voice & moodboard custom",
            "Approval flow via Notion",
            "Posting & analytics laporan",
        ],
        cta: "Pilih Grow",
        highlight: true,
    },
    {
        id: "studio",
        name: "Studio",
        tag: "Untuk brand serius scale-up",
        price: "Custom",
        period: "",
        features: [
            "Tim konten dedicated",
            "Brand film + campaign",
            "Multi-platform produksi",
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
            className="relative py-24 md:py-36 overflow-hidden"
        >
            {/* Decorative spinning pinwheel */}
            <div className="absolute top-10 right-10 text-[#2A4FE0]/10 pointer-events-none">
                <Pinwheel className="w-48 h-48 animate-spin-slow" />
            </div>

            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={r1} className="reveal text-center mb-14 md:mb-20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2A4FE0] mb-5">
                        ( Plan )
                    </div>
                    <h2
                        className="font-display font-bold tracking-[-0.03em] text-[#14183A] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            lineHeight: 1.05,
                        }}
                    >
                        Pilih paket yang{" "}
                        <span className="font-serif-italic text-[#2A4FE0] font-normal">
                            cocok
                        </span>{" "}
                        untuk brand Anda.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-[#14183A]/70 max-w-[600px] mx-auto">
                        Semua paket sudah termasuk shoot, edit, scheduling,
                        dan revisi. Tanpa biaya tersembunyi.
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

                <div className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#14183A]/50">
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
            className={`relative rounded-3xl p-7 md:p-8 flex flex-col transition-all duration-500 ${
                p.highlight
                    ? "bg-[#14183A] text-white border border-[#14183A] shadow-2xl md:-translate-y-3"
                    : "bg-white text-[#14183A] border border-[#14183A]/10 hover:shadow-xl hover:-translate-y-1"
            }`}
        >
            {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2A4FE0] text-white text-[10px] font-mono uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                    ✦ Paling Populer
                </span>
            )}

            <div
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${p.highlight ? "text-[#7E94FF]" : "text-[#14183A]/50"}`}
            >
                {p.tag}
            </div>
            <h3 className="mt-2 font-display font-bold text-3xl md:text-4xl tracking-tight">
                {p.name}
            </h3>

            <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                    {p.price}
                </span>
                <span
                    className={`text-sm ${p.highlight ? "text-white/60" : "text-[#14183A]/55"}`}
                >
                    {p.period}
                </span>
            </div>

            <ul
                className={`mt-7 space-y-3 text-sm ${p.highlight ? "text-white/85" : "text-[#14183A]/80"} flex-1`}
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
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 group ${
                    p.highlight
                        ? "bg-white text-[#14183A] hover:bg-[#7E94FF] hover:text-white"
                        : "bg-[#14183A] text-white hover:bg-[#2A4FE0]"
                }`}
            >
                {p.cta}
                <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                />
            </a>
        </article>
    );
};
