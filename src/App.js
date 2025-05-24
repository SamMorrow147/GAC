import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import CreativeAgency from "./pages/Home/CreativeAgency";
import PersonalPortfolio from "./pages/Home/PersonalPortfolio";
import DigitalAgency from "./pages/Home/DigitalAgency";
import AboutUs from "./pages/About/AboutUs";
import AboutMe from "./pages/About/AboutMe";
import TeamPage from "./pages/Team/TeamPage";
import TeamPageDetails from "./pages/Team/TeamPageDetails";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  useEffect(() => {
    // Fix for horizontal scrolling issues
    document.body.style.overflowX = 'hidden';
    
    // Prevent touchmove events on the entire document from causing horizontal scrolling
    document.addEventListener('touchmove', function(e) {
      if (Math.abs(e.touches[0].clientX) > Math.abs(e.touches[0].clientY)) {
        e.preventDefault();
      }
    }, { passive: false });
    
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('touchmove', function() {});
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="248, 158, 82"
        outerAlpha={0.15}
        innerScale={0}
        outerScale={0}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Routes>
        <Route path="/" element={<CreativeAgency />} />
        <Route path="/home-two" element={<PersonalPortfolio />} />
        <Route path="/home-three" element={<DigitalAgency />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamPageDetails />} />
        <Route path="/project-details" element={<PortfolioDetailsPage />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
