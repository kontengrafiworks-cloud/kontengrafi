import { CONTACT } from "@/lib/contacts";
import { BRAND } from "@/lib/brand";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="border-t border-[#0B1120]/8"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-10">
                <div className="flex items-center gap-2 mb-10 text-[#0B1120]">
                    <span className="font-semibold text-lg tracking-tight">
                        {BRAND.name}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="text-xs font-semibold text-[#1D1D1F]/45 uppercase tracking-wider mb-4">
                            Studio
                        </div>
                        <ul className="space-y-2.5 text-sm text-[#0B1120]/75">
                            <li>
                                <a href="#beside" className="hover:text-[#0B1120]">
                                    Cara Kerja
                                </a>
                            </li>
                            <li>
                                <a href="#cards" className="hover:text-[#0B1120]">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-[#0B1120]">
                                    Proses
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-[#1D1D1F]/45 uppercase tracking-wider mb-4">
                            Bantuan
                        </div>
                        <ul className="space-y-2.5 text-sm text-[#0B1120]/75">
                            <li>
                                <a href="#faq" className="hover:text-[#0B1120]">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="hover:text-[#0B1120]"
                                    data-testid="footer-email"
                                >
                                    {CONTACT.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-[#1D1D1F]/45 uppercase tracking-wider mb-4">
                            Sosial
                        </div>
                        <ul className="space-y-2.5 text-sm text-[#0B1120]/75">
                            <li>
                                <a
                                    href={CONTACT.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#0B1120]"
                                    data-testid="footer-instagram"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href={CONTACT.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#0B1120]"
                                    data-testid="footer-tiktok"
                                >
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-[#1D1D1F]/45 uppercase tracking-wider mb-4">
                            Lokasi
                        </div>
                        <div className="text-sm text-[#0B1120]/75">
                            Jakarta — Bandung
                            <br />
                            Indonesia
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#0B1120]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#1D1D1F]/50">
                    <span>
                        © {new Date().getFullYear()} {BRAND.name}
                    </span>
                    <span>{BRAND.tagline}</span>
                </div>
            </div>
        </footer>
    );
};
