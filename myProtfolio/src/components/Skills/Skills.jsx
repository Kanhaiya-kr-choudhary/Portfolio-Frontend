import { useEffect, useState } from "react";
import API from "../../api";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaBootstrap, FaGithub, FaWordpress
} from "react-icons/fa";

import {
    SiTypescript, SiExpress, SiMongodb,
    SiMysql, SiTailwindcss
} from "react-icons/si";

const iconMap = {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    SiTypescript,
    FaReact,
    FaNodeJs,
    SiExpress,
    SiMongodb,
    SiMysql,
    FaBootstrap,
    SiTailwindcss,
    FaGithub,
    FaWordpress
};

const SkillsSlider = () => {

    const [skills, setSkills] = useState([]);
    const [slide, setSlide] = useState(0);

    const itemsPerSlide = 8;

    useEffect(() => {
        API.get("/api/skills")
            .then((response) => {
                setSkills(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const totalSlides = Math.ceil(skills.length / itemsPerSlide);

    const next = () => setSlide((prev) => (prev + 1) % totalSlides);
    const prev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

    return (
        <section
            id="skills"
            className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <p className="text-slate-400">
                        Technologies I work with to build modern applications
                    </p>
                </div>

                <div className="relative overflow-hidden">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="min-w-full grid grid-cols-2 sm:grid-cols-4 gap-6"
                            >
                                {skills
                                    .slice(
                                        slideIndex * itemsPerSlide,
                                        slideIndex * itemsPerSlide + itemsPerSlide
                                    )
                                    .map((skill, index) => {

                                        const Icon = iconMap[skill.icon];

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:-translate-y-2 transition-all duration-300"
                                            >
                                                {Icon && <Icon className={`text-4xl mb-3 ${skill.color}`} />}

                                                <p className="text-slate-200 font-medium">
                                                    {skill.name}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl text-slate-400 hover:text-white"
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 text-3xl text-slate-400 hover:text-white"
                    >
                        ›
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setSlide(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${slide === i
                                ? "bg-blue-500"
                                : "bg-slate-600 hover:bg-slate-400"
                                }`}
                        ></span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSlider;