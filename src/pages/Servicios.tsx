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
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SERVICIOS EDUCATIVOS PERSONALIZADOS
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white shadow-lg rounded-xl hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-yellow-800">
            ZONA DE MOLDEADO
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Espacio para estimular la creatividad y habilidades manuales.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Aprende a moldear materiales de manera segura.</li>
            <li>Desarrolla paciencia, concentración y creatividad.</li>
            <li>Aplicación de técnicas y herramientas adecuadas.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Ideal para potenciar la expresión artística y el aprendizaje práctico.
          </p>
        </motion.div>
        
        {/* Cuadro 1 */}
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white shadow-lg rounded-xl hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-blue-800">
            REFUERZO ACADÉMICO
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Mejora el rendimiento académico en materias específicas.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Sesiones personalizadas en Lenguaje, Matemáticas, etc.</li>
            <li>Retroalimentación continua sobre tareas y proyectos.</li>
            <li>Metodología adaptada a necesidades individuales.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Fortalece conocimientos clave y mejora el rendimiento escolar.
          </p>
        </motion.div>

        {/* Cuadro 2 */}
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white shadow-lg rounded-xl hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-green-800">
            EDUCACIÓN ESPECIAL
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Atención especializada para estudiantes con necesidades educativas.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Clases adaptadas a diferentes discapacidades.</li>
            <li>Desarrollo de habilidades cognitivas y motoras.</li>
            <li>Apoyo emocional y seguimiento personalizado.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Mejora el bienestar y aprendizaje de estudiantes con necesidades especiales.
          </p>
        </motion.div>

        {/* Cuadro 3 */}
        <motion.div
          className="flex flex-col items-center p-8 transition-all bg-white shadow-lg rounded-xl hover:shadow-2xl"
          variants={containerVariants}
        >
          <h2 className="mb-4 text-xl font-semibold text-red-800">
            PROGRAMACIÓN Y TECNOLOGÍA
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Capacitación en programación, creación de videojuegos y robótica educativa.
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>Lenguajes como Python, JavaScript y Scratch.</li>
            <li>Videojuegos educativos con Unity y Godot.</li>
            <li>Proyectos prácticos en robótica y automatización.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Preparación para el mundo tecnológico del futuro.
          </p>
        </motion.div>

        {/* Cuadro 4 (nuevo) */}
        
      </motion.div>
      

      <p className="mt-8 text-lg text-center text-gray-700">
        Nuestros servicios están diseñados para brindar un acompañamiento cercano y efectivo en el proceso educativo.
      </p>
    </div>
  );
};

export default Servicios;
