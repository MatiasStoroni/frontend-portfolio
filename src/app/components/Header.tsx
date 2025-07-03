/** @format */
"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
const sections = [
    { name: "Home", href: "#presentation" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    // Handle closing the menu smoothly and navigating to the selected section
    const handleClose = (href: string) => {
        setAnimateOut(true);
        setTimeout(() => {
            setOpen(false);
            setAnimateOut(false);
        }, 200);
        router.push(href);
    };

    return (
        <div className="bg-slate-800 p-4 h-16">
            <div className="flex items-center justify-between">
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 text-white text-lg">
                    {sections.map((section) => (
                        <li key={section.name} className="p-1 rounded-md hover:text-orange-600 duration-300">
                            <Link href={section.href}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
                {/* Hamburger Button (right side) */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-orange-700 hover:text-black duration-200 text-white hover:cursor-pointer ml-auto"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>
            {/* Overlay and Mobile Menu */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-30"
                        onClick={() => handleClose("/")}
                        aria-label="Close menu overlay"
                    />
                    <ul
                        className={`fixed top-0 right-0 w-1/3 max-w-xs h-full bg-slate-800 z-40 flex flex-col space-y-2 text-white text-lg p-6 shadow-lg
                        ${animateOut ? "animate-slide-out" : "animate-slide-in"}`}
                    >
                        <div className="flex items-center justify-between border-b border-white text-xl pb-2 mb-4">
                            <p>Menu</p>
                            <XMarkIcon
                                onClick={() => handleClose("/")}
                                className="h-6 w-6 hover:bg-amber-50 hover:cursor-pointer hover:text-black rounded-md"
                            />
                        </div>
                        {sections.map((section) => (
                            <li
                                key={section.href}
                                onClick={() => handleClose(section.href)}
                                className="p-1 rounded-md hover:bg-orange-800 hover:text-black hover:cursor-pointer duration-200"
                            >
                                <Link href={section.href}>{section.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
