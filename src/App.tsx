import "./App.css";

import { BrowserRouter } from "react-router-dom";

import RouterConfig from "./pages/routes/RouterConfig";
import Navbar from "./components/NavBar";




function App() {
 





  return (
    <BrowserRouter>
      <Navbar />
      

      
      <RouterConfig /> 
    </BrowserRouter>

    
  );

}
export default App;

