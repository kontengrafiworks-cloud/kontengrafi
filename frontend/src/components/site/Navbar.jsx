import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { Pinwheel, BRAND } from "@/lib/brand";

const NAV_ITEMS = [
    { label: "Cara Kerja", href: "#beside" },
    { label: "Layanan", href: "#cards" },
    { label: "Proses", href: "#process" },
    { label: "Plan", href: "#plans" },
    { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-3 md:top-5 left-0 right-0 z-50 px-4 transition-all duration-500`}
        >
            <nav
                className={`max-w-[1240px] mx-auto h-14 md:h-16 px-3 md:px-4 flex items-center justify-between rounded-full transition-all duration-500 ${
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(20,24,58,0.18)] border border-[#14183A]/8"
                        : "bg-white/60 backdrop-blur-md border border-white/40"
                }`}
            >
                <a
                    data-testid="nav-logo"
                    href="#top"
                    className="flex items-center gap-2 pl-2 group"
                >
                    <span className="w-8 h-8 rounded-full bg-[#2A4FE0] grid place-items-center text-white">
                        <Pinwheel className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                    </span>
                    <span className="font-display font-bold text-base md:text-[15px] tracking-tight text-[#14183A]">
                        {BRAND.name}
                        <span className="text-[#2A4FE0]">.</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#14183A]/50 ml-1.5">
                            {BRAND.suffix}
                        </span>
                    </span>
                </a>

                <ul className="hidden lg:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                data-testid={`nav-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                                href={item.href}
                                className="px-3.5 py-1.5 text-sm font-medium text-[#14183A]/75 hover:text-[#14183A] hover:bg-[#14183A]/5 rounded-full transition-all"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    data-testid="nav-cta-whatsapp"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-2 bg-[#14183A] hover:bg-[#2A4FE0] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                >
                    Mulai Sekarang
                </a>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-[#14183A]/5 text-[#14183A]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden mt-2 mx-auto max-w-[1240px] bg-white rounded-3xl border border-[#14183A]/10 shadow-xl"
                >
                    <ul className="p-3">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    data-testid={`nav-mobile-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-[#14183A] hover:bg-[#14183A]/5 rounded-2xl"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="p-1 pt-2">
                            <a
                                data-testid="nav-mobile-cta"
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-[#14183A] text-white px-5 py-3 rounded-2xl text-sm font-semibold"
                            >
                                Mulai Sekarang
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
