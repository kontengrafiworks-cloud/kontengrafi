import { CONTACT } from "@/lib/contacts";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-white border-t border-slate-200"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-2 font-display font-black text-xl tracking-tight text-slate-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0047FF]" />
                    {CONTACT.brand}
                </div>
                <div className="text-sm text-slate-500">
                    © {new Date().getFullYear()} {CONTACT.brand}. Next generation
                    content studio.
                </div>
                <div className="flex items-center gap-6 text-sm font-semibold text-slate-700">
                    <a
                        href={CONTACT.instagram}
                        className="hover:text-[#0047FF] transition-colors"
                        data-testid="footer-instagram"
                    >
                        Instagram
                    </a>
                    <a
                        href={CONTACT.tiktok}
                        className="hover:text-[#0047FF] transition-colors"
                        data-testid="footer-tiktok"
                    >
                        TikTok
                    </a>
                </div>
            </div>
        </footer>
    );
};
