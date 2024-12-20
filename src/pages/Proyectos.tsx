import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


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
  const [imagenActiva, setImagenActiva] = useState<number | null>(null);

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

  const proyectos = [
    { img: captura2, titulo: "Vocaliza y Aprende", descripcion: "Aplicación educativa para mejorar la pronunciación." },
    { img: captura1, titulo: "Pizarra Digital", descripcion: "Herramienta interactiva para la enseñanza digital." },
    { img: captura8, titulo: "Ratón Táctil", descripcion: "Sistema innovador de control táctil." },
    { img: captura10, titulo: "Planificador de clase con IA", descripcion: "Planificación automatizada de clases con inteligencia artificial." },
    { img: captura9, titulo: "Decodificación con IA - Sistema Braille", descripcion: "Traducción automática de textos a braille usando IA." },
    { img: captura6, titulo: "Pingüi en 2D", descripcion: "Juego de aventuras en 2D con temática de pingüinos." },
    { img: captura5, titulo: "VIDEOJUEGO DE MARIO, A VOZ", descripcion: "Videojuego interactivo controlado por voz." },
    { img: captura7, titulo: "Pomodoro Digital", descripcion: "Aplicación para mejorar la productividad con el método Pomodoro." },
  ];

  return (
    <div className="relative w-full mx-auto mt-32 mb-16">
      <h2 className="mb-8 text-4xl font-bold text-center text-blue-900">
        PROYECTOS REALIZADOS POR EL DOCENTE
      </h2>

      <button
        className="absolute z-10 p-3 text-white transform -translate-y-1/2 bg-green-600 rounded-full shadow-lg left-4 top-1/2 hover:bg-blue-400"
        onClick={scrollLeft}
      >
        🡨
      </button>
      <button
        className="absolute z-10 p-3 text-white transform -translate-y-1/2 bg-green-600 rounded-full shadow-lg right-4 top-1/2 hover:bg-blue-400"
        onClick={scrollRight}
      >
        🡪
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
          <motion.div
            key={index}
            className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer w-80 bg-gray-50"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            onClick={() => setImagenActiva(index === imagenActiva ? null : index)}
          >
            <motion.img
              src={proyecto.img}
              alt={proyecto.titulo}
              className="object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
            />

            <div className="py-3 text-center text-white bg-gray-800">
              <h3 className="text-lg font-bold">{proyecto.titulo}</h3>
            </div>

            {imagenActiva === index && (
              <motion.div
                className="w-full p-4 mt-2 text-center text-white bg-black rounded-md bg-opacity-70"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm">{proyecto.descripcion}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
