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

function App() {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
            <Header />
            <Home />
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <CodingProfiles />
            <GitHubActivity />
            <Contact />
            <Footer />
      </div>
    );
}

export default App;