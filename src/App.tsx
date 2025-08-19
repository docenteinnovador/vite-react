import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./pages/routes/RouterConfig";
import Navbar from "./components/NavBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const FloatingButton = () => {
    const navigate = useNavigate();

    return (
      <motion.button
        onClick={() => navigate("/moldea")}
        className="fixed z-50 px-5 py-2 text-base font-extrabold text-white transition-all duration-300 rounded-full shadow-xl bottom-6 right-6 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:scale-105 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 md:px-6 md:py-3 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        ZONA DE MOLDEADO
      </motion.button>
    );
  };

  return (
    <BrowserRouter basename="/vite-react">
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Botón flotante siempre visible */}
      <FloatingButton />

      {/* Rutas de la aplicación */}
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
