/** @format */

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectType } from "../types/Project";

export default function Projects({ projects }: { projects: ProjectType[] }) {
    return (
        <section id="projects" className="scroll-mt-16 bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-center font-bold text-orange-700 mb-10">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-700 rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full">
                                <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="object-cover w-full h-full rounded-t-xl" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
                                <p className="text-slate-300 text-sm flex-1">{project.description}</p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="bg-slate-600 text-slate-100 px-2 py-1 rounded-md border border-slate-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-4 flex gap-4 text-sm">
                                    {project.repositoryUrl && (
                                        <Link
                                            href={project.repositoryUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-orange-500 hover:text-orange-300 transition-colors"
                                        >
                                            <FaGithub /> GitHub
                                        </Link>
                                    )}
                                    {project.liveDemoUrl && (
                                        <Link
                                            href={project.liveDemoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-orange-500 hover:text-orange-300 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </Link>
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
