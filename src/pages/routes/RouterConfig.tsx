import { Route, Routes } from "react-router-dom"
import Home from "../Home"
import Proyectos from "../Proyectos"
import Cursos from "../Cursos"
import Servicios from "../Servicios"  
import Contacto from "../Contacto"  
import Juego from "../Juego"




const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/juego" element={<Juego />} />
    
      
      
    </Routes>
)
}
export default RouterConfig