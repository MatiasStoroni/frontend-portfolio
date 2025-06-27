/** @format */

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <main>
            <header className="sticky top-0 z-50 bg-slate-900 shadow">
                <Header />
            </header>
            <div>
                <Presentation />
                <About />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </div>
            <footer className="text-center text-sm bg-black text-slate-400 py-2">© 2025 Matías Storoni. All rights reserved.</footer>
        </main>
    );
}
