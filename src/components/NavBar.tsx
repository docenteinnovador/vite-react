import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// Asegúrate de crear este archivo para la animación

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Proyectos", path: "/Proyectos" },
    { name: "Game", path: "/juego" },
    { name: "Cursos", path: "/cursos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contactos", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full h-20 flex justify-between items-center px-8 md:px-16 transition-all duration-300 z-50 ${
        scrolled ? "bg-[#33587d]/90 shadow-lg backdrop-blur-md" : "bg-[#33587d]"
      }`}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-extrabold tracking-wider text-transparent transition-all duration-300 cursor-pointer bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-green-400 drop-shadow-lg hover:brightness-110"
      >
        CODEROBOTICS
      </div>

      {/* Menú Desktop */}
      <div className="hidden space-x-12 md:flex">
        {menuItems.map((item) => (
          <span
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer text-lg font-medium transition-colors duration-200 ${
              scrolled ? "text-blue-100" : "text-white"
            } hover:text-green-300 hover:underline`}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Menú Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-3xl text-white transition-transform duration-300 hover:rotate-90" />
          ) : (
            <FaBars className="text-3xl text-white transition-transform duration-300 hover:rotate-90" />
          )}
        </button>
      </div>

      {/* Menú desplegable Mobile */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-[#33587d] text-white text-center py-6 md:hidden flex flex-col gap-2 animate-slideDown">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              className="py-3 cursor-pointer hover:bg-[#1f426b] text-xl transition-colors duration-200"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
