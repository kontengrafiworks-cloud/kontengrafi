import { useReveal } from "@/lib/reveal";
import { Sparkles, Camera, Package } from "lucide-react";

const STEPS = [
    {
        n: "01",
        icon: Sparkles,
        title: "Brief & Konsep",
        body: "Diskusi 30 menit untuk memahami brand, audiens, dan goal konten. Kami susun shotlist & brief produksi.",
    },
    {
        n: "02",
        icon: Camera,
        title: "AI Shoot & Produksi",
        body: "Tim kami eksekusi AI shoot dengan kamera, lighting, dan stylist. Semua di-set sesuai shotlist.",
    },
    {
        n: "03",
        icon: Package,
        title: "Review & Delivery",
        body: "Draft di-review di Notion / Drive. Setelah disetujui, file final diserahkan dalam rasio multi-platform — siap pakai.",
    },
];

export const Process = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-10 md:mb-14">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Tiga langkah dari brief ke file siap upload.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-px border-t border-dashed border-[#0B1120]/20 pointer-events-none" />
                    {STEPS.map((s, idx) => (
                        <Step key={s.n} {...s} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Step = ({ n, icon: Icon, title, body, idx }) => {
    const ref = useReveal(idx * 120);
    return (
        <div ref={ref} className="reveal text-center md:text-left relative">
            <div className="mb-6">
                <div className="relative w-[88px] h-[88px] mx-auto md:mx-0 rounded-full bg-white border border-[#0B1120]/8 shadow-md grid place-items-center text-[#0B1120]">
                    <Icon size={28} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2A4FE0] text-white grid place-items-center text-xs font-semibold">
                        {n}
                    </span>
                </div>
            </div>
            <h3
                className="text-2xl md:text-3xl font-display tracking-tight text-[#0B1120]"
                style={{ fontWeight: 500 }}
            >
                {title}
            </h3>
            <p className="mt-2.5 text-base text-[#1D1D1F]/65 leading-relaxed max-w-xs mx-auto md:mx-0">
                {body}
            </p>
        </div>
    );
};
