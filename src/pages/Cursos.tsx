import React, { useState } from "react";

const CourseCard: React.FC<{
  title: string;
  description: string;
  imgSrc: string;
  additionalInfo: string;
}> = ({ title, description, imgSrc, additionalInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl">
      <div className="flex items-center justify-center w-24 h-24 mb-4 bg-blue-200 rounded-full">
        <img src={imgSrc} alt={title} className="object-cover w-16 h-16" />
      </div>
      <h2 className="mb-4 text-xl font-semibold text-blue-800">{title}</h2>
      <p className="mb-4 text-center text-gray-600">{description}</p>
      <button
        onClick={toggleVisibility}
        className="font-medium text-blue-600 hover:text-blue-800"
      >
        {isVisible ? "Ver menos" : "Ver más"}
      </button>

     
      {isVisible && (
        <div className="mt-4 text-gray-700">
          <ul className="pl-6 list-disc">
            <li>{additionalInfo}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Cursos: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-24 space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        DEJA QUE TUS NUEVAS IDEAS TE INSPIREN A CREAR.
      </h1>

      <div className="grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          title="CURSO DE REFUERZO ACADÉMICO"
          description="Refuerza las competencias de los estudiantes en diversas materias."
          imgSrc="https://i.gifer.com/RrVB.gif"
          additionalInfo="• Fortalece conocimientos en materias como Lenguaje, Ciencias Naturales, Estudios Sociales, Matemáticas, etc.
• Retroalimentación de tareas estudiantiles."
        />
        <CourseCard
          title="CURSO DE EDUCACIÓN ESPECIAL"
          description="Ayuda a estudiantes con necesidades especiales a desarrollar habilidades."
          imgSrc="https://static.wixstatic.com/media/a0a89f_8ace1ce6e0b54b66802b90d393a55f03~mv2.jpg/v1/fill/w_640,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a0a89f_8ace1ce6e0b54b66802b90d393a55f03~mv2.jpg"
          additionalInfo="• Clases personalizadas según la discapacidad del estudiante
• Estimulación temprana
• Ejercicios de motricidad fina y gruesa
• Tratamientos logopédicos: habla y lenguaje
• Retroalimentación de tareas estudiantiles"
        />
        <CourseCard
          title="CURSO DE PROGRAMACIÓN"
          description="Enseña la lógica de programación y desarrollo de software."
          imgSrc="https://i.gifer.com/bJk.gif"
          additionalInfo="• Aprende la lógica de programación en lenguajes como Python, GDScript, y más.
• Desarrollo de proyectos prácticos de programación."
        />
        <CourseCard
          title="CURSO DE CREACIÓN DE JUEGOS EDUCATIVOS"
          description="Diseña videojuegos educativos para el aprendizaje interactivo."
          imgSrc="https://i.gifer.com/2Xxe.gif"
          additionalInfo="• Crea videojuegos en lenguajes como Python, Scratch, GDScript, Unity, Godot, entre otros.
• Aprende a integrar elementos educativos en el diseño de juegos."
        />
        <CourseCard
          title="CURSO DE INGLÉS"
          description="Aprende y enseña inglés desde cero con métodos efectivos."
          imgSrc="https://i.gifer.com/KyfI.gif"
          additionalInfo="• Aprende desde los fundamentos como 'verb to be', tiempos verbales básicos, y más.
• Desarrolla habilidades de comprensión oral y escrita."
        />
        <CourseCard
          title="CURSO DE CREACIÓN DE SITIOS WEB RESPONSIVOS"
          description="Crea sitios web adaptables a todos los dispositivos."
          imgSrc="https://i.gifer.com/CV4o.gif"
          additionalInfo="• Aprende a crear tu primera página web con HTML, CSS, y JavaScript.
• Crea sitios web responsivos usando frameworks modernos."
        />
        <CourseCard
          title="CURSO DE ROBÓTICA EDUCATIVA"
          description="Desarrolla habilidades en robótica y programación."
          imgSrc="https://i.gifer.com/UXUQ.gif"
          additionalInfo="• Crea tu propio robot desde cero con kits de robótica educativa.
• Aprende a integrar inteligencia artificial en proyectos de robótica."
        />
      </div>
    </div>
  );
};

export default Cursos;
