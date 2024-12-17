import React, { useRef } from "react";

const Proyectos: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
        }
    };

    // Array de proyectos para hacer el código más mantenible
    const proyectos = [
        { img: "captura_2.png", titulo: "Vocaliza y Aprende" },
        { img: "captura_1.png", titulo: "Pizarra Digital" },
        { img: "captura_8.png", titulo: "Raton Tactil" },
        { img: "captura_10.png", titulo: "Planificador de clase con IA" },
        { img: "captura_9.png", titulo: "Decodificación con IA - Sistema Braille" },
        { img: "captura_6.png", titulo: "Pingüi en 2D" },
        { img: "captura_5.png", titulo: "VIDEOJUEGO DE MARIO, A VOZ" },
        { img: "captura_7.png", titulo: "Pomodoro Digital" }
    ];

    return (
        <div className="relative w-full mx-auto mt-32 mb-16">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-900">
                PROYECTOS REALIZADOS POR EL DOCENTE
            </h2>

            <button
                className="absolute z-10 p-3 text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-lg left-4 top-1/2 hover:bg-blue-700"
                onClick={scrollLeft}
            >
                ◀
            </button>
            <button
                className="absolute z-10 p-3 text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-lg right-4 top-1/2 hover:bg-blue-700"
                onClick={scrollRight}
            >
                ▶
            </button>

            <div
                ref={carouselRef}
                className="flex p-4 space-x-8 overflow-x-auto rounded-lg"
                style={{
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                }}
            >
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                        <img
                            src={`${import.meta.env.BASE_URL}models3d/${proyecto.img}`}
                            alt={proyecto.titulo}
                            className="object-cover w-full h-48"
                        />
                        <div className="py-3 text-center text-white bg-gray-800">
                            <h3 className="text-lg font-bold">{proyecto.titulo}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proyectos;