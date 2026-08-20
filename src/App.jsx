import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Technologies />
                <Projects />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </>
    );
}