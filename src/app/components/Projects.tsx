/** @format */

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    repo?: string;
    demo?: string | null;
};

const projects: Project[] = [
    {
        title: "BenkyNote – Academic Platform",
        description: "AI-powered platform to help students plan and automate tasks like transcription and exam simulation.",
        tech: ["Next.js", "Java", "MySQL", "Auth0", "Docker", "Python", "Git"],
        image: "/images/benkynote.png",
        repo: "https://github.com/MatiasStoroni/Benkynote",
        demo: null,
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio developed with Next.js and Tailwind CSS, featuring responsive design and smooth section-based navigation. It showcases key projects, education, and experience using a clean UI and reusable components—highlighting both technical proficiency and attention to user experience.",
        tech: ["Next.js", "Tailwind", "React", "Git"],
        image: "/images/portfolio.png",
        repo: "https://github.com/MatiasStoroni/portfolio",
        demo: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-16 bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-center font-bold text-orange-700 mb-10">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-700 rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full">
                                <Image src={project.image} alt={project.title} width={500} height={300} className="object-cover w-full h-full rounded-t-xl" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
                                <p className="text-slate-300 text-sm flex-1">{project.description}</p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-slate-600 text-slate-100 px-2 py-1 rounded-md border border-slate-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-4 flex gap-4 text-sm">
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-orange-500 hover:text-orange-300 transition-colors"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-orange-500 hover:text-orange-300 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
