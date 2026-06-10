import { useReveal } from "@/lib/reveal";

const CLIENTS = [
    {
        name: "Lavish",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/w9qbuowt_image.png",
    },
    {
        name: "iMFG",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/99lx5puj_4997e50b-5965-4d46-8cde-4b14a49b07e5.png",
    },
    {
        name: "GKB Green Lake City",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/bb5xnpwo_image.png",
    },
    {
        name: "Écloria Luxury Jewelry",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/zd1b2234_image.png",
    },
    {
        name: "Kafamilk",
        logo: "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/itjra3zt_image.png",
    },
];

// Duplicate clients to enable seamless marquee loop
const TRACK = [...CLIENTS, ...CLIENTS];

export const ClientLogos = () => {
    const rHead = useReveal(0);

    return (
        <section
            id="clients"
            data-testid="clients-section"
            className="relative py-8 md:py-10"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    ref={rHead}
                    className="reveal text-center mb-6 md:mb-8"
                >
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#1D1D1F]/55">
                        <span className="w-6 h-px bg-[#0B1120]/20" />
                        Dipercaya oleh
                        <span className="w-6 h-px bg-[#0B1120]/20" />
                    </div>
                </div>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                    <div className="flex items-center gap-4 md:gap-6 animate-marquee whitespace-nowrap">
                        {TRACK.map((c, i) => (
                            <div
                                key={`${c.name}-${i}`}
                                data-testid={`client-logo-${i}`}
                                className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 bg-white border border-[#0B1120]/8 rounded-xl grid place-items-center p-3 md:p-4 shadow-[0_4px_14px_-8px_rgba(11,17,32,0.12)]"
                                title={c.name}
                            >
                                <img
                                    src={c.logo}
                                    alt={c.name}
                                    loading="lazy"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Edge fade matching page bg */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#F4F6FA] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#F4F6FA] to-transparent" />
                </div>
            </div>
        </section>
    );
};
