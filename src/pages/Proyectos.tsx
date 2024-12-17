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

    return (
        <div className="relative w-full mx-auto mt-32 mb-16">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-900">
                PROYECTOS REALIZADOS POR EL DOCENTE
            </h2>

            {/* Botones de navegación */}
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

            {/* Carrusel */}
            <div
                ref={carouselRef}
                className="flex p-4 space-x-8 overflow-x-auto rounded-lg"
                style={{
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none", // Oculta el scrollbar en navegadores soportados
                }}
            >
                {/* Proyecto 1 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_2.png"
                        alt="Vocaliza y Aprende"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Vocaliza y Aprende </h3>
                    </div>
                </div>

                 {/* Proyecto 5 */}
                 <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_1.png"
                        alt="Vocaliza y Aprende"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Pizarra Digital</h3>
                    </div>
                </div>

                {/* Proyecto 6 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_8.png"
                        alt="Vocaliza y Aprende"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Raton Tactil</h3>
                    </div>
                </div>

                {/* Proyecto 7 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_10.png"
                        alt="Vocaliza y Aprende"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Planificador de clase con IA</h3>
                    </div>
                </div>

                {/* Proyecto 2 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_9.png"
                        alt="Detección con OpenCV"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Decodificación con IA - Sistema Braille</h3>
                    </div>
                </div>

                {/* Proyecto 3 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_6.png"
                        alt="Otro Proyecto"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Pingüi en 2D</h3>
                    </div>
                </div>

                 {/* Proyecto 8 */}
                 <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_5.png"
                        alt="Otro Proyecto"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">VIDEOJUEGO DE MARIO, A VOZ</h3>
                    </div>
                </div>

                {/* Proyecto 4 */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-80 bg-gray-50">
                    <img
                        src="captura_7.png"
                        alt="Pomodoro Digital"
                        className="object-cover w-full h-48"
                    />
                    <div className="py-3 text-center text-white bg-gray-800">
                        <h3 className="text-lg font-bold">Pomodoro Digital</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyectos;
