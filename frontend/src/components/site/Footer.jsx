import { CONTACT } from "@/lib/contacts";
import { BRAND, Pinwheel } from "@/lib/brand";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-[#14183A] text-white relative overflow-hidden"
        >
            <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 pb-10">
                {/* Massive wordmark */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-12 h-12 rounded-full bg-white/10 grid place-items-center text-white">
                        <Pinwheel className="w-7 h-7 animate-spin-slow" />
                    </span>
                    <div
                        className="font-display font-bold tracking-[-0.04em]"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1 }}
                    >
                        {BRAND.name}
                        <span className="text-[#7E94FF]">.</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Studio
                        </div>
                        <ul className="space-y-2.5 text-sm text-white/80">
                            <li>
                                <a href="#beside" className="hover:text-white">
                                    Cara Kerja
                                </a>
                            </li>
                            <li>
                                <a href="#cards" className="hover:text-white">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-white">
                                    Proses
                                </a>
                            </li>
                            <li>
                                <a href="#plans" className="hover:text-white">
                                    Plan
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Bantuan
                        </div>
                        <ul className="space-y-2.5 text-sm text-white/80">
                            <li>
                                <a href="#faq" className="hover:text-white">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="hover:text-white"
                                    data-testid="footer-email"
                                >
                                    {CONTACT.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Sosial
                        </div>
                        <ul className="space-y-2.5 text-sm text-white/80">
                            <li>
                                <a
                                    href={CONTACT.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
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
                                    className="hover:text-white"
                                    data-testid="footer-tiktok"
                                >
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Lokasi
                        </div>
                        <div className="text-sm text-white/80">
                            Jakarta — Bandung
                            <br />
                            Indonesia
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <span>
                        © {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}
                    </span>
                    <span>{BRAND.tagline}</span>
                </div>
            </div>
        </footer>
    );
};
