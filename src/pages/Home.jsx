import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { VideoSection } from "../components/VideoSection";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <VideoSection />
            <Projects />
            <About />
            <Testimonials />
        </>
    );
}
