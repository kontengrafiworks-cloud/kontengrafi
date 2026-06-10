import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/lib/reveal";

const ITEMS = [
    {
        q: "Apakah Kontengrafi hanya untuk brand fashion dan F&B?",
        a: "Kami memang berfokus di dua niche itu karena di situ kami paling kuat. Tapi kalau brand Anda di luar fashion / F&B dan ceritanya sejalan dengan kekuatan visual kami, kami tetap bisa diskusikan. Chat WhatsApp dulu saja.",
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
    {
        q: "Lokasi shooting di mana?",
        a: "Studio kami di Jakarta, namun kami sering shoot on-location di Bandung, Bali, dan Surabaya. Untuk klien di luar Jabodetabek, kami diskusikan akomodasi terpisah.",
    },
];

export const Faq = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative py-24 md:py-36"
        >
            <div className="max-w-[860px] mx-auto px-6 md:px-10">
                <div ref={rHead} className="reveal text-center mb-14">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2A4FE0] mb-5">
                        ( FAQ )
                    </div>
                    <h2
                        className="font-display font-bold tracking-[-0.03em] text-[#14183A]"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.6rem)",
                            lineHeight: 1.05,
                        }}
                    >
                        Tanya jawab{" "}
                        <span className="font-serif-italic text-[#2A4FE0] font-normal">
                            singkat
                        </span>
                        .
                    </h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full bg-white border border-[#14183A]/10 rounded-3xl overflow-hidden"
                    data-testid="faq-accordion"
                >
                    {ITEMS.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            value={`item-${idx}`}
                            className="border-b border-[#14183A]/8 last:border-b-0"
                            data-testid={`faq-item-${idx}`}
                        >
                            <AccordionTrigger className="px-6 md:px-8 py-5 text-left text-base md:text-lg font-semibold text-[#14183A] hover:no-underline hover:bg-[#14183A]/2">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 md:px-8 pb-6 text-base text-[#14183A]/70 leading-relaxed">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
