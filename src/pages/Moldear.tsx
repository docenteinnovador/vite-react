import React, { useRef } from "react";

// Imágenes de la zona de moldeado
import crash from "../assets/crash.jpeg";
import pinguino from "../assets/pinguino.jpeg";
import doraemon from "../assets/doraemon.jpeg";
import pajaroloco from "../assets/pajaroloco.jpeg";
import padre from "../assets/padre.jpeg";
import bender from "../assets/bender.jpeg";

const Moldear: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const proyectosMoldeado = [
        { img: crash, titulo: "Crash" },
        { img: pinguino, titulo: "Pinguino" },
        { img: doraemon, titulo: "Doraemon" },
        { img: pajaroloco, titulo: "Pajaroloco" },
        { img: padre, titulo: "Padre" },
        { img: bender, titulo: "Bender" },
    ];

    const requisitosMoldeado = [
        "Paciencia",
        "Creatividad",
        "Herramientas adecuadas",
        "Materiales de calidad",
        "Espacio limpio",
        "Constancia",
    ];

    const pasosMoldeado = [
        "Preparar el área de trabajo",
        "Elegir el material a moldear",
        "Amasar y dar forma",
        "Revisar detalles y perfeccionar",
        "Dejar secar o fijar",
        "Finalizar con detalles decorativos",
    ];

    return (
        <div className="relative w-full px-4 mx-auto mt-32 mb-16">

            {/* Título Zona de Moldeado */}
            <h2 className="mb-8 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 drop-shadow-lg">
                ZONA DE MOLDEADO
            </h2>

            {/* Carrusel de fotos */}
            <div className="relative">
                <button
                    className="absolute left-0 z-10 p-3 text-white -translate-y-1/2 bg-green-600 rounded-full shadow-lg top-1/2 hover:bg-blue-400"
                    onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                >
                    🡨
                </button>

                <div
                    ref={carouselRef}
                    className="flex gap-6 px-4 overflow-x-auto scrollbar-hide"
                >
                    {proyectosMoldeado.map((proyecto, index) => (
                        <div key={index} className="flex-shrink-0 w-64 rounded-lg shadow-lg cursor-pointer">
                            <img
                                src={proyecto.img}
                                alt={proyecto.titulo}
                                className="object-cover w-full h-48 transition-transform hover:scale-105"
                            />
                            <div className="py-3 text-center text-white bg-yellow-800">
                                <h3 className="text-lg font-bold">{proyecto.titulo}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="absolute right-0 z-10 p-3 text-white -translate-y-1/2 bg-green-600 rounded-full shadow-lg top-1/2 hover:bg-blue-400"
                    onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                >
                    🡪
                </button>
            </div>

            {/* Requisitos para un moldeado exitoso */}
            <div className="mt-16">
                <h3 className="mb-6 text-3xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 drop-shadow-md">
                    Qué se necesita para un moldeado exitoso
                </h3>

                <div className="flex flex-wrap justify-center gap-6">
                    {requisitosMoldeado.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 text-lg font-semibold text-center text-yellow-100 transition-transform transform bg-green-600 shadow-xl w-44 h-44 rounded-xl hover:scale-105 hover:bg-green-500"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pasos para moldear (nuevo estilo) */}
            <div className="mt-16">
                <h3 className="mb-6 text-3xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-md">
                    Pasos para un moldeado exitoso
                </h3>

                <div className="flex flex-wrap justify-center gap-6">
                    {pasosMoldeado.map((paso, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-64 p-6 transition-all transform border-2 border-blue-600 shadow-md rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 hover:shadow-xl hover:scale-105"
                        >
                            <div className="flex items-center justify-center mb-4 text-xl font-bold text-white bg-blue-700 rounded-full shadow-lg w-14 h-14">
                                {index + 1}
                            </div>
                            <p className="text-lg font-medium text-center text-blue-900">{paso}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Moldear;
