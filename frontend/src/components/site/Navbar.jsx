import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/contacts";
import { BRAND } from "@/lib/brand";

const NAV_ITEMS = [
    { label: "Cara Kerja", href: "#beside" },
    { label: "Layanan", href: "#cards" },
    { label: "Proses", href: "#process" },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#F4F6FA]/85 backdrop-blur-xl border-b border-[#0B1120]/8"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-[1280px] mx-auto h-16 md:h-20 px-6 md:px-10 flex items-center justify-between">
                <a
                    data-testid="nav-logo"
                    href="#top"
                    className="flex items-center gap-2 text-[#0B1120]"
                >
                    <span className="font-semibold text-base md:text-lg tracking-tight">
                        {BRAND.name}
                    </span>
                </a>

                <ul className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                data-testid={`nav-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                                href={item.href}
                                className="text-sm font-medium text-[#1D1D1F]/70 hover:text-[#0B1120] transition-colors"
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
                    className="hidden lg:inline-flex items-center gap-2 bg-[#2A4FE0] hover:bg-[#1F3DBF] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                >
                    Mulai Sekarang
                </a>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-[#0B1120]/5 text-[#0B1120]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden bg-white border-t border-[#0B1120]/8"
                >
                    <ul className="px-6 py-4">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    data-testid={`nav-mobile-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-2 py-3 text-base font-medium text-[#0B1120] border-b border-[#0B1120]/5 last:border-b-0"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-3">
                            <a
                                data-testid="nav-mobile-cta"
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-[#2A4FE0] text-white px-5 py-3 rounded-full text-sm font-medium"
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
