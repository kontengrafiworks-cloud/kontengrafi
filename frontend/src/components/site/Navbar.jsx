import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/contacts";

const NAV_ITEMS = [
    { num: "01", label: "Cerita", href: "#about" },
    { num: "02", label: "Layanan", href: "#services" },
    { num: "03", label: "Karya", href: "#portfolio" },
    { num: "04", label: "Testimoni", href: "#testimonials" },
    { num: "05", label: "Kontak", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#0A1A4A]/80 border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-20 flex items-center justify-between text-white">
                <a
                    data-testid="nav-logo"
                    href="#top"
                    className="flex items-center gap-2 font-display font-black text-base md:text-lg tracking-tight uppercase"
                >
                    <span className="w-2 h-2 rounded-full bg-[#3D7BFF]" />
                    Kontengrafi<span className="text-[#3D7BFF]">®</span>
                </a>

                <ul className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                data-testid={`nav-link-${item.label.toLowerCase()}`}
                                href={item.href}
                                className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                <span className="text-[#3D7BFF]">
                                    ({item.num})
                                </span>
                                <span className="relative">
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    data-testid="nav-cta-whatsapp"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white hover:text-[#0A1A4A] text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-mono transition-all duration-300 group"
                >
                    Mulai
                    <ArrowUpRight
                        size={14}
                        className="group-hover:rotate-45 transition-transform duration-300"
                    />
                </a>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden w-10 h-10 grid place-items-center border border-white/30 text-white"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden bg-[#0A1A4A] border-t border-white/10"
                >
                    <ul className="px-6 py-8 space-y-5">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="font-display font-black text-3xl tracking-tight uppercase text-white flex items-baseline gap-3"
                                >
                                    <span className="text-[#3D7BFF] font-mono text-sm">
                                        {item.num}
                                    </span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                data-testid="nav-mobile-cta"
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0047FF] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] font-mono mt-4"
                            >
                                Mulai Proyek <ArrowUpRight size={14} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
