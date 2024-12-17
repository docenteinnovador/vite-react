import React, { useRef } from "react";

// Importa las imágenes
import captura2 from "../assets/captura_2.png";
import captura1 from "../assets/captura_1.png";
import captura8 from "../assets/captura_8.png";
import captura10 from "../assets/captura_10.png";
import captura9 from "../assets/captura_9.png";
import captura6 from "../assets/captura_6.png";
import captura5 from "../assets/captura_5.png";
import captura7 from "../assets/captura_7.png";

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

    // Array de proyectos con imágenes importadas
    const proyectos = [
        { img: captura2, titulo: "Vocaliza y Aprende" },
        { img: captura1, titulo: "Pizarra Digital" },
        { img: captura8, titulo: "Raton Tactil" },
        { img: captura10, titulo: "Planificador de clase con IA" },
        { img: captura9, titulo: "Decodificación con IA - Sistema Braille" },
        { img: captura6, titulo: "Pingüi en 2D" },
        { img: captura5, titulo: "VIDEOJUEGO DE MARIO, A VOZ" },
        { img: captura7, titulo: "Pomodoro Digital" }
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
                            src={proyecto.img}
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
