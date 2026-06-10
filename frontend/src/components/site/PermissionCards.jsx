import { Mic, Camera, FileCheck } from "lucide-react";
import { KONTENGRAFI_PHOTOS } from "@/lib/images";

const CARDS = [
    {
        id: "voice",
        permission: "Brand Voice",
        status: "Allowed for Kontengrafi",
        icon: Mic,
        sketch: KONTENGRAFI_PHOTOS.lookbook_18,
        title: "Brief sekali, kami simpan untuk seterusnya.",
        body: "Brief, tone, dan referensi visual brand Anda kami simpan. Order konten berikutnya cukup satu kalimat — kami sudah tahu gaya yang harus diproduksi.",
    },
    {
        id: "shoot",
        permission: "AI Shoot Access",
        status: "Allowed for Kontengrafi",
        icon: Camera,
        sketch: KONTENGRAFI_PHOTOS.jewelry_2,
        title: "Tim datang dengan semua yang dibutuhkan.",
        body: "Kamera, lighting, stylist, dan property — kami bawa lengkap. Satu hari AI shoot menghasilkan stok konten dua minggu, UGC maupun commercial.",
    },
    {
        id: "delivery",
        permission: "Final Delivery",
        status: "Allowed for Kontengrafi",
        icon: FileCheck,
        sketch: KONTENGRAFI_PHOTOS.editorial_6,
        title: "File final siap pakai, langsung upload.",
        body: "Semua foto & video diserahkan di Notion / Drive dalam rasio yang sesuai per platform — feed, story, reel, e-commerce. Anda tinggal pilih dan upload.",
    },
];

export const PermissionCards = () => {
    return (
        <section
            id="cards"
            data-testid="cards-section"
            className="relative py-10 md:py-14 space-y-10 md:space-y-14"
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
                className={`grid grid-cols-12 gap-6 md:gap-10 items-center ${reverse ? "md:flex md:flex-row-reverse" : ""}`}
            >
                {/* Visual side */}
                <div className="col-span-12 md:col-span-5 md:flex-1">
                    <div className="relative">
                        <div className="relative bg-white rounded-2xl border border-[#0B1120]/8 shadow-[0_20px_60px_-30px_rgba(11,17,32,0.2)] overflow-hidden">
                            <img
                                src={sketch}
                                alt=""
                                loading="lazy"
                                className="w-full aspect-[5/4] object-cover"
                            />
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
                            fontSize: "clamp(1.7rem, 3.6vw, 2.8rem)",
                            lineHeight: 1.08,
                            fontWeight: 400,
                        }}
                    >
                        {title}
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-[#1D1D1F]/65 leading-relaxed max-w-xl">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};
