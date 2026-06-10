import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Landing() {
    return (
        <main data-testid="landing-page" className="bg-white text-slate-900">
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
