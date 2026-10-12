import { useEffect, useState } from "react";
import Lenis from "lenis";
import About from "./components/About";
import CodingProfiles from "./components/Codingprofiles";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GitHubActivity from "./components/Githubactivity";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Loader from "./components/Loader";
import { setScroller } from "./utils/scrollToSection";
import Reveal from "./components/Reveal";

function App() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        setScroller(lenis);

        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            setScroller(null);
        };
    }, []);

    return (
      <div className="min-h-screen bg-slate-950 text-white">
          {loading && <Loader onFinish={() => setLoading(false)} />}
            <Header />
            <Home />
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <CodingProfiles />
            <GitHubActivity />
            <Contact />
            <Reveal direction="none"><Footer /></Reveal>
      </div>
    );
}

export default App;