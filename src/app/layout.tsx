/** @format */

import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/portfolioContent/Header";
import Presentation from "./components/portfolioContent/Presentation";
import Contact from "./components/portfolioContent/Contact";

export const metadata: Metadata = {
    title: "Matias Storoni - Portfolio",
    description: "Personal portfolio of Matias Storoni",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"], // podés cambiar los pesos según lo que necesites
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body className={`${montserrat.className}`}>
                <main>
                    <header className="sticky top-0 z-50 bg-slate-900 shadow">
                        <Header />
                    </header>

                    <div>
                        {/* Always show Presentation */}
                        <Presentation />

                        {children}
                        
                        {/* Always show Contact */}
                        <Contact />
                    </div>

                    <footer className="text-center text-sm bg-black text-slate-400 py-2">
                        © 2025 Matías Storoni. All rights reserved.
                    </footer>
                </main>
            </body>
        </html>
    );
}
