/** @format */

import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

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
            <body className={`${montserrat.className}`}>{children}</body>
        </html>
    );
}
