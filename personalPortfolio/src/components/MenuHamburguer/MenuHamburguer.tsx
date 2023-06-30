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
                        <li>Início</li>
                        <hr/>
                        <li>Sobre mim</li>
                        <hr/>
                        <li>Serviços</li>
                        <hr/>
                        <li>Projetos</li>
                        <hr/>
                    </ul>
                </div>
            </div>
        </div>
    )
}