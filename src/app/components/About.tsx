/** @format */

import Image from "next/image";

export default function About() {
    return (
        <section className="bg-slate-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left: Profile Picture */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/images/profile.jpeg" // <-- replace with your image path
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-orange-700">About Me</h2>
                    <p className="text-lg leading-relaxed text-slate-200">
                        My name is Matias, I am an Information Systems Engineer with a strong background in analysis, design, and development of web
                        applications, complemented by knowledge in network administration, cybersecurity, and software projects management.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-200">
                        I am passionate about applying technology in practical ways to solve real-world problems, and I am committed to continuous
                        learning—constantly researching and training in new tools to stay up-to-date in a rapidly evolving environment.
                    </p>
                    <button className="mt-4 border-1 border-orange-800 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-xl shadow transition">
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
}
