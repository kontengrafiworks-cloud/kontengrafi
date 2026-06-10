import { CONTACT } from "@/lib/contacts";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-[#0A1A4A] text-white border-t border-white/10"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 py-10 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-4 flex items-center gap-2 font-display font-black text-lg uppercase tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-[#3D7BFF]" />
                    {CONTACT.brand}
                    <span className="text-[#3D7BFF]">®</span>
                </div>
                <div className="col-span-12 md:col-span-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    © {new Date().getFullYear()} — Next Generation Content
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center md:justify-end gap-6 font-mono text-[11px] uppercase tracking-[0.15em]">
                    <a
                        href={CONTACT.instagram}
                        className="text-white/70 hover:text-white transition-colors"
                        data-testid="footer-instagram"
                    >
                        Instagram
                    </a>
                    <a
                        href={CONTACT.tiktok}
                        className="text-white/70 hover:text-white transition-colors"
                        data-testid="footer-tiktok"
                    >
                        TikTok
                    </a>
                </div>
            </div>
        </footer>
    );
};
