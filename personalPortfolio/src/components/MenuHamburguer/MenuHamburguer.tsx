import React, { useState } from "react"
import './MenuHamburguer.css'

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
                        <hr className="linha"/>
                        <li className="link">Sobre mim</li>
                        <hr className="linha"/>
                        <li className="link">Serviços</li>
                        <hr className="linha"/>
                        <li className="link">Projetos</li>
                        <hr className="linha"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}