import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";  // Importamos iconos de hamburguesa y cerrar

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para controlar la visibilidad del menú
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-20 flex justify-between items-center px-16 transition-all duration-300 z-50 ${scrolled ? "bg-[#33587d]/90" : "bg-[#33587d]"
        }`}
    >
      {/* Logo "CODEROBOTICS" como botón de inicio */}
      <div
        onClick={() => navigate("/")} // Regresa a la página de inicio
        className="text-2xl font-bold text-white cursor-pointer hover:underline"
      >
        CODEROBOTICS
      </div>

      {/* Menú de navegación */}
      <div className="hidden space-x-12 md:flex">
        {[{ name: "Proyectos", path: "/proyectos" },
        { name: "Cursos", path: "/cursos" },
        { name: "Servicios", path: "/servicios" },
        { name: "Contactos", path: "/contacto" },
        ].map((item) => (
          <span
            key={item.name}
            onClick={() => navigate(item.path)} // Navegación a cada ruta
            className={`cursor-pointer text-lg font-medium ${scrolled ? "text-blue-100" : "text-white"
              } hover:underline`}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Icono de hamburguesa para dispositivos móviles */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-3xl text-white" />
          ) : (
            <FaBars className="text-3xl text-white" />
          )}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-[#33587d] text-white text-center py-4 md:hidden">
          {[{ name: "Proyec", path: "/proyectos" },
          { name: "Cursos", path: "/cursos" },
          { name: "Servicios", path: "/servicios" },
          { name: "Contactos", path: "/contacto" },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false); // Cerrar el menú al hacer clic
              }}
              className="py-3 cursor-pointer hover:bg-[#1f426b] text-xl"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
