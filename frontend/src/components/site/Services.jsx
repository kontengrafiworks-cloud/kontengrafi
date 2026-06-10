import { Camera, Film, Package, Sparkles, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/reveal";

const SERVICES = [
    {
        icon: Sparkles,
        title: "UGC Content",
        desc: "Konten autentik dengan gaya storytelling kreator — terasa nyata, relevan, dan engagement tinggi untuk feed dan iklan sosial.",
        size: "lg:col-span-7",
        accent: true,
    },
    {
        icon: Camera,
        title: "Foto Komersial",
        desc: "Still life, produk, dan campaign visual yang tajam, bersih, dan siap tayang multi-platform.",
        size: "lg:col-span-5",
    },
    {
        icon: Film,
        title: "Video Komersial",
        desc: "Iklan, brand film, dan video pendek dengan kualitas sinematik untuk YouTube, TikTok, Reels, hingga billboard digital.",
        size: "lg:col-span-5",
    },
    {
        icon: Package,
        title: "Product Shots",
        desc: "Foto & video produk yang konversinya tinggi untuk e-commerce, katalog, dan marketplace.",
        size: "lg:col-span-7",
    },
];

export const Services = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="services"
            data-testid="services-section"
            className="py-24 md:py-32 bg-[#F8FAFC]"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#0047FF]">
                            ( 02 ) Layanan
                        </span>
                        <h2 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] tracking-tight text-slate-900 max-w-[800px]">
                            Apa pun bentuk kontennya, kami{" "}
                            <span className="text-[#0047FF]">eksekusi</span>.
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 max-w-md">
                        Empat layanan inti yang menutupi 90% kebutuhan konten
                        komersial brand Anda — dari produk hingga campaign.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {SERVICES.map((s, idx) => (
                        <ServiceCard key={s.title} {...s} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon: Icon, title, desc, size, accent, idx }) => {
    const ref = useReveal(idx * 120);
    return (
        <div
            ref={ref}
            data-testid={`service-card-${title.toLowerCase().replaceAll(" ", "-")}`}
            className={`reveal group relative overflow-hidden rounded-3xl border p-8 md:p-10 min-h-[280px] flex flex-col justify-between transition-all duration-500 ${
                accent
                    ? "bg-slate-900 text-white border-slate-900 hover:bg-[#0047FF] hover:border-[#0047FF]"
                    : "bg-white border-slate-200 hover:border-[#0047FF]/30 hover:shadow-xl"
            } ${size}`}
        >
            <div className="flex items-start justify-between">
                <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center ${
                        accent
                            ? "bg-white/10"
                            : "bg-[#0047FF]/10 text-[#0047FF]"
                    }`}
                >
                    <Icon
                        size={22}
                        className={accent ? "text-white" : ""}
                    />
                </div>
                <ArrowUpRight
                    size={28}
                    className={`opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 ${
                        accent ? "text-white" : "text-slate-900"
                    }`}
                />
            </div>

            <div className="mt-10">
                <h3
                    className={`font-display font-bold text-2xl md:text-3xl tracking-tight ${
                        accent ? "text-white" : "text-slate-900"
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`mt-3 text-sm md:text-base leading-relaxed ${
                        accent ? "text-white/70" : "text-slate-600"
                    }`}
                >
                    {desc}
                </p>
            </div>
        </div>
    );
};
