import { useReveal } from "@/lib/reveal";
import { Sparkles, CalendarCheck, Send } from "lucide-react";

const STEPS = [
    {
        n: "01",
        icon: Sparkles,
        title: "Brief & Strategy",
        body: "Diskusi singkat 30 menit untuk memahami brand, audiens, dan goal. Kami susun content pillar & jadwal.",
    },
    {
        n: "02",
        icon: CalendarCheck,
        title: "Shoot & Production",
        body: "Satu hari shoot dengan tim lengkap. Foto, video, behind-the-scenes — semua diproduksi sesuai shotlist.",
    },
    {
        n: "03",
        icon: Send,
        title: "Review & Publish",
        body: "Konten siap di Notion/Drive untuk review. Setelah disetujui, kami jadwalkan posting setiap minggu.",
    },
];

export const Process = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-24 md:py-36 bg-[#14183A] text-white overflow-hidden noise-overlay"
        >
            <div className="max-w-[1180px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-16 md:mb-24">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7E94FF] mb-5">
                        ( Proses )
                    </div>
                    <h2
                        className="font-display font-bold tracking-[-0.03em] max-w-[820px] mx-auto"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            lineHeight: 1.05,
                        }}
                    >
                        Cara kami{" "}
                        <span className="font-serif-italic text-[#7E94FF] font-normal">
                            bekerja
                        </span>{" "}
                        — sederhana, transparan, terjadwal.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    {/* Dotted connecting line */}
                    <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-px border-t border-dashed border-white/20 pointer-events-none" />
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
            <div className="relative mx-auto md:mx-0 w-22 mb-8">
                <div className="w-22 h-22 mx-auto md:mx-0">
                    <div className="relative w-[88px] h-[88px] rounded-full bg-white text-[#14183A] grid place-items-center shadow-xl">
                        <Icon size={28} />
                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2A4FE0] text-white grid place-items-center font-mono text-xs font-bold">
                            {n}
                        </span>
                    </div>
                </div>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                {title}
            </h3>
            <p className="mt-3 text-base text-white/70 leading-relaxed max-w-xs mx-auto md:mx-0">
                {body}
            </p>
        </div>
    );
};
