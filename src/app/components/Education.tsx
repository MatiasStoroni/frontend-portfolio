/** @format */

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const education = [
    {
        title: "Bachelor's Degree in Information Systems",
        year: "2019 - 2024",
        description: "Studied software development, project management, networking, and cybersecurity.",
        project: {
            title: "🎓 Final Thesis: Academic Assistance Platform",
            summary:
                "Designed to improve academic performance and reduce stress, this web app was built using Java (backend), Next.js (frontend), and MySQL (database), all containerized with Docker. It features Auth0-based secure login and a Python AI model for automating class transcription and exam simulation. The development process followed an agile, iterative methodology with defined roles, sprints, and working prototypes.",
            tech: ["Java", "Next.js", "MySQL", "Docker", "Auth0", "Python", "AI"],
        },
    },
    {
        title: "Full Stack Developer Course – #YoProgramo",
        year: "2022",
        description:
            "Intensive government-backed course covering frontend (Angular), backend (Spring Boot), databases (MySQL), and deployment (Firebase, Heroku).",
    },
];

export default function Education() {
    return (
        <section className="bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-12">
            <div className="max-w-screen-md mx-auto">
                <h2 className="text-3xl text-center font-bold text-orange-700">Education</h2>

                <div className="relative mt-5">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-orange-600 opacity-30" />

                    <div className="space-y-12 pl-10">
                        {education.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-slate-800 p-5 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-all">
                                    <p className="text-sm text-teal-400 mb-1">{item.year}</p>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mt-2">{item.description}</p>

                                    {item.project && (
                                        <div className="mt-4 text-sm text-slate-300">
                                            <p className="font-semibold text-slate-100">{item.project.title}</p>
                                            <p className="mt-1">{item.project.summary}</p>

                                            {/* Tech badges */}
                                            <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                                {item.project.tech?.map((tech) => (
                                                    <span key={tech} className="bg-slate-700 text-slate-200 px-2 py-1 rounded-md border border-slate-600">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Optional link */}
                                            <div className="mt-3">
                                                <Link href="" className="text-orange-600 hover:text-teal-300 hover:cursor-pointer text-md underline underline-offset-2 flex gap-2 items-center">
                                                    <FaGithub/>View project details
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
