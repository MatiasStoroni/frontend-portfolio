/** @format */

import Image from "next/image";

export default function Presentation() {
    return (
        <div
            className="w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url(/images/presentation-bg.jpg)",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden flex items-center justify-center shadow-lg bg-white/80">
                    <Image
                        src="https://picsum.photos/200"
                        alt="Profile"
                        width={192}
                        height={192}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="mt-8 text-4xl font-bold text-white drop-shadow-lg">Matias Storoni</h1>
                <h2 className="mt-2 text-xl font-medium text-white/80 drop-shadow">Ingeniero en Sistemas de Informacion - Desarrollador Full Stack Jr.</h2>
                <div className="flex space-x-8 mt-5 text-white">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}