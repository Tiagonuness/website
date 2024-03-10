import React from "react";
import Typewriter from "typewriter-effect";
import { introText } from "../../infos";
import { BsArrowDown } from "react-icons/bs";
import './home.css'

function Home () {
    return (
        <div id="introText" className="introText">
            <h1 className="apresentação">{introText.title} <span className="meuNome">{introText.nome}</span></h1>
            <h2 className="animados">
                <Typewriter
                options={{
                    strings: [introText.animado.frase1,  introText.animado.frase2],
                    autoStart: true,
                    loop: true,
                    }}
                />       
            </h2>
            <div className="scroll-down-icon">
                <BsArrowDown />
            </div>
        </div>
    )
}

export default Home