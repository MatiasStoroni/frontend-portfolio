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
                <div className="w-48 h-48 rounded-full border-2 border-white overflow-hidden flex items-center justify-center shadow-lg bg-white/80">
                    <Image src="/images/profile.jpeg" alt="Profile" width={192} height={192} className="object-cover w-full h-full" />
                </div>
                <h1 className="mt-8 text-3xl font-bold text-white drop-shadow-lg">Matias Storoni</h1>
                <h2 className="mt-2 text-xl font-medium text-white/80 drop-shadow">Ingeniero en Sistemas de Informacion - Desarrollador Full Stack Jr.</h2>
                <div className="flex flex-col md:flex-row gap-6 mt-5 w-3/5 text-white text-center text-lg bg-white/20 p-4 rounded-lg shadow-lg">
                    <p className="bg-white/20 rounded-lg p-2 flex-1 flex items-center">
                        Information Systems Engineer with a strong background in analysis, design, and development of web applications, complemented by
                        knowledge in network administration, cybersecurity, and software projects management.
                    </p>
                    <p className="bg-white/20 rounded-lg p-2 flex-1 flex items-center">
                        I am passionate about applying technology in practical ways to solve real-world problems, and I am committed to continuous
                        learning—constantly researching and training in new tools to stay up-to-date in a rapidly evolving environment.
                    </p>
                </div>
            </div>
        </div>
    );
}
