import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold text-white">Kanhaiya Kumar Choudhary</h2>
                    <p className="mt-3 text-sm">
                        Full Stack Developer passionate about building modern,
                        responsive, and user-friendly web applications.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white transition">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Connect</h3>
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-slate-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} Kanhaiya Kumar Choudhary. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;