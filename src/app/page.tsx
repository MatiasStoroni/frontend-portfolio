/** @format */

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
            </div>
        </main>
    );
}
