import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MainContent from "../components/MainContent"



const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer /> 
    </div>
  );
};

export default Home;
