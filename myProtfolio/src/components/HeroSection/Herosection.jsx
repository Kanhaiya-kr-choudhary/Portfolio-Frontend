import { useEffect, useState } from "react";
import API from "../../api";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";


function Herosection() {
    const [user, setUser] = useState({})

    useEffect(() => {
        API.get('/api/user')
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section id="home"

            className="relative min-h-screen bg-center bg-cover bg-no-repeat p-20 scroll-mt-20"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/29445974/pexels-photo-29445974.jpeg')",
            }}
        >
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/80 to-slate-900/60"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-12">

                {/* LEFT CONTENT */}
                <div>
                    <p className="text-sm tracking-widest text-slate-400 mb-4">
                        WELCOME TO MY PROTFOLIO ✨
                    </p>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 text-white">
                        Hi, I’m <span className="text-blue-500">{user.name}</span>
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-6">
                        {user.role}
                    </h2>

                    <p className="max-w-xl text-slate-400 mb-8">
                        {user.description}
                    </p>

                    <div className="flex gap-4 mb-8">
                        <a
                            href="https://www.linkedin.com/in/kanhaiya-choudhary-444660191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 bg-blue-800 p-3 rounded-full text-white hover:bg-white hover:text-blue-800 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://wa.me/7857954322"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 bg-green-600 p-3 rounded-full text-white hover:bg-white hover:text-green-600 transition"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://github.com/Kanhaiya-kr-choudhary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 bg-gray-800 p-3 rounded-full text-white hover:bg-white hover:text-gray-800 transition"
                        >
                            <FaGithub />
                        </a>
                    </div>

                    <div className="flex gap-4">

                        <a href="#projects">
                            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium text-white">
                                My Projects
                            </button>
                        </a>



                        <a href="/Kanhaiya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition text-white">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>


                {/* <div className="hidden lg:flex justify-center items-center relative">
                   
                    <div className="absolute w-105 h-105 bg-purple-500 rounded-full blur-[140px] opacity-30"></div>

                    <div className="absolute w-95 h-95 bg-pink-500 rounded-full blur-[140px] opacity-30"></div>
                   
                    <div
                        className="relative w-80 h-80 overflow-hidden
    shadow-2xl border border-slate-700
    rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
                    >
                        <img
                            src="https://res.cloudinary.com/dixd43eq9/image/upload/v1773302401/Gemini_Generated_Image_4zzw2r4zzw2r4zzw-fotor-bg-remover-20260312132537_rsz2kp.png"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div> */}

                <div className="hidden lg:flex justify-center items-center relative">

                    {/* Solid background shape */}
                    <div className="absolute w-115 h-115 bg-linear-to-br from-slate-900 to-slate-800 rounded-[55%_45%_60%_40%/50%_60%_40%_50%]"></div>

                    {/* Glow layers */}
                    <div className="absolute w-105 h-105 bg-purple-500 rounded-full blur-[140px] opacity-30"></div>
                    <div className="absolute w-95 h-95 bg-pink-500 rounded-full blur-[140px] opacity-30"></div>

                    {/* Blob image container */}
                    <div
                        className="relative w-80 h-80 overflow-hidden 
    shadow-2xl border border-slate-700
    rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
                    >
                        <img
                            src="https://res.cloudinary.com/dixd43eq9/image/upload/v1773302401/Gemini_Generated_Image_4zzw2r4zzw2r4zzw-fotor-bg-remover-20260312132537_rsz2kp.png"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Herosection;
