import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { VideoSection } from "./components/VideoSection";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-secondary selection:text-primary scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <VideoSection />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

export default App;
