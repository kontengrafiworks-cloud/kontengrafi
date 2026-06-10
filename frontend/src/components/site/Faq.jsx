import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/lib/reveal";

const ITEMS = [
    {
        q: "Brand seperti apa yang cocok dengan Kontengrafi?",
        a: "Hampir semua. Kami memproduksi UGC dan commercial content untuk brand di berbagai industri — fashion, F&B, beauty, SaaS, UMKM, e-commerce, hingga personal brand. Selama brand Anda butuh stok konten yang konsisten, kami bisa bantu.",
    },
    {
        q: "Apa bedanya UGC dan commercial content?",
        a: "UGC (User-Generated Content) terasa lebih natural, seperti dibuat sendiri oleh pengguna — cocok untuk social ads dan engagement. Commercial content lebih polished dan sinematik — untuk campaign besar atau brand video. Kontengrafi memproduksi keduanya.",
    },
    {
        q: "Apakah Kontengrafi juga posting kontennya?",
        a: "Tidak. Kami fokus di produksi — shoot, edit, dan delivery file siap pakai. Anda atau tim social media Anda yang melakukan posting sesuai strategi brand. Ini membuat brand voice tetap konsisten dan kontrol penuh ada di tangan Anda.",
    },
    {
        q: "Berapa lama dari brief sampai file siap?",
        a: "Standar kami 5–7 hari kerja dari shoot day sampai file final. Untuk paket Grow ke atas, produksi mingguan disiapkan sebulan di depan supaya stok konten Anda tidak pernah kosong.",
    },
    {
        q: "Apakah saya yang menyediakan konsep atau Kontengrafi?",
        a: "Keduanya bisa. Kalau Anda sudah punya moodboard, kami eksekusi. Kalau belum, sesi brief 30 menit di awal akan menghasilkan shotlist, kalender produksi, dan referensi visual — siap dieksekusi tim kami.",
    },
    {
        q: "Bagaimana proses approval kontennya?",
        a: "Semua draft konten disiapkan di folder Notion / Google Drive. Anda review, kasih komen, atau approve. Setelah disetujui, file final diserahkan dalam rasio yang sesuai per platform. Revisi minor termasuk dalam paket.",
    },
    {
        q: "Apakah saya bisa pakai foto/video-nya untuk iklan berbayar?",
        a: "Bisa. Hak komersial penuh atas semua aset jadi milik Anda — untuk pemakaian organik dan ads di semua platform, selamanya.",
    },
    {
        q: "Apakah ada kontrak minimum?",
        a: "Paket Starter sekali bayar tanpa kontrak. Paket Grow minimum 3 bulan untuk konsistensi produksi. Paket Studio dibuat custom sesuai kebutuhan brand.",
    },
];

export const Faq = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative py-14 md:py-20"
        >
            <div className="max-w-[860px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-10">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            lineHeight: 1.05,
                            fontWeight: 400,
                        }}
                    >
                        Ask &amp; Answered
                    </h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    data-testid="faq-accordion"
                >
                    {ITEMS.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            value={`item-${idx}`}
                            className="border-b border-[#0B1120]/10"
                            data-testid={`faq-item-${idx}`}
                        >
                            <AccordionTrigger className="py-5 text-left text-base md:text-lg font-medium text-[#0B1120] hover:no-underline">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-base text-[#1D1D1F]/65 leading-relaxed">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
