/** @format */

export default function Education() {
    const education = [
        {
            title: "High School Degree",
            year: "2013 - 2018",
            description: "Completed foundational studies with a focus on science and technology. Developed strong analytical and teamwork skills.",
        },
        {
            title: "Bachelor's Degree in Information Systems",
            year: "2019 - 2024",
            description:
                "Studied software development, project management, networking, and cybersecurity. Final project involved AI and full-stack web development.",
        },
        {
            title: "Full Stack Developer Course – #YoProgramo",
            year: "2024 - Present",
            description:
                "Intensive government-backed course covering frontend (Angular), backend (Spring Boot), databases (MySQL), and deployment (Firebase, Heroku).",
        },
    ];

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
                                {/* Card */}
                                <div className="bg-slate-800 hover:bg-slate-700 p-5 rounded-lg border border-white/10 shadow-md hover:shadow-lg duration-400">
                                    <p className="text-sm text-orange-400 mb-1">{item.year}</p>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
