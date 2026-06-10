import { Play, ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReveal } from "@/lib/reveal";

const PHOTO_ITEMS = [
    {
        title: "Beauty Campaign — Aurelle",
        tag: "Commercial",
        img: "https://images.pexels.com/photos/34939759/pexels-photo-34939759.jpeg",
        size: "md:col-span-8",
    },
    {
        title: "Skincare Editorial",
        tag: "Product",
        img: "https://images.pexels.com/photos/8128067/pexels-photo-8128067.jpeg",
        size: "md:col-span-4",
    },
    {
        title: "Fashion Story — Metallic",
        tag: "Editorial",
        img: "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg",
        size: "md:col-span-4",
    },
    {
        title: "UGC — Winter Drop",
        tag: "UGC",
        img: "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg",
        size: "md:col-span-8",
    },
];

const VIDEO_ITEMS = [
    {
        title: "Brand Film — Soon",
        tag: "Brand Film",
        img: "https://images.pexels.com/photos/734535/pexels-photo-734535.jpeg",
        size: "md:col-span-6",
    },
    {
        title: "Product Demo Reel",
        tag: "Reel",
        img: "https://images.pexels.com/photos/29293968/pexels-photo-29293968.jpeg",
        size: "md:col-span-6",
    },
    {
        title: "UGC Compilation",
        tag: "UGC",
        img: "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg",
        size: "md:col-span-4",
    },
    {
        title: "Lifestyle Cut",
        tag: "Social",
        img: "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg",
        size: "md:col-span-4",
    },
    {
        title: "Commerce Loop",
        tag: "Ads",
        img: "https://images.pexels.com/photos/34939759/pexels-photo-34939759.jpeg",
        size: "md:col-span-4",
    },
];

const Card = ({ item, isVideo }) => {
    return (
        <a
            data-testid={`portfolio-item-${item.title.toLowerCase().replaceAll(" ", "-").replaceAll("—", "")}`}
            href="#contact"
            className={`group relative block overflow-hidden rounded-2xl bg-slate-100 ${item.size}`}
        >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[460px] w-full overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {isVideo && (
                    <div className="absolute inset-0 grid place-items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur grid place-items-center group-hover:scale-110 group-hover:bg-[#0047FF] transition-all duration-500">
                            <Play
                                size={22}
                                className="text-slate-900 group-hover:text-white ml-1"
                                fill="currentColor"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                    <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">
                        {item.tag}
                    </div>
                    <div className="mt-1 font-display font-bold text-xl md:text-2xl text-white">
                        {item.title}
                    </div>
                </div>
            </div>
        </a>
    );
};

export const Portfolio = () => {
    const rHead = useReveal(0);
    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="py-24 md:py-32 bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div
                    ref={rHead}
                    className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#0047FF]">
                            ( 03 ) Karya Kami
                        </span>
                        <h2 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] tracking-tight text-slate-900 max-w-[800px]">
                            Hasil yang
                            <br className="hidden md:block" />{" "}
                            <span className="text-[#0047FF]">berbicara sendiri</span>.
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 max-w-md">
                        Pilihan karya terbaru — sentuh kategori untuk berpindah
                        antara foto dan video.
                    </p>
                </div>

                <Tabs defaultValue="photo" className="w-full">
                    <TabsList
                        data-testid="portfolio-tabs"
                        className="bg-slate-100 p-1 rounded-full h-auto mb-10 inline-flex"
                    >
                        <TabsTrigger
                            data-testid="tab-photo"
                            value="photo"
                            className="rounded-full px-6 py-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm font-semibold flex items-center gap-2"
                        >
                            <ImageIcon size={16} /> Photo
                        </TabsTrigger>
                        <TabsTrigger
                            data-testid="tab-video"
                            value="video"
                            className="rounded-full px-6 py-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm font-semibold flex items-center gap-2"
                        >
                            <Play size={14} /> Video
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="photo">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                            {PHOTO_ITEMS.map((item) => (
                                <Card
                                    key={item.title}
                                    item={item}
                                    isVideo={false}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="video">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                            {VIDEO_ITEMS.map((item) => (
                                <Card
                                    key={item.title}
                                    item={item}
                                    isVideo={true}
                                />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-500">
                        * Asset di atas adalah placeholder visual — karya
                        klien Anda akan tampil di sini.
                    </p>
                </div>
            </div>
        </section>
    );
};
