/** @format */
"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    // Handle closing with animation
    // Waits till the menu is closed to remove it from the DOM (open = false)
    const handleClose = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setOpen(false);
            setAnimateOut(false);
        }, 200); // Match animation duration
    };

    return (
        <div className="bg-slate-800 p-4 max-h-[10vh]">
            <div className="flex items-center justify-between">
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 text-white text-lg">
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#experiencia">Experience</Link>
                    </li>
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#educacion">Education</Link>
                    </li>
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#proyectos">Projects</Link>
                    </li>
                    <li className="p-1 rounded-md hover:text-orange-600 duration-300">
                        <Link href="#contacto">Contact</Link>
                    </li>
                </ul>
                {/* Hamburger Button (right side) */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-green-300 hover:text-black duration-200 text-white hover:cursor-pointer ml-auto"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>
            {/* Overlay and Mobile Menu */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-30"
                        onClick={handleClose}
                        aria-label="Close menu overlay"
                    />
                    <ul
                        className={`fixed top-0 right-0 w-1/3 max-w-xs h-full bg-slate-800 z-40 flex flex-col space-y-2 text-white text-lg p-6 shadow-lg
                        ${animateOut ? "animate-slide-out" : "animate-slide-in"}`}
                    >
                        <div className="flex items-center justify-between border-b border-white text-xl pb-2 mb-4">
                            <p>Menu</p>
                            <XMarkIcon
                                onClick={handleClose}
                                className="h-6 w-6 hover:bg-amber-50 hover:cursor-pointer hover:text-black rounded-md"
                            />
                        </div>
                        <li onClick={handleClose} className="p-2 rounded-md hover:bg-green-300 hover:text-black hover:cursor-pointer">
                            <Link href="#">
                                Home
                            </Link>
                        </li>
                        <li onClick={handleClose} className="p-2 rounded-md hover:bg-green-300 hover:text-black hover:cursor-pointer">
                            <Link href="#experiencia">
                                Experience
                            </Link>
                        </li>
                        <li onClick={handleClose} className="p-2 rounded-md hover:bg-green-300 hover:text-black hover:cursor-pointer">
                            <Link href="#educacion">
                                Education
                            </Link>
                        </li>
                        <li onClick={handleClose} className="p-2 rounded-md hover:bg-green-300 hover:text-black hover:cursor-pointer">
                            <Link href="#proyectos">
                                Projects
                            </Link>
                        </li>
                        <li className="p-2 rounded-md hover:bg-green-300 hover:text-black hover:cursor-pointer">
                            <Link href="#contacto">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}