import React from "react";
import { motion } from "framer-motion";

const Servicios: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 mt-24 space-y-12">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SERVICIOS EDUCATIVOS PERSONALIZADOS
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-blue-800">
            SERVICIO DE REFUERZO ACADÉMICO
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Mejora el rendimiento académico en materias específicas.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Sesiones personalizadas para refuerzo en áreas como Lenguaje, Matemáticas, etc.</li>
            <li>Retroalimentación continua sobre tareas y proyectos.</li>
            <li>Metodología adaptada a las necesidades individuales del estudiante.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Ayuda a fortalecer conocimientos clave y mejorar el rendimiento escolar.
          </p>
        </motion.div>

       
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-green-800">
            SERVICIO DE EDUCACIÓN ESPECIAL
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Atención especializada para estudiantes con necesidades educativas.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Clases adaptadas a diferentes discapacidades y necesidades de aprendizaje.</li>
            <li>Enfoque en el desarrollo de habilidades cognitivas y motoras.</li>
            <li>Intervenciones personalizadas y apoyo emocional.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Mejora el bienestar y el aprendizaje de estudiantes con necesidades especiales.
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-red-800">
            SERVICIO DE PROGRAMACIÓN Y TECNOLOGÍA
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Capacitación en programación, creación de videojuegos y robótica educativa.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Enseñanza de lenguajes como Python, JavaScript, y Scratch.</li>
            <li>Creación de videojuegos educativos con Unity y Godot.</li>
            <li>Desarrollo de proyectos prácticos en robótica y automatización.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Ofrecemos formación para preparar a los estudiantes en el mundo tecnológico del futuro.
          </p>
        </motion.div>
      </motion.div>

      <p className="mt-8 text-lg text-center text-gray-700">
        Nuestros servicios están diseñados para brindar un acompañamiento cercano y efectivo en el proceso educativo.
      </p>
    </div>
  );
};

export default Servicios;
