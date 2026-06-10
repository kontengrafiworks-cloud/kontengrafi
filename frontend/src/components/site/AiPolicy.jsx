import { useRef } from "react";
import {
    Eye,
    ShieldOff,
    CheckCircle2,
    Copyright,
    UserX,
    Lock,
    Sparkles,
    Ban,
    UserCheck,
    Pencil,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useReveal } from "@/lib/reveal";

const POLICIES = [
    {
        icon: Eye,
        title: "Transparansi Konten AI",
        body: "Konten yang dibuat seluruhnya atau sebagian menggunakan AI diinformasikan kepada klien jika diperlukan untuk menjaga transparansi.",
    },
    {
        icon: ShieldOff,
        title: "Larangan Informasi Palsu",
        body: "Konten AI tidak boleh digunakan untuk menyebarkan informasi yang menyesatkan, hoaks, atau klaim yang tidak dapat diverifikasi.",
    },
    {
        icon: CheckCircle2,
        title: "Verifikasi Sebelum Publikasi",
        body: "Seluruh konten yang dihasilkan AI wajib ditinjau dan diverifikasi oleh tim sebelum dipublikasikan.",
    },
    {
        icon: Copyright,
        title: "Menghormati Hak Cipta",
        body: "Penggunaan gambar, video, musik, atau teks yang dihasilkan AI harus tetap memperhatikan hak cipta dan ketentuan platform yang berlaku.",
    },
    {
        icon: UserX,
        title: "Larangan Meniru Identitas Pihak Lain",
        body: "AI tidak boleh digunakan untuk membuat konten yang meniru, menyamar, atau mengatasnamakan individu maupun organisasi tanpa izin.",
    },
    {
        icon: Lock,
        title: "Perlindungan Data Pribadi",
        body: "Dilarang memasukkan data pribadi, informasi rahasia, atau dokumen internal perusahaan ke dalam platform AI tanpa persetujuan yang sesuai.",
    },
    {
        icon: Sparkles,
        title: "Menjaga Reputasi Merek",
        body: "Konten AI harus sesuai dengan nilai, identitas, dan pedoman komunikasi merek yang telah ditetapkan oleh standar moral & kebijakan platform.",
    },
    {
        icon: Ban,
        title: "Tidak Mengandung Unsur Diskriminatif",
        body: "Konten AI tidak boleh memuat ujaran kebencian, diskriminasi, pelecehan, atau konten yang merugikan kelompok tertentu.",
    },
    {
        icon: UserCheck,
        title: "Tanggung Jawab Tetap",
        body: "Kontengrafi tetap bertanggung jawab atas seluruh konten yang dipublikasikan meskipun dibuat dengan bantuan AI.",
    },
    {
        icon: Pencil,
        title: "Hak Revisi dan Penghapusan",
        body: "Perusahaan atau pengelola akun berhak mengubah, menunda, atau menghapus konten AI yang dianggap tidak sesuai dengan kebijakan, regulasi, atau kepentingan bisnis.",
    },
];

export const AiPolicy = () => {
    const rHead = useReveal(0);
    const rFoot = useReveal(160);
    const scrollRef = useRef(null);

    const scrollBy = (delta) => {
        scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
    };

    return (
        <section
            id="ai-policy"
            data-testid="ai-policy-section"
            className="relative py-10 md:py-14"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8"
                >
                    <div className="max-w-[640px]">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B1120]/10 text-[11px] uppercase tracking-[0.15em] text-[#1D1D1F]/55 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2A4FE0]" />
                            AI Policy
                        </div>
                        <h2
                            className="font-display tracking-[-0.03em] text-[#0B1120]"
                            style={{
                                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                                lineHeight: 1.05,
                                fontWeight: 400,
                            }}
                        >
                            Kebijakan Penggunaan AI.
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-[#1D1D1F]/65 max-w-[520px]">
                            Komitmen kami untuk produksi konten yang etis,
                            transparan, dan bertanggung jawab.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            data-testid="ai-policy-prev"
                            onClick={() => scrollBy(-360)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Previous policy"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            data-testid="ai-policy-next"
                            onClick={() => scrollBy(360)}
                            className="w-10 h-10 rounded-full bg-white border border-[#0B1120]/10 hover:border-[#0B1120]/40 grid place-items-center text-[#0B1120] transition-all"
                            aria-label="Next policy"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    data-testid="ai-policy-track"
                    className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar"
                    style={{
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {POLICIES.map((p, idx) => (
                        <PolicyItem key={p.title} item={p} idx={idx} />
                    ))}
                </div>

                {/* Closing note */}
                <div
                    ref={rFoot}
                    className="reveal mt-8 md:mt-10 relative bg-white border border-[#0B1120]/8 rounded-2xl p-5 md:p-7"
                >
                    <div className="absolute -top-2.5 left-6 bg-[#F4F6FA] px-3 text-[11px] uppercase tracking-[0.15em] text-[#2A4FE0]">
                        Catatan
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[#0B1120]/85">
                        AI digunakan sebagai{" "}
                        <span className="font-medium underline decoration-[#2A4FE0]/40 decoration-2 underline-offset-2">
                            alat bantu
                        </span>{" "}
                        untuk meningkatkan efisiensi dan kreativitas — bukan
                        sebagai pengganti penilaian profesional, etika, dan
                        tanggung jawab manusia dalam pembuatan konten.
                    </p>
                    <div className="mt-5 pt-4 border-t border-dashed border-[#0B1120]/15 flex flex-wrap items-center gap-3">
                        <span
                            className="text-xl md:text-2xl text-[#0B1120]"
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontWeight: 700,
                                transform: "rotate(-4deg)",
                                display: "inline-block",
                            }}
                        >
                            Justine Feroni
                        </span>
                        <div className="hidden sm:block flex-1 h-px border-t border-dashed border-[#0B1120]/15" />
                        <span className="text-[11px] md:text-xs text-[#1D1D1F]/55">
                            Founder of Kontengrafi
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PolicyItem = ({ item, idx }) => {
    const Icon = item.icon;
    return (
        <div
            data-testid={`ai-policy-item-${idx}`}
            className="group shrink-0 snap-start bg-white border border-[#0B1120]/8 rounded-2xl p-5 md:p-6 w-[80%] sm:w-[55%] md:w-[340px] hover:border-[#2A4FE0]/30 hover:shadow-sm transition-all"
        >
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#2A4FE0]/8 items-center justify-center text-[#2A4FE0] group-hover:bg-[#2A4FE0] group-hover:text-white transition-colors mb-3">
                <Icon size={18} />
            </span>
            <div className="font-semibold text-[#0B1120] text-[15px] leading-snug">
                {item.title}
            </div>
            <p className="mt-1.5 text-sm text-[#1D1D1F]/65 leading-relaxed">
                {item.body}
            </p>
        </div>
    );
};
