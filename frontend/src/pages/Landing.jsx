import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { BesideYou } from "@/components/site/BesideYou";
import { PermissionCards } from "@/components/site/PermissionCards";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { AiPolicy } from "@/components/site/AiPolicy";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Landing() {
    return (
        <main
            data-testid="landing-page"
            className="bg-[#F4F6FA] text-[#1D1D1F] min-h-screen"
        >
            <Navbar />
            <Hero />
            <BesideYou />
            <PermissionCards />
            <Process />
            <Portfolio />
            <Testimonials />
            <Faq />
            <AiPolicy />
            <FinalCta />
            <Footer />
        </main>
    );
}
