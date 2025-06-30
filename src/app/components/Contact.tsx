/** @format */
'use client'
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí deberías conectar con un servicio de backend o API para enviar el correo
        alert("Message sent! (Función aún no implementada)");
    };

    return (
        <section id="contact" className="scroll-mt-[10vh] bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-12">
            <div className="max-w-screen-md mx-auto text-center">
                <h2 className="text-3xl font-bold text-orange-700 mb-10">Contact</h2>

                <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-xl shadow-lg border border-white/10 space-y-6 text-left">
                    <p className="text-lg text-white">I am currently open to new opportunities. If you believe my profile aligns with your needs, feel free to reach out!</p>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm text-slate-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-700 text-white px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-slate-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-700 text-white px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-700 text-white px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <button type="submit" className="mt-4 bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
