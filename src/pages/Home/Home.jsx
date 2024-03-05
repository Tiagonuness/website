import React from "react";
import { introText } from "../../infos";
import './Home.css'

function Home () {
    return (
        <div id="introText" className="introText">
            <h1 className="apresentação">{introText.title}</h1>
        </div>
    )
}

export default Home