import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import EmpowermentPage from "./pages/Empowerment";
import ContactPage from "./pages/Contact";

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen font-sans selection:bg-secondary selection:text-primary scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/empowerment" element={<EmpowermentPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
