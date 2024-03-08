import React from "react";
import Typewriter from "typewriter-effect";
import Socializar from "../../components/socializar/socializar";
import { introText } from "../../infos";
import './home.css'

function Home () {
    return (
        <div id="introText" className="introText">
            <Socializar/>
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
        </div>
    )
}

export default Home