/** @format */

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { EducationType } from "../../types/Education";

export default function Education({ educations }: { educations: EducationType[] }) {
    return (
        <section id="education" className="scroll-mt-16 bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-12">
            <div className="max-w-screen-md mx-auto">
                <h2 className="text-3xl text-center font-bold text-orange-700">Education</h2>

                <div className="relative mt-5">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-orange-600 opacity-30" />

                    <div className="space-y-12 pl-10">
                        {educations?.map(education => (
                            <div key={education.id} className="relative group">
                                <div className="bg-slate-800 p-5 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-all">
                                    <p className="text-sm text-teal-400 mb-1">{education.yearCompleted}</p>
                                    <h3 className="text-lg font-semibold text-white">{education.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mt-2">{education.description}</p>

                                    {/* Optional Project */}
                                    {education.project && (
                                        <div className="mt-4 text-sm text-slate-300">
                                            <p className="font-semibold text-slate-100">{education.project.title}</p>
                                            <p className="mt-1">{education.project.summary}</p>

                                            {/* Tech badges */}
                                            <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                                {education.project.techStack?.map((tech) => (
                                                    <span key={tech} className="bg-slate-700 text-slate-200 px-2 py-1 rounded-md border border-slate-600">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Optional resource */}
                                    {education.resource && (
                                        <div className="mt-4 flex flex-wrap gap-4">
                                            <Link
                                                key={education.resource.id}
                                                href={education.resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-400 underline underline-offset-2 text-sm flex items-center gap-1"
                                            >
                                                {(education.resource.type === "repository") ?
                                                    <>
                                                        <FaGithub className="w-5 h-5 text-white" /> View Github Repository
                                                    </>
                                                    :
                                                    <>
                                                        <PiCertificateLight className="w-5 h-5 text-white" /> View Certificate
                                                    </>
                                                }
                                            </Link>
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
