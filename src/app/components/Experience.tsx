/** @format */

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const experience = [
    {
        title: "Conversational Agents Developer",
        company: "PrestoBots S.A.",
        period: "Sept. 2024 – Present",
        responsibilities: [
            "Developed conversational agents using Dialogflow CX and n8n to automate user interactions, including a chatbot that handled FAQs and automatically created support tickets for unresolved issues — reducing manual workload and increasing issue resolution efficiency.",
            "Built a healthcare chatbot capable of reading and interpreting medical orders to assist in appointment scheduling; implemented image-processing functionality using Google Vision API to extract data from prescriptions — automating intake and reducing response time for patients.",
            "Designed a general-purpose agent template focused on medical appointment management (reservation, modification, cancellation), enabling easy customization and faster deployment for different healthcare clients.",
            "Integrated chatbots with multiple external APIs using Node.js, handling backend tasks to ensure smooth data exchange between systems and real-time responses to user queries.",
            "Automated the analysis of unresolved chatbot conversations using Python and LLM-based models to identify failure patterns and provide explanations and possible causes. Implemented scheduled execution and periodic report generation to support continuous monitoring and assist in manual resolution.",
        ],
        tools: ["Dialogflow CX", "Gemini", "n8n", "Node.js", "BigQuery", "Python", "Git"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-16 bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto items-center">
                <div className="w-full space-y-6">
                    <h2 className="text-3xl text-center font-bold text-orange-700">Work Experience</h2>
                    {/*Experience card*/}
                    <div className="border-l-3 pl-4 border-orange-900 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-xl border-b-1 border-slate-600">Conversational Agents Developer</h3>
                        <p className="italic text-md text-slate-400 mb-4">PrestoBots S.A. / Sept. 2024 – Present</p>
                        <ul className="text-md md:text-md leading-relaxed space-y-4 text-slate-200">
                            {experience[0].responsibilities.map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <PaperAirplaneIcon className="w-4 h-4 mt-1 text-orange-400 shrink-0" />
                                    <p className="text-slate-200">{text}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm md:text-base text-slate-400">
                            <span className="font-semibold text-slate-300">Key Tools:</span> {experience[0].tools.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
