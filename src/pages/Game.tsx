import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const game: React.FC = () => {
  const crearPuntos = () => {
    const puntos = [];
    const densidad = 1.2; 
    
    const generarLineaPuntos = (x1: number, y1: number, x2: number, y2: number, grosor: number = 2) => {
      const longitud = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const pasos = Math.ceil(longitud / densidad);
      
      for (let i = 0; i <= pasos; i++) {
        const t = i / pasos;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        
        for (let g = -grosor; g <= grosor; g += densidad) {
          const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI/2;
          puntos.push({
            x: x + Math.cos(angle) * g,
            y: y + Math.sin(angle) * g,
            pintado: false
          });
        }
      }
    };

    generarLineaPuntos(40, 120, 70, 30, 3);
    generarLineaPuntos(100, 120, 70, 30, 3);
    generarLineaPuntos(50, 75, 90, 75, 2.5);
    for (let dx = -3; dx <= 3; dx += densidad) {
      for (let dy = -3; dy <= 3; dy += densidad) {
        puntos.push({
          x: 70 + dx,
          y: 30 + dy,
          pintado: false
        });
      }
    }

    return puntos;
  };

  const [puntos, setPuntos] = useState(crearPuntos());
  const [ultimaPosicion, setUltimaPosicion] = useState<{ x: number; y: number } | null>(null);

  const obtenerCoordenadasSVG = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 140;
    const y = ((event.clientY - rect.top) / rect.height) * 140;
    return { x, y };
  }, []);

  const pintarPuntosCercanos = useCallback((posicionMouse: { x: number; y: number }) => {
    const radioPincel = 6;
    setPuntos(puntosActuales => 
      puntosActuales.map(punto => {
        const distancia = Math.sqrt(
          Math.pow(punto.x - posicionMouse.x, 2) + 
          Math.pow(punto.y - posicionMouse.y, 2)
        );
        
        if (distancia < radioPincel && !punto.pintado) {
          return { ...punto, pintado: true };
        }
        return punto;
      })
    );
  }, []);

  const manejarMovimientoMouse = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const posicionActual = obtenerCoordenadasSVG(event);
    
    if (ultimaPosicion) {
      const pasos = 8;
      for (let i = 0; i <= pasos; i++) {
        const x = ultimaPosicion.x + (posicionActual.x - ultimaPosicion.x) * (i / pasos);
        const y = ultimaPosicion.y + (posicionActual.y - ultimaPosicion.y) * (i / pasos);
        pintarPuntosCercanos({ x, y });
      }
    } else {
      pintarPuntosCercanos(posicionActual);
    }
    
    setUltimaPosicion(posicionActual);
  }, [ultimaPosicion, obtenerCoordenadasSVG, pintarPuntosCercanos]);

  const reiniciar = () => {
    setPuntos(crearPuntos());
    setUltimaPosicion(null);
  };

  return (
    <StyledWrapper>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="canvas-container">
          <h1>Pinta la letra "A"</h1>
          <div className="relative">
            <svg 
              viewBox="0 0 140 140" 
              className="absolute bg-white rounded-lg w-96 h-96"
            >
              <path
                d="M40,120 L70,30 L100,120 M50,75 L90,75"
                stroke="#E5E7EB"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <svg 
              viewBox="0 0 140 140" 
              className="relative bg-transparent rounded-lg w-96 h-96"
              onMouseMove={manejarMovimientoMouse}
              onMouseLeave={() => setUltimaPosicion(null)}
            >
              {puntos.map((punto, index) => (
                <circle
                  key={index}
                  cx={punto.x}
                  cy={punto.y}
                  r="1.2"
                  fill={punto.pintado ? '#3B82F6' : 'transparent'}
                  className="transition-colors duration-300"
                />
              ))}
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="reset-container">
        <button
          onClick={reiniciar}
          className="px-6 py-3 mt-5 text-lg font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Reiniciar
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;

  .canvas-container {
    text-align: center;
    position: relative;
  }

  h1 {
    font-size: 24px;
    font-weight: bolder;
    color: #455861;
  }

  .reset-container {
    margin-top: 30px;
  }
`;

export default game;
