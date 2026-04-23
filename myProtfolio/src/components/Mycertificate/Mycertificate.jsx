import { useState, useEffect } from "react";
import API from "../../api";
const Mycertificate = () => {



    const [slide, setSlide] = useState(0);
    const [certificate, setCertificate] = useState([])

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(certificate.length / itemsPerSlide);

    const next = () => setSlide((prev) => (prev + 1) % totalSlides);
    const prev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);


    useEffect(() => {
        API.get("/api/certificate")
            .then((response) => {
                setCertificate(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        My <span className="text-blue-500">Certificate</span>
                    </h2>
                    <p className="text-slate-400">
                        Some Certificate that I have got
                    </p>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                    >

                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (

                            <div
                                key={slideIndex}
                                className="min-w-full flex justify-center gap-6 flex-wrap"
                            >

                                {certificate
                                    .slice(
                                        slideIndex * itemsPerSlide,
                                        slideIndex * itemsPerSlide + itemsPerSlide
                                    )
                                    .map((certificate, index) => (

                                        <div
                                            key={index}
                                            className="card bg-white/5 border border-white/10 w-96 backdrop-blur-lg shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                                        >
                                            <figure>
                                                <img
                                                    src={certificate.img}
                                                    alt={certificate.title}
                                                    className="h-56 w-full object-cover"
                                                />
                                            </figure>

                                            <div className="card-body p-4">
                                                <h2 className="card-title text-white text-xl font-semibold">
                                                    {certificate.title}
                                                </h2>

                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {certificate.desc}
                                                </p>



                                            </div>
                                        </div>

                                    ))}
                            </div>

                        ))}
                    </div>


                </div>

                {/* dots */}

                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setSlide(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${slide === i
                                ? "bg-blue-500"
                                : "bg-slate-600 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Mycertificate;