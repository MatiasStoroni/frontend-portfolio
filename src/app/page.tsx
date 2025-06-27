/** @format */

import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";


export default function Home() {
    return (
        <main>
            <header>
                <Header />
            </header>
            <div>
               <Presentation/>
               <About/>
               <Experience/>
               <Education/>
               <Projects/>
            </div>
        </main>
    );
}
