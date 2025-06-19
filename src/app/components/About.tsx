/** @format */

import Image from "next/image";

export default function About() {
    return (
        <section className="bg-slate-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left: Profile Picture */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/your-photo.jpg" // <-- replace with your image path
                        alt="Profile"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-indigo-400">About Me</h2>
                    <p className="text-lg leading-relaxed text-slate-200">
                        I’m an Information Systems Engineer with a strong background in web development, network administration, and cybersecurity. I love
                        applying tech to real-world problems and continuously learning new tools in this fast-moving field.
                    </p>

                    <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow transition">
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
}
