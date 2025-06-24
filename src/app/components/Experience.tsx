/** @format */

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Experience() {
    return (
        <section className="bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto items-center">
                <div className="w-full space-y-6">
                    <h2 className="text-3xl text-center font-bold text-orange-700">Work Experience</h2>
                    {/*Experience card*/}
                    <div className="border-l-3 pl-4 border-orange-900 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-2xl border-b-1 border-slate-600">Conversational Agent Developer</h3>
                        <p className="italic text-lg text-slate-400 mb-4">PrestoBots S.A. / Sept. 2024 – Present</p>
                        <ul className="text-base md:text-lg leading-relaxed space-y-4 text-slate-200">
                            {[
                                "Developed conversational agents using Dialogflow CX combined with Generative AI (Gemini) to automate user interactions.",
                                "Automated the analysis of unresolved cases using Python and generative models for case classification.",
                                "Integrated chatbots with external services via Node.js, contributing to backend automation and API handling.",
                                "Designed and documented conversational flows with Miro, focusing on UX, fallback scenarios, and third-party system integration.",
                                "Provided informal technical consultancy on conversational agents, assisting in debugging and refining workflows.",
                            ].map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <PaperAirplaneIcon className="w-4 h-4 mt-1 text-orange-400 shrink-0" />
                                    <p className="text-slate-200">{text}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm md:text-base text-slate-400">
                            <span className="font-semibold text-slate-300">Key Tools:</span> Dialogflow CX, Gemini, n8n, Node.js, BigQuery, Python, Git
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
