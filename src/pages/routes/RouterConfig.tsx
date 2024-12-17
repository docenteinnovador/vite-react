import { Route, Routes } from "react-router-dom"
import Home from "../Home"
import Proyectos from "../Proyectos"
import Cursos from "../Cursos"
import Servicios from "../Servicios"  
import Contacto from "../Contacto"  




const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
    
      
      
    </Routes>
)
}
export default RouterConfig