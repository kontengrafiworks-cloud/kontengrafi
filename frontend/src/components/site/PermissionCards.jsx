import { Mic, Camera, CheckCircle2 } from "lucide-react";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

// Invoko-exact permission card: small toggle pill with icon + label + status
const CARDS = [
    {
        id: "voice",
        permission: "Brand Voice",
        status: "Allowed for Kontengrafi",
        icon: Mic,
        sketch: FASHION_IMAGES.fabric_detail,
        title: "Ask without re-explaining your brand.",
        body: "Kami simpan moodboard, tone of voice, dan referensi Anda. Brief berikutnya cukup satu kalimat — kami sudah tahu konteks brand.",
    },
    {
        id: "shoot",
        permission: "Shoot Access",
        status: "Allowed for Kontengrafi",
        icon: Camera,
        sketch: FNB_IMAGES.plated_food,
        title: "Act from the context already on the table.",
        body: "Tim kami datang dengan kamera, lighting, dan stylist. Satu hari shoot menghasilkan stok konten untuk dua minggu — UGC ataupun commercial.",
    },
    {
        id: "approval",
        permission: "Approval Flow",
        status: "Allowed for Kontengrafi",
        icon: CheckCircle2,
        sketch: FASHION_IMAGES.streetwear,
        title: "Let the work keep moving across channels.",
        body: "Konten siap di Notion / Google Drive untuk review. Setelah disetujui, kami posting di semua channel sesuai jadwal yang sudah disepakati.",
    },
];

export const PermissionCards = () => {
    return (
        <section
            id="cards"
            data-testid="cards-section"
            className="relative py-16 md:py-24 space-y-20 md:space-y-28"
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
    title,
    body,
    idx,
}) => {
    const reverse = idx % 2 === 1;

    return (
        <div
            data-testid={`permission-card-${id}`}
            className="max-w-[1280px] mx-auto px-6 md:px-10"
        >
            <div
                className={`grid grid-cols-12 gap-6 md:gap-12 items-center ${reverse ? "md:flex md:flex-row-reverse" : ""}`}
            >
                {/* Visual side */}
                <div className="col-span-12 md:col-span-5 md:flex-1">
                    <div className="relative">
                        <div className="relative bg-white rounded-2xl border border-[#0B1120]/8 shadow-[0_20px_60px_-30px_rgba(11,17,32,0.2)] overflow-hidden">
                            <img
                                src={sketch}
                                alt=""
                                loading="lazy"
                                className="w-full aspect-[5/4] object-cover grayscale opacity-90"
                            />
                            {/* Invoko-style permission pill with toggle */}
                            <div className="absolute top-4 left-4 right-4 md:right-auto bg-white border border-[#0B1120]/10 rounded-2xl shadow-md p-2 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-[#0B1120] grid place-items-center text-white">
                                    <Icon size={16} />
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-[#0B1120]">
                                        {permission}
                                    </div>
                                    <div className="text-[11px] text-[#1D1D1F]/55 truncate">
                                        {status}
                                    </div>
                                </div>
                                {/* iOS-style toggle (ON state) */}
                                <span className="w-11 h-6 rounded-full bg-[#2A4FE0] relative flex-shrink-0">
                                    <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text side */}
                <div className="col-span-12 md:col-span-7 md:flex-1">
                    <h3
                        className="font-display tracking-[-0.025em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        {title}
                    </h3>
                    <p className="mt-5 text-base md:text-lg text-[#1D1D1F]/65 leading-relaxed max-w-xl">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};
