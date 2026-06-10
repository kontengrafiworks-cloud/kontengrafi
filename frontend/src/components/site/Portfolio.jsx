import { Play, ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReveal } from "@/lib/reveal";
import { FASHION_IMAGES, FNB_IMAGES } from "@/lib/images";

const PHOTO_ITEMS = [
    {
        title: "Velvet Drop — Fashion Lookbook",
        tag: "Fashion / Editorial",
        img: FASHION_IMAGES.editorial_1,
        size: "md:col-span-7",
    },
    {
        title: "Pour Series — Cold Brew",
        tag: "F&B / Product",
        img: FNB_IMAGES.coffee_pour,
        size: "md:col-span-5",
    },
    {
        title: "Plated Story — Modern Bistro",
        tag: "F&B / Editorial",
        img: FNB_IMAGES.plated_food,
        size: "md:col-span-5",
    },
    {
        title: "Metallic — SS Campaign",
        tag: "Fashion / Campaign",
        img: FASHION_IMAGES.hero,
        size: "md:col-span-7",
    },
    {
        title: "Streetwear — Urban Drop",
        tag: "Fashion / Lookbook",
        img: FASHION_IMAGES.streetwear,
        size: "md:col-span-6",
    },
    {
        title: "Dessert Flatlay",
        tag: "F&B / Stylist",
        img: FNB_IMAGES.dessert,
        size: "md:col-span-6",
    },
];

const VIDEO_ITEMS = [
    {
        title: "Brand Film — Aurelle SS26",
        tag: "Brand Film",
        img: FASHION_IMAGES.editorial_2,
        size: "md:col-span-7",
    },
    {
        title: "Latte Pour Reel",
        tag: "Reel",
        img: FNB_IMAGES.latte_art,
        size: "md:col-span-5",
    },
    {
        title: "Cocktail Ad — Bar Halaman",
        tag: "Ads",
        img: FNB_IMAGES.cocktail,
        size: "md:col-span-5",
    },
    {
        title: "Lookbook Cut — FW Collection",
        tag: "Fashion",
        img: FASHION_IMAGES.model_portrait,
        size: "md:col-span-7",
    },
    {
        title: "Product Loop — Skincare",
        tag: "Commerce",
        img: FASHION_IMAGES.accessory,
        size: "md:col-span-6",
    },
    {
        title: "Plated Stop-Motion",
        tag: "Motion",
        img: FNB_IMAGES.food_flatlay,
        size: "md:col-span-6",
    },
];

const Card = ({ item, isVideo }) => {
    return (
        <a
            data-testid={`portfolio-item-${item.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("—", "")
                .replaceAll("/", "")
                .replaceAll(",", "")}`}
            href="#contact"
            className={`group relative block overflow-hidden bg-[#0A1A4A] ${item.size}`}
        >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[480px] w-full overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4A]/80 via-[#0A1A4A]/10 to-transparent" />

                {isVideo && (
                    <div className="absolute inset-0 grid place-items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur grid place-items-center group-hover:scale-110 group-hover:bg-[#0047FF] transition-all duration-500">
                            <Play
                                size={22}
                                className="text-[#0A1A4A] group-hover:text-white ml-1"
                                fill="currentColor"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between">
                <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3D7BFF]">
                        {item.tag}
                    </div>
                    <div className="mt-1 font-display font-black uppercase text-lg md:text-2xl tracking-tight text-white">
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
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">
                {/* Label */}
                <div className="reveal flex items-baseline gap-4 mb-10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047FF]">
                        ( 03 ) Karya Kami
                    </span>
                    <span className="flex-1 h-px bg-[#0A1A4A]/15" />
                </div>

                <div
                    ref={rHead}
                    className="reveal grid grid-cols-12 gap-6 md:gap-10 items-end mb-12"
                >
                    <h2
                        className="col-span-12 md:col-span-8 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#0A1A4A]"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
                    >
                        Selected
                        <br />
                        <span className="text-[#0047FF]">Works.</span>
                    </h2>
                    <p className="col-span-12 md:col-span-4 font-mono text-[11px] uppercase tracking-[0.15em] leading-relaxed text-[#0A1A4A]/70">
                        Kumpulan karya terbaru di niche fashion & F&B —
                        tap kategori untuk berpindah antara foto dan video.
                    </p>
                </div>

                <Tabs defaultValue="photo" className="w-full">
                    <TabsList
                        data-testid="portfolio-tabs"
                        className="bg-transparent p-0 h-auto mb-10 inline-flex gap-2 border border-[#0A1A4A]/15 rounded-none"
                    >
                        <TabsTrigger
                            data-testid="tab-photo"
                            value="photo"
                            className="rounded-none px-6 py-3 data-[state=active]:bg-[#0A1A4A] data-[state=active]:text-white font-mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-2"
                        >
                            <ImageIcon size={14} /> Photo
                        </TabsTrigger>
                        <TabsTrigger
                            data-testid="tab-video"
                            value="video"
                            className="rounded-none px-6 py-3 data-[state=active]:bg-[#0A1A4A] data-[state=active]:text-white font-mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-2"
                        >
                            <Play size={12} /> Video
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="photo">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
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
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
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

                <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A1A4A]/40 text-center">
                    * Visual di atas adalah placeholder — karya Anda akan
                    tampil di sini.
                </div>
            </div>
        </section>
    );
};
