import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticleBackground from "./particlesBackground/ParticleBackground";
import './index.css';

function App(){
  return (
    <div className="App">
      <ParticleBackground />
      <h1>Seu conteúdo aqui</h1>
    </div>
  )
}

export default App