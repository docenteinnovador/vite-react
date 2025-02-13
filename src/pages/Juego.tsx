import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type LetraConfig = { x1: number; y1: number; x2: number; y2: number; grosor: number };
type Letras = { [key: string]: LetraConfig[] };

const letras: Letras = {
  A: [
    { x1: 40, y1: 120, x2: 70, y2: 30, grosor: 3 },
    { x1: 100, y1: 120, x2: 70, y2: 30, grosor: 3 },
    { x1: 50, y1: 75, x2: 90, y2: 75, grosor: 2.5 },
  ],
  E: [
    { x1: 40, y1: 30, x2: 40, y2: 120, grosor: 3 },
    { x1: 40, y1: 30, x2: 100, y2: 30, grosor: 2.5 },
    { x1: 40, y1: 75, x2: 90, y2: 75, grosor: 2.5 },
    { x1: 40, y1: 120, x2: 100, y2: 120, grosor: 2.5 },
  ],

  I: [
    { x1: 70, y1: 30, x2: 70, y2: 120, grosor: 3 },
    { x1: 50, y1: 30, x2: 90, y2: 30, grosor: 2.5 },
    { x1: 50, y1: 120, x2: 90, y2: 120, grosor: 2.5 },
    
  ],
  O: [
   
    { x1: 70, y1: 30, x2: 90, y2: 40, grosor: 3 },   
    { x1: 90, y1: 40, x2: 100, y2: 60, grosor: 3 },  
    { x1: 100, y1: 60, x2: 100, y2: 90, grosor: 3 },  
    { x1: 100, y1: 90, x2: 90, y2: 110, grosor: 3 }, 
    { x1: 90, y1: 110, x2: 70, y2: 120, grosor: 3 }, 
    { x1: 70, y1: 120, x2: 50, y2: 110, grosor: 3 }, 
    { x1: 50, y1: 110, x2: 40, y2: 90, grosor: 3 },   
    { x1: 40, y1: 90, x2: 40, y2: 60, grosor: 3 },  
    { x1: 40, y1: 60, x2: 50, y2: 40, grosor: 3 },   
    { x1: 50, y1: 40, x2: 70, y2: 30, grosor: 3 },   
  ],
  U: [
    { x1: 40, y1: 30, x2: 40, y2: 100, grosor: 3 },
    { x1: 40, y1: 100, x2: 70, y2: 120, grosor: 3 },
    { x1: 70, y1: 120, x2: 100, y2: 100, grosor: 3 },
    { x1: 100, y1: 30, x2: 100, y2: 100, grosor: 3 },
  ],

  
};
const letrasOrden = Object.keys(letras);

function generarPuntos(configLetra: LetraConfig[]): { x: number; y: number; pintado: boolean }[] {
  const puntos: { x: number; y: number; pintado: boolean }[] = [];
  const densidad = 1.2;
  configLetra.forEach(({ x1, y1, x2, y2, grosor }) => {
    const longitud = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const pasos = Math.ceil(longitud / densidad);
    for (let i = 0; i <= pasos; i++) {
      const t = i / pasos;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      for (let g = -grosor; g <= grosor; g += densidad) {
        const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
        puntos.push({ x: x + Math.cos(angle) * g, y: y + Math.sin(angle) * g, pintado: false });
      }
    }
  });
  return puntos;
}

const Juego: React.FC = () => {
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [puntosGenerados, setPuntosGenerados] = useState(generarPuntos(letras[letrasOrden[indiceLetra]]));
  const [ultimaPosicion, setUltimaPosicion] = useState<{ x: number; y: number } | null>(null);

  const obtenerCoordenadasSVG = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    return { x: ((event.clientX - rect.left) / rect.width) * 140, y: ((event.clientY - rect.top) / rect.height) * 140 };
  }, []);

  const pintarPuntosCercanos = useCallback((pos: { x: number; y: number }) => {
    const radioPincel = 6;
    setPuntosGenerados((prevPuntos) => prevPuntos.map(p => (Math.hypot(p.x - pos.x, p.y - pos.y) < radioPincel ? { ...p, pintado: true } : p)));
  }, []);

  const manejarMovimientoMouse = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const posActual = obtenerCoordenadasSVG(event);
    if (ultimaPosicion) {
      for (let i = 0; i <= 8; i++) {
        const x = ultimaPosicion.x + (posActual.x - ultimaPosicion.x) * (i / 8);
        const y = ultimaPosicion.y + (posActual.y - ultimaPosicion.y) * (i / 8);
        pintarPuntosCercanos({ x, y });
      }
    } else {
      pintarPuntosCercanos(posActual);
    }
    setUltimaPosicion(posActual);
  }, [ultimaPosicion, obtenerCoordenadasSVG, pintarPuntosCercanos]);

  const cambiarLetra = () => {
    const siguienteIndice = (indiceLetra + 1) % letrasOrden.length;
    setIndiceLetra(siguienteIndice);
    setPuntosGenerados(generarPuntos(letras[letrasOrden[siguienteIndice]]));
    setUltimaPosicion(null);
  };

  React.useEffect(() => {
    if (puntosGenerados.every(p => p.pintado)) {
      setTimeout(cambiarLetra, 1000);
    }
  }, [puntosGenerados]);

  return (
    <StyledWrapper>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Pinta la letra "{letrasOrden[indiceLetra]}"</h1>
        <div className="relative">
          <svg viewBox="0 0 140 140" className="absolute bg-black rounded-lg w-96 h-96">
            {letras[letrasOrden[indiceLetra]].map(({ x1, y1, x2, y2 }, index) => (
              <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
            ))}
          </svg>
          <svg viewBox="0 0 140 140" className="relative bg-transparent rounded-lg w-96 h-96" onMouseMove={manejarMovimientoMouse} onMouseLeave={() => setUltimaPosicion(null)}>
            {puntosGenerados.map((p, index) => (
              <circle key={index} cx={p.x} cy={p.y} r="1.5" fill={p.pintado ? '#3B82F6' : 'transparent'} />
            ))}
          </svg>
        </div>
      </motion.div>
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
  text-align: center;
  h1 { font-size: 24px; font-weight: bold; color: #455861; }
`;

export default Juego;
