/** @format */

import Image from "next/image";

export default function Presentation() {
    return (
        <div
            className="w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center relative px-4"
            style={{
                backgroundImage: "url(/images/presentation-bg.jpg)",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="flex flex-col items-center relative z-10 text-center max-w-2xl">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-1 border-white overflow-hidden flex items-center justify-center shadow-xl">
                    <Image
                        src="/images/profile.jpeg"
                        alt="Profile"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    Matias Storoni
                </h1>
                <h2 className="mt-2 text-base sm:text-lg md:text-xl font-medium text-white/80 drop-shadow">
                        Information Systems Engineer – Full Stack Developer Jr.
                </h2>
            </div>
        </div>
    );
}
