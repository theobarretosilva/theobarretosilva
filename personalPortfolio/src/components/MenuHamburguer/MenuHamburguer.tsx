import React, { useState } from "react"
import './MenuHamburguer.css'
import { Lenguage } from '../Lenguage/Lenguage'

export const MenuHamburguer = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return(
        <div className="divGeral">
            <img className="icon" src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/menu.png?raw=true" alt="Icone menu" onClick={ToggleMode} />
            <div className={active ? "menu menuOpen" : "menu menuClose" }>
                <img className="innerIcon" src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/close_menu.png?raw=true" alt="Icone menu" onClick={ToggleMode} />
                <div className="list">
                    <ul className="listItems">
                        <li className="link">Início</li>
                        <div className="linha"/>
                        <br />
                        <li className="link">Sobre mim</li>
                        <div className="linha"/>
                        <br />
                        <li className="link">Serviços</li>
                        <div className="linha"/>
                        <br />
                        <li className="link">Projetos</li>
                        <div className="linha"/>
                    </ul>
                </div>
                <Lenguage />
            </div>
        </div>
    )
}