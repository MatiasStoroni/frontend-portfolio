/** @format */
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { ExperienceType } from "../types/Experience";

export default function Experience({ experiences }: { experiences: ExperienceType[] }) {
    return (
        <section id="experience" className="scroll-mt-16 bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto items-center">
                <div className="w-full space-y-6">
                    <h2 className="text-3xl text-center font-bold text-orange-700">Work Experience</h2>
                    {experiences.map(exp => (
                        <div key={exp.id} className="border-l-3 pl-4 border-orange-900 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h3 className="text-xl border-b-1 border-slate-600">{exp.title}</h3>
                            <p className="italic text-md text-slate-400 mb-4">{exp.company} / {exp.period}</p>
                            <ul className="text-md md:text-md leading-relaxed space-y-4 text-slate-200">
                                {exp.responsibilities.map((responsibility: string, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <PaperAirplaneIcon className="w-4 h-4 mt-1 text-orange-400 shrink-0" />
                                        <p className="text-slate-200">{responsibility}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm md:text-base text-slate-400">
                                <span className="font-semibold text-slate-300">Key Tools:</span> {exp.tools.join(", ")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
