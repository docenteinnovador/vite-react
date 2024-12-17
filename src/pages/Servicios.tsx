import React from "react";

const Servicios: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-24 space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        SERVICIOS EDUCATIVOS PERSONALIZADOS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {/* Servicio A */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">SERVICIO DE REFUERZO ACADÉMICO</h2>
          <p className="text-center text-gray-600 mb-4">
            Mejora el rendimiento académico en materias específicas.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Sesiones personalizadas para refuerzo en áreas como Lenguaje, Matemáticas, etc.</li>
            <li>Retroalimentación continua sobre tareas y proyectos.</li>
            <li>Metodología adaptada a las necesidades individuales del estudiante.</li>
          </ul>
          <p className="text-gray-600 mt-4">Ayuda a fortalecer conocimientos clave y mejorar el rendimiento escolar.</p>
        </div>
        
        {/* Servicio B */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-green-800 mb-4">SERVICIO DE EDUCACIÓN ESPECIAL</h2>
          <p className="text-center text-gray-600 mb-4">
            Atención especializada para estudiantes con necesidades educativas.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Clases adaptadas a diferentes discapacidades y necesidades de aprendizaje.</li>
            <li>Enfoque en el desarrollo de habilidades cognitivas y motoras.</li>
            <li>Intervenciones personalizadas y apoyo emocional.</li>
          </ul>
          <p className="text-gray-600 mt-4">Mejora el bienestar y el aprendizaje de estudiantes con necesidades especiales.</p>
        </div>

        {/* Servicio C */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-red-800 mb-4">SERVICIO DE PROGRAMACIÓN Y TECNOLOGÍA</h2>
          <p className="text-center text-gray-600 mb-4">
            Capacitación en programación, creación de videojuegos y robótica educativa.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Enseñanza de lenguajes como Python, JavaScript, y Scratch.</li>
            <li>Creación de videojuegos educativos con Unity y Godot.</li>
            <li>Desarrollo de proyectos prácticos en robótica y automatización.</li>
          </ul>
          <p className="text-gray-600 mt-4">Ofrecemos formación para preparar a los estudiantes en el mundo tecnológico del futuro.</p>
        </div>
      </div>

      {/* Más servicios (si es necesario) */}
      <p className="text-lg text-center text-gray-700 mt-8">
        Nuestros servicios están diseñados para brindar un acompañamiento cercano y efectivo en el proceso educativo.
      </p>
    </div>
  );
};

export default Servicios;
