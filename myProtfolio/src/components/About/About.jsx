import { useEffect, useState } from "react";
import API from "../../api";
function AboutSection() {


    const [about, setAbout] = useState({})
    useEffect(() => {
        API.get('/api/about')
            .then((response) => {
                setAbout(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

            {/* subtle background lights */}
            <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-slate-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT – IMAGE */}
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

                {/* RIGHT – CONTENT */}
                <section id="about" className="scroll-mt-20">
                    <div className="text-slate-200">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-blue-500">Me</span>
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Hi, I’m <span className="text-white font-medium">{about.name}</span>, {about.intro}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {about.description}
                        </p>

                        {/* highlight */}
                        <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4 mb-8 backdrop-blur-lg">
                            <span className="text-blue-400 text-xl">✔</span>
                            <p className="text-slate-300">
                                {about.highlight}
                            </p>
                        </div>




                    </div>
                </section>
            </div>
        </section>
    );
}

export default AboutSection;
