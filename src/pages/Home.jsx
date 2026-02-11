import { Hero } from "../components/Hero";
import { TrustedPartners } from "../components/TrustedPartners";
import { Services } from "../components/Services";
import { VideoSection } from "../components/VideoSection";
import { Gallery } from "../components/Gallery";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustedPartners />
            <Services />
            <VideoSection />
            <Gallery />
            <Projects />
            <About />
            <Testimonials />
        </>
    );
}

