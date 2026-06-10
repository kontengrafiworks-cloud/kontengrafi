import {
    Mic,
    Camera,
    Workflow,
    CheckCircle2,
} from "lucide-react";
import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

// Invoko-style "permission card" + big headline + image sketch
const CARDS = [
    {
        id: "voice",
        permission: "Brand Voice Sync",
        status: "Aktif",
        icon: Mic,
        sketch: FASHION_IMAGES.fabric_detail,
        kicker: "Pelajari ritme brand Anda.",
        title: "Kami menyerap tone of voice & estetika brand sebelum membuat apapun.",
        body: "Dari moodboard, referensi feed, sampai gaya bicara — kami sinkronkan dulu agar konten yang keluar terasa seperti suara Anda sendiri.",
    },
    {
        id: "shoot",
        permission: "Shoot Day Access",
        status: "Diizinkan",
        icon: Camera,
        sketch: FNB_IMAGES.plated_food,
        kicker: "Satu hari shoot, hasil dua minggu.",
        title: "Foto & video dipersiapkan dari awal sampai siap upload.",
        body: "Tim kami bawa kamera, lighting, stylist, dan brief shotlist. Hasilnya cukup untuk konten dua minggu — fashion lookbook atau menu F&B, semua satu paket.",
    },
    {
        id: "approval",
        permission: "Approval Flow",
        status: "Selalu kontrol",
        icon: CheckCircle2,
        sketch: FASHION_IMAGES.streetwear,
        kicker: "Review sebelum naik.",
        title: "Tidak ada konten yang tayang tanpa persetujuan Anda.",
        body: "Setiap minggu Anda lihat preview konten via Notion/Drive. Setujui, revisi, atau geser jadwal — semua tetap dalam kontrol Anda.",
    },
];

export const PermissionCards = () => {
    return (
        <section
            id="cards"
            data-testid="cards-section"
            className="relative py-20 md:py-28 space-y-24 md:space-y-32"
        >
            {CARDS.map((card, idx) => (
                <PermissionCard key={card.id} {...card} idx={idx} />
            ))}
        </section>
    );
};

const PermissionCard = ({
    id,
    permission,
    status,
    icon: Icon,
    sketch,
    kicker,
    title,
    body,
    idx,
}) => {
    const reverse = idx % 2 === 1;

    return (
        <div
            data-testid={`permission-card-${id}`}
            className="max-w-[1180px] mx-auto px-6 md:px-10"
        >
            <div
                className={`grid grid-cols-12 gap-6 md:gap-12 items-center ${reverse ? "md:flex md:flex-row-reverse" : ""}`}
            >
                {/* Visual side */}
                <div className="col-span-12 md:col-span-5 md:flex-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#2A4FE0]/10 blur-2xl rounded-[40px] pointer-events-none" />
                        <div className="relative bg-white rounded-[28px] border border-[#14183A]/8 shadow-lg overflow-hidden">
                            <img
                                src={sketch}
                                alt=""
                                loading="lazy"
                                className="w-full aspect-[5/4] object-cover"
                            />
                            {/* Permission pill overlay */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-[#14183A]/10 rounded-full pl-1.5 pr-3 py-1 flex items-center gap-2 shadow-sm">
                                <span className="w-6 h-6 rounded-full bg-[#2A4FE0] grid place-items-center text-white">
                                    <Icon size={12} />
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#14183A]">
                                    {permission}
                                </span>
                                <span className="ml-1 text-[10px] font-semibold text-[#2A4FE0]">
                                    · {status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text side */}
                <div className="col-span-12 md:col-span-7 md:flex-1">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2A4FE0] mb-3">
                        ({String(idx + 1).padStart(2, "0")}) {kicker}
                    </div>
                    <h3
                        className="font-display font-bold tracking-[-0.025em] text-[#14183A]"
                        style={{
                            fontSize: "clamp(1.65rem, 3.6vw, 2.8rem)",
                            lineHeight: 1.1,
                        }}
                    >
                        {title.split(" ").map((w, i) =>
                            i === 2 ? (
                                <span
                                    key={i}
                                    className="font-serif-italic text-[#2A4FE0] font-normal"
                                >
                                    {w}{" "}
                                </span>
                            ) : (
                                <span key={i}>{w} </span>
                            ),
                        )}
                    </h3>
                    <p className="mt-5 text-base md:text-lg text-[#14183A]/70 leading-relaxed max-w-xl">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};
