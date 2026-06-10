import { CONTACT } from "@/lib/contacts";
import { BRAND } from "@/lib/brand";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="border-t border-[#0B1120]/8"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#1D1D1F]/55">
                <div className="flex items-center gap-2 text-[#0B1120]">
                    <span className="font-semibold text-base tracking-tight">
                        {BRAND.name}
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    <a
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0B1120]"
                        data-testid="footer-instagram"
                    >
                        Instagram
                    </a>
                </div>
                <span>
                    © {new Date().getFullYear()} {BRAND.name}
                </span>
            </div>
        </footer>
    );
};
