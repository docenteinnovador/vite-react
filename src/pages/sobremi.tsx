import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';  // Importamos el componente motion

const sobremi: React.FC = () => {
  return (
    <StyledWrapper>
      <motion.div
        className="book"
        initial={{ opacity: 0, y: -50 }} // Inicia el libro fuera de la vista hacia arriba
        animate={{ opacity: 1, y: 0 }}   // Se mueve hacia abajo y se hace visible
        transition={{ duration: 1 }}     // Duración de la animación
      >
        <p>
          <p>Soy un licenciado en Ciencias de la Educación Especial, comprometido con la innovación educativa y la inclusión.</p>
          <p>Mi objetivo es transformar el entorno de aprendizaje, asegurando que cada estudiante, independientemente de sus capacidades, pueda alcanzar su máximo potencial.</p>
          <p>Para ello, utilizo la tecnología como una herramienta clave para enriquecer y mejorar los conocimientos.</p>
          <p>Cuento con experiencia en la enseñanza de niños tanto con discapacidad como sin discapacidad, lo que me ha permitido adaptar mejores estrategias didácticas y brindar un ambiente de aprendizaje más inclusivo.</p>
        </p>
        <div className="cover">
          <h1>SOBRE MI</h1>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;

  .book {
    position: relative;
    border-radius: 10px;
    width: 220px;
    height: 300px;
    background-color: white;
    -webkit-box-shadow: 1px 1px 12px #0073de;
    box-shadow: 1px 1px 12px #0073de;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightblue;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #0073de;
    box-shadow: 1px 1px 12px #0073de;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
    font-size: 7px;
    font-weight: bolder;
    margin-bottom: 10px;
    text-align: justify;
    margin-left: 10px;
  }

  h1 {
    font-size: 34px;
    font-weight: bolder;
    text-align: justify;
    padding: 10px;
    overflow-y: auto;
    max-height: 100%;
    color: #455861;
  }
`;

export default sobremi;
