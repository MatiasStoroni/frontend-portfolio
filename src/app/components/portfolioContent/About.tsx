/** @format */
import Image from "next/image";
import { User } from "../../types/User";

export default function About({ user }: {user: User}) {
    return (
        <section id="about" className="scroll-mt-16 bg-slate-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left: Profile Picture */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/images/profile.jpeg"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                        priority
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-orange-700">About Me</h2>
                    {user.description.split(".").map((sentence: string, index: number) => (
                        sentence.trim() && (
                            <p key={index} className="text-lg leading-relaxed text-slate-200">
                                {sentence.trim()}.
                            </p>
                        )
                    ))}
                    <a
                        href="/documents/MatiasStoroni_Resume.pdf"
                        download
                        className="inline-block mt-4 border-1 border-orange-800 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-200"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}