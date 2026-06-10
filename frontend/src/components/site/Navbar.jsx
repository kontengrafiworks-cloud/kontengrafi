import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/contacts";

const NAV_ITEMS = [
    { label: "Cerita", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Karya", href: "#portfolio" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
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
                    ? "backdrop-blur-xl bg-white/80 border-b border-slate-200/70"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
                <a
                    data-testid="nav-logo"
                    href="#top"
                    className="flex items-center gap-2 font-display font-black text-xl tracking-tight text-slate-900"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0047FF]" />
                    Kontengrafi
                </a>

                <ul className="hidden lg:flex items-center gap-10">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                data-testid={`nav-link-${item.label.toLowerCase()}`}
                                href={item.href}
                                className="text-sm font-semibold text-slate-700 hover:text-[#0047FF] transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047FF] group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    data-testid="nav-cta-whatsapp"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0047FF] transition-all duration-300 group"
                >
                    Mulai Proyek
                    <ArrowUpRight
                        size={16}
                        className="group-hover:rotate-45 transition-transform duration-300"
                    />
                </a>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-slate-200"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden bg-white border-t border-slate-100"
                >
                    <ul className="px-6 py-6 space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-lg font-semibold text-slate-900"
                                >
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
                                className="inline-flex items-center gap-2 bg-[#0047FF] text-white px-5 py-3 rounded-full text-sm font-semibold mt-2"
                            >
                                Mulai Proyek <ArrowUpRight size={16} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
