import React from 'react';
import '@google/model-viewer/lib/model-viewer';
import { FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Ruta como URL desde la carpeta public
const modelPath = '/models3d/tripo_pbr_model_c56b51c5-9fdf-443c-a928-ce97bb31691b.glb';

const MainContent: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-between px-10">
      {/* Sección de la izquierda con texto */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">CODEROBOTICS</h1>
        <p className="mt-4 text-base md:text-lg text-gray-700">
          Bienvenidos, a mi empresa de Tecnología Enseñanza y Aprendizaje
        </p>
        <div className="flex gap-4 justify-center md:justify-start mt-6">
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
          className="mt-6 bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          CONTRATAR DOCENTE
        </button>
      </div>

      {/* Sección de la derecha con modelo 3D */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-full mt-8 md:mt-0">
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
