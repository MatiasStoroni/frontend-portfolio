/** @format */

import Link from "next/link";
import { MailIcon, DownloadIcon, LinkedinIcon } from "lucide-react"; // Optional: replace with your icon system

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-[10vh] bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-12">
            <div className="max-w-screen-md mx-auto text-center">
                <h2 className="text-3xl font-bold text-orange-700 mb-10">Contact</h2>

                <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-white/10">
                    <p className="text-lg text-white mb-4">Let’s connect and build something great together.</p>
                    <p className="text-slate-300 text-sm mb-8">
                        I'm currently open to remote opportunities and collaborative projects. Reach out through any of the platforms below.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-orange-500">
                        <Link href="mailto:your@email.com" className="hover:text-orange-300 transition-colors underline underline-offset-2">
                            📧 your@email.com
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-300 transition-colors underline underline-offset-2"
                        >
                            🔗 LinkedIn
                        </Link>

                        <Link
                            href="/documents/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-300 transition-colors underline underline-offset-2"
                        >
                            📄 Download Resume
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
