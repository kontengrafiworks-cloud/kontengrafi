import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { BesideYou } from "@/components/site/BesideYou";
import { PermissionCards } from "@/components/site/PermissionCards";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Plans } from "@/components/site/Plans";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Landing() {
    return (
        <main
            data-testid="landing-page"
            className="paper text-[#14183A] min-h-screen"
        >
            <Navbar />
            <Hero />
            <BesideYou />
            <PermissionCards />
            <Process />
            <Testimonials />
            <Plans />
            <Faq />
            <FinalCta />
            <Footer />
        </main>
    );
}
