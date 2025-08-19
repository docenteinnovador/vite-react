import React, { useState } from "react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  description: string;
  imgSrc: string;
  additionalInfo: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imgSrc, additionalInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="flex items-center justify-center w-24 h-24 mb-4 bg-blue-200 rounded-full">
        <img src={imgSrc} alt={title} className="object-cover w-16 h-16" />
      </div>
      <h2 className="mb-4 text-xl font-semibold text-blue-800">{title}</h2>
      <p className="mb-4 text-center text-gray-600">{description}</p>
      <button
        className="mb-4 font-medium text-blue-600 hover:text-blue-800"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Ver menos" : "Ver más"}
      </button>
      {isVisible && (
        <div className="text-gray-700">
          <p>{additionalInfo}</p>
        </div>
      )}
    </motion.div>
  );
};

const Cursos: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-24 space-y-12">
      <motion.h1
        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        DEJA QUE TUS NUEVAS IDEAS TE INSPIREN A CREAR.
      </motion.h1>


      <div className="grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          title="DOCENTE DE MOLDEO"
          description="Aprende a moldear figuras, crear diseños y desarrollar habilidades manuales."
          imgSrc="https://i.gifer.com/ObzJ.gif"
          additionalInfo="Fortalece tu creatividad y habilidades manuales con técnicas adecuadas."
        />
        <CourseCard
          title="DOCENTE DE REFUERZO ACADÉMICO"
          description="Refuerza las competencias de los estudiantes en diversas materias."
          imgSrc="https://i.gifer.com/RrVB.gif"
          additionalInfo="Fortalece conocimientos en Lenguaje, Ciencias Naturales, Matemáticas, y más."
        />
        <CourseCard
          title="DOCENTE DE EDUCACIÓN ESPECIAL/ LOGOPEDIA"
          description="Ayuda a estudiantes con necesidades especiales a desarrollar habilidades, lenguaje y comunicación."
          imgSrc="https://static.wixstatic.com/media/a0a89f_8ace1ce6e0b54b66802b90d393a55f03~mv2.jpg"
          additionalInfo="Clases personalizadas según la discapacidad del estudiante."
        />
        <CourseCard
          title="DOCENTE DE PROGRAMACIÓN"
          description="Enseña la lógica de programación y desarrollo de software."
          imgSrc="https://i.gifer.com/bJk.gif"
          additionalInfo="Aprende la lógica de programación con Python y más."
        />
        <CourseCard
          title="DOCENTE DE CREACIÓN DE JUEGOS EDUCATIVOS"
          description="Diseña videojuegos educativos para el aprendizaje interactivo."
          imgSrc="https://i.gifer.com/2Xxe.gif"
          additionalInfo="Crea videojuegos en lenguajes como Python y Scratch."
        />
        <CourseCard
          title="DOCENTE DE INGLÉS"
          description="Aprende y enseña inglés desde cero con métodos efectivos."
          imgSrc="https://i.gifer.com/KyfI.gif"
          additionalInfo="Desarrolla habilidades de comprensión oral y escrita."
        />
        <CourseCard
          title="DOCENTE DE CREACIÓN DE SITIOS WEB RESPONSIVOS"
          description="Crea sitios web adaptables a todos los dispositivos."
          imgSrc="https://i.gifer.com/CV4o.gif"
          additionalInfo="Aprende HTML, CSS, JavaScript, y frameworks modernos."
        />
        <CourseCard
          title="DOCENTE DE ROBÓTICA EDUCATIVA"
          description="Desarrolla habilidades en robótica y programación."
          imgSrc="https://i.gifer.com/UXUQ.gif"
          additionalInfo="Crea robots desde cero y aprende a integrarlos con IA."
        />
      </div>
    </div>
  );
};

export default Cursos;
