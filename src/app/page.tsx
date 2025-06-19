/** @format */

import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Presentation from "./components/Presentation";


export default function Home() {
    return (
        <main>
            <header>
                <Header />
            </header>
            <div>
               <Presentation/>
               <About/>
               {/* <Experience/> */}
            </div>
        </main>
    );
}
