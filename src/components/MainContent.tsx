import React from 'react';
import '@google/model-viewer/lib/model-viewer';
import { FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Ruta como URL desde la carpeta public
const modelPath = '/models3d/tripo_pbr_model_c56b51c5-9fdf-443c-a928-ce97bb31691b.glb';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen px-10 md:flex-row">
      {/* Sección de la izquierda con texto */}
      <div className="w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0">
        <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">CODEROBOTICS</h1>
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
          src={modelPath} // URL directa al modelo 3D
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          pinch-zoom
          shadow-intensity="1"
          autoplay
          auto-rotate
          camera-orbit="auto auto 5m" // Aumentamos la distancia inicial de la cámara
          max-camera-orbit="auto auto 10m" // Limite de la distancia máxima de la cámara
          min-camera-orbit="auto auto 2m" // Limite de la distancia mínima de la cámara
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
