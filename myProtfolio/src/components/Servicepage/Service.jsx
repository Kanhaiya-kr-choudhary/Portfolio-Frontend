import { useState, useEffect } from "react";
import API from "../../api";
function Services() {

    const [services, setServices] = useState([])
    useEffect(() => {
        API.get('/api/services')
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const cardsPerView = 4;
    const totalSlides = Math.ceil(services.length / cardsPerView);
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section id="services" className="scroll-mt-20 relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    My <span className="text-blue-500">Services</span>
                </h2>
                <p className="text-slate-400">
                    Professional solutions built for modern businesses.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Slider wrapper */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${slide * 100}%)`,
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {services
                                    .slice(
                                        slideIndex * cardsPerView,
                                        slideIndex * cardsPerView + cardsPerView
                                    )
                                    .map((service, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300"
                                        >
                                            <h3 className="text-xl font-semibold text-white mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">
                                                {service.desc}
                                            </p>

                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl text-slate-400 hover:text-white"
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 text-3xl text-slate-400 hover:text-white"
                >
                    ›
                </button>

                {/* Dots */}
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
}

export default Services;
