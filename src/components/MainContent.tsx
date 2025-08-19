import React, { useState, useEffect } from 'react';
import '@google/model-viewer/lib/model-viewer';
import { FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const modelPath = new URL('../models/tripo_pbr_model_c56b51c5-9fdf-443c-a928-ce97bb31691b.glb', import.meta.url).href;

const MainContent: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const navigate = useNavigate();

  const words = ["LogopediaTech", "TECNOLOGIA", "APRENDIZAJE", "INNOVACION", "CONOCIMIENTO", "CREATIVIDAD", "PROGRAMACION"];

  useEffect(() => {
    const currentWord = words[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting && currentText === "" ? 1000 : 2000;

    const handleTyping = () => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextText = isDeleting
          ? currentText.slice(0, -1)
          : currentWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    };

    const timer = setTimeout(handleTyping, currentText === "" && isDeleting ? delay : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="relative flex flex-col items-center justify-between w-screen h-screen px-10 pt-14 md:flex-row md:pt-4">

      {/* Bloque de texto */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <div className="mt-16 md:mt-24">
          <h1 className="text-4xl font-bold text-green-400 md:text-5xl">
            {currentText}
          </h1>
          <p className="mt-4 text-sm font-medium leading-snug text-center text-gray-500 md:text-left">
            Bienvenidos a <span className="font-bold text-gray-500">Coderobotics</span>, tu espacio de
            <span className="font-semibold text-gray-500"> Tecnología</span>,
            <span className="font-semibold text-gray-500"> Enseñanza</span> y
            <span className="font-semibold text-gray-500"> Aprendizaje</span>.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-4 mt-6 md:justify-start">
          <a href="https://www.tiktok.com/@coderoboticsii" className="text-2xl text-blue-600 hover:text-blue-500">
            <FaTiktok className="text-4xl" />
          </a>
          <a href="https://www.youtube.com/@CodeRoboticsII" className="text-2xl text-blue-600 hover:text-red-600">
            <FaYoutube className="text-4xl" />
          </a>
          <a href="https://wa.me/0983036256" className="text-2xl text-blue-600 hover:text-green-600">
            <FaWhatsapp className="text-4xl" />
          </a>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-2 mt-6">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="p-2 text-white transition-all bg-green-400 rounded-full hover:bg-green-500"
          >
            {showInstructions ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
          </button>

          <button
            onClick={() =>
              window.open(
                "https://www.appsheet.com/start/c35e6674-ba92-437a-ac41-ee3c69a59e42#view=CODEROBOTICS",
                "_blank"
              )
            }
            className="px-4 py-4 text-sm font-semibold text-white transition-colors duration-300 bg-green-400 rounded-lg shadow hover:bg-blue-700"
          >
            SOLICITAR DOCENTE
          </button>
        </div>

        {/* Instrucciones */}
        {showInstructions && (
          <div className="p-4 mt-4 text-white bg-black rounded">
            <p>Para solicitar un docente, por favor sigue las siguientes indicaciones:</p>
            <ol className="mt-2 list-decimal list-inside">
              <li>Pulsa el botón azul: <strong>Solicitar Docente</strong>.</li>
              <li>Pulsa el botón verde con el símbolo <strong>+</strong>.</li>
              <li>Completa todos los campos del formulario con la información requerida.</li>
              <li>Pulsa en <strong>Save</strong> para guardar los datos.</li>
              <li>Espera a que el docente se comunique contigo para asignar un horario de clases.</li>
              <li>Solicita información adicional sobre las clases si lo necesitas.</li>
            </ol>
          </div>
        )}
      </div>

      {/* Modelo 3D */}
      <div className="flex items-center justify-center w-full h-full mt-8 md:w-1/2 md:mt-0">
        <model-viewer
          className="w-full h-full"
          src={modelPath}
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
        />
      </div>

      {/* Botón flotante permanente ZONA DE MOLDEADO */}
      <button
        onClick={() => navigate("/moldea")}
        className="fixed z-50 px-5 py-2 text-base font-extrabold text-white transition-all duration-300 rounded-full shadow-xl bottom-6 right-6 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:scale-105 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 md:px-6 md:py-3 md:text-lg"
      >
        ZONA DE MOLDEADO
      </button>

    </div>
  );
};

export default MainContent;
