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
        a: "Hampir semua. Kami memproduksi UGC dan commercial content untuk brand di berbagai industri — fashion, F&B, beauty, SaaS, UMKM, e-commerce, hingga personal brand. Selama brand Anda butuh konten yang konsisten, kami bisa bantu.",
    },
    {
        q: "Apa bedanya UGC dan commercial content?",
        a: "UGC (User-Generated Content) terasa lebih natural, seperti dibuat sendiri oleh pengguna — cocok untuk social ads dan engagement. Commercial content lebih polished dan sinematik — untuk campaign besar, billboard, atau brand video. Kontengrafi mengerjakan keduanya.",
    },
    {
        q: "Berapa lama dari brief sampai konten siap tayang?",
        a: "Standar kami 5–7 hari kerja dari shoot day sampai konten pertama siap upload. Untuk paket Grow ke atas, konten mingguan disiapkan sebulan di depan supaya Anda tidak pernah kehabisan stok.",
    },
    {
        q: "Apakah saya yang menyediakan konsep atau Kontengrafi?",
        a: "Keduanya bisa. Kalau Anda sudah punya moodboard, kami eksekusi. Kalau belum, sesi brief 30 menit di awal akan menghasilkan content pillar, kalender bulanan, dan referensi visual — siap dikerjakan tim kami.",
    },
    {
        q: "Bagaimana proses approval kontennya?",
        a: "Semua draft konten disiapkan di folder Notion / Google Drive. Anda review, kasih komen, atau approve. Tidak ada konten yang naik tanpa lampu hijau dari Anda. Revisi minor selalu termasuk dalam paket.",
    },
    {
        q: "Apakah saya bisa pakai foto/video-nya untuk iklan berbayar?",
        a: "Bisa. Hak komersial penuh atas semua aset jadi milik Anda untuk pemakaian organik dan ads di semua platform — selamanya.",
    },
    {
        q: "Apakah ada kontrak minimum?",
        a: "Paket Starter sekali bayar tanpa kontrak. Paket Grow minimum 3 bulan untuk konsistensi hasil. Paket Studio dibuat custom sesuai kebutuhan brand.",
    },
    {
        q: "Apa platform yang dicover?",
        a: "Instagram, TikTok, YouTube Shorts, Pinterest, dan storefront e-commerce (Shopee, Tokopedia, TikTok Shop). Kami juga menyiapkan versi rasio yang sesuai untuk masing-masing.",
    },
];

export const Faq = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative py-20 md:py-32"
        >
            <div className="max-w-[860px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-12">
                    <h2
                        className="font-display tracking-[-0.03em] text-[#0B1120]"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.6rem)",
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
