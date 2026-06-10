import { useReveal } from "@/lib/reveal";
import { Sparkles, CalendarCheck, Send } from "lucide-react";

const STEPS = [
    {
        n: "01",
        icon: Sparkles,
        title: "Brief & Strategy",
        body: "Diskusi 30 menit untuk memahami brand, audiens, dan goal. Kami susun content pillar & jadwal.",
    },
    {
        n: "02",
        icon: CalendarCheck,
        title: "Shoot & Production",
        body: "Tim kami eksekusi shoot — UGC, commercial, atau kombinasi keduanya. Semua sesuai shotlist.",
    },
    {
        n: "03",
        icon: Send,
        title: "Review & Publish",
        body: "Konten siap di Notion / Drive untuk review. Setelah disetujui, kami jadwalkan posting setiap minggu.",
    },
];

export const Process = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-20 md:py-32"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-14 md:mb-20">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Cara kami bekerja — sederhana, transparan, terjadwal.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    {/* Dotted connecting line */}
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
            <div className="mb-7">
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
            <p className="mt-3 text-base text-[#1D1D1F]/65 leading-relaxed max-w-xs mx-auto md:mx-0">
                {body}
            </p>
        </div>
    );
};
