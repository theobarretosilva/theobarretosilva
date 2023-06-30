import React, { useState } from "react"
import './MenuHamburguer.css'

export const MenuHamburguer = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return(
        <div className="divGeral">
            <img className="icon" src="../../src/assets/imgs/menu.png" alt="Icone menu" onClick={ToggleMode} />
            <div className={active ? "menu menuOpen" : "menu menuClose" }>
                <img className="innerIcon" src="../../src/assets/imgs/close_menu.svg" alt="Icone menu" onClick={ToggleMode} />
                <div className="list">
                    <ul className="listItems">
                        <li>Início</li>
                        <li>Sobre mim</li>
                        <li>Serviços</li>
                        <li>Projetos</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}