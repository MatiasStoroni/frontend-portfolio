/** @format */

import Image from "next/image";

const projects = [
    {
        title: "BenkyNote – Academic Platform",
        description: "AI-powered platform to help students plan and automate tasks like transcription and exam simulation.",
        tech: ["Next.js", "Java", "MySQL", "Auth0", "Docker", "Python"],
        image: "https://picsum.photos/500/300?random=1",
        repo: "https://github.com/MatiasStoroni/Benkynote",
        demo: "https://benkynote.vercel.app",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js and TailwindCSS, featuring dark mode and project showcase.",
        tech: ["Next.js", "Tailwind", "React", "Git"],
        image: "https://picsum.photos/500/300?random=2",
        repo: "https://github.com/MatiasStoroni/portfolio",
    },
    {
        title: "BenkyNote – Academic Platform",
        description: "AI-powered platform to help students plan and automate tasks like transcription and exam simulation.",
        tech: ["Next.js", "Java", "MySQL", "Auth0", "Docker", "Python"],
        image: "https://picsum.photos/500/300?random=1",
        repo: "https://github.com/MatiasStoroni/Benkynote",
        demo: "https://benkynote.vercel.app",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js and TailwindCSS, featuring dark mode and project showcase.",
        tech: ["Next.js", "Tailwind", "React", "Git"],
        image: "https://picsum.photos/500/300?random=2",
        repo: "https://github.com/MatiasStoroni/portfolio",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-[10vh] bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto items-center">
                <div className="w-full space-y-6">
                    <h2 className="text-3xl text-center font-bold text-orange-700">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/10 flex flex-col"
                            >
                                {/* Image */}
                                <div className="h-48 w-full relative">
                                    <Image src={project.image} alt={project.title} width={500} height={300} className="object-cover w-full h-full" />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
                                    <p className="text-slate-200 text-sm flex-1">{project.description}</p>

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
                                                className="text-orange-500 hover:text-orange-300 underline underline-offset-2"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-orange-500 hover:text-orange-300 underline underline-offset-2"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
