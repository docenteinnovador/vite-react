import React, { useState, useEffect } from 'react';
import '@google/model-viewer/lib/model-viewer';
import { FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Importa el modelo 3D desde la carpeta assets
const modelPath = new URL('../models/tripo_pbr_model_c56b51c5-9fdf-443c-a928-ce97bb31691b.glb', import.meta.url).href;

const MainContent: React.FC = () => {
  const words = ["TECNOLOGIA", "APRENDIZAJE", "INNOVACION", "CONOCIMIENTO"];
  const [currentText, setCurrentText] = useState(""); // Texto actual que se muestra
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de la palabra actual
  const [isDeleting, setIsDeleting] = useState(false); // Estado de borrado o escritura

  useEffect(() => {
    const currentWord = words[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Velocidad de borrado y escritura
    const delay = isDeleting && currentText === "" ? 1000 : 2000; // Tiempo entre palabras

    const handleTyping = () => {
      if (!isDeleting && currentText === currentWord) {
        // Si terminó de escribir, comienza a borrar después de un tiempo
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        // Si terminó de borrar, pasa a la siguiente palabra
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length); // Cicla entre palabras
      } else {
        // Continuar escribiendo o borrando
        const nextText = isDeleting
          ? currentText.slice(0, -1) // Borrar una letra
          : currentWord.slice(0, currentText.length + 1); // Añadir una letra
        setCurrentText(nextText);
      }
    };

    const timer = setTimeout(handleTyping, currentText === "" && isDeleting ? delay : typingSpeed);

    return () => clearTimeout(timer); // Limpia el timeout
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen px-10 md:flex-row">
      {/* Sección de la izquierda con texto */}
      <div className="w-full mt-20 text-center md:w-1/2 md:text-left md:mt-0">
        <h1 className="text-4xl font-bold text-green-400 md:text-5xl">
          {currentText}
        </h1>
        <p className="mt-4 text-base text-gray-700 md:text-lg">
          Bienvenidos, a mi empresa de Tecnología Enseñanza y Aprendizaje
        </p>
        <div className="flex justify-center gap-4 mt-6 md:justify-start">
          {/* TikTok Icon */}
          <a href="https://www.tiktok.com/@coderoboticsii" className="text-2xl text-blue-600 hover:text-blue-600">
            <FaTiktok className="text-4xl hover:text-blue-500" />
          </a>

          {/* YouTube Icon */}
          <a href="https://www.youtube.com/@CodeRoboticsII" className="text-2xl text-blue-600 hover:text-red-600">
            <FaYoutube className="text-4xl hover:text-red-500" />
          </a>

          {/* WhatsApp Icon */}
          <a href="https://wa.me/0983036256" className="text-2xl text-blue-600 hover:text-green-600">
            <FaWhatsapp className="text-4xl hover:text-green-500" />
          </a>
        </div>
        <button
          onClick={() => window.open("https://www.appsheet.com/start/c35e6674-ba92-437a-ac41-ee3c69a59e42#view=CODEROBOTICS", "_blank")}
          className="px-6 py-2 mt-6 text-white bg-blue-900 rounded hover:bg-blue-700"
        >
          CONTRATAR DOCENTE
        </button>
      </div>

      {/* Sección de la derecha con modelo 3D */}
      <div className="flex items-center justify-center w-full h-full mt-8 md:w-1/2 md:mt-0">
        <model-viewer
          className="w-full h-full"
          src={modelPath} // Ahora el modelo se carga correctamente desde assets
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          pinch-zoom
          shadow-intensity="1"
          autoplay
          auto-rotate
          camera-orbit="auto auto 5m"
          max-camera-orbit="auto auto 10m"
          min-camera-orbit="auto auto 2m"
          field-of-view="45deg"
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        >
        </model-viewer>
      </div>
    </div>
  );
};

export default MainContent;
