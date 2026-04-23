import React, { useState } from "react";
import API from "../../api";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending message...");
        try {
            await API.post("/api/contact", formData)
            setStatus("Message sent successfully! ✅")
            setFormData({ name: "", email: "", subject: "", message: "" })
        } catch (error) {
            setStatus("Failed to send message. Please try again. ❌")
        }
    };

    return (
        <section id="contact" className="scroll-mt-20 min-h-screen flex flex-col items-center justify-start bg-linear-to-br from-slate-900 to-slate-800 p-6 pt-20">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">
                <span className="text-blue-500">Contact</span> Me
            </h2>
            <div className="bg-slate-900 rounded-3xl shadow-2xl max-w-3xl w-full p-10 text-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="Your Name" required
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="Your Email" required
                            className="flex-1 px-4 py-3 mt-4 md:mt-0 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                        placeholder="Subject"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <textarea name="message" value={formData.message} onChange={handleChange}
                        placeholder="Your Message" rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <button type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg">
                        Send Message
                    </button>
                    {status && <p className="text-center text-blue-400 mt-3">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;