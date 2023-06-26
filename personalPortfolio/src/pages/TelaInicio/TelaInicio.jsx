import { Link } from "react-router-dom"
import { BarraHabInicio } from "../../components/BarraHabInicio/BarraHabInicio"
import { ConteudoInicio } from "../../components/ConteudoInicio/ConteudoInicio"
import { Lenguage } from "../../components/Lenguage/Lenguage"
import { Navbar } from "../../components/Navbar/Navbar"
import { PNavStyled } from "../../components/Navbar/Navbar.styled"
import { Rodape } from "../../components/Rodape/Rodape"
import { MainInicioStyled } from "./TelaInicio.styled"

export const TelaInicio = () => {
    return(
        <>
            <Navbar selecionado={true}/>
            <MainInicioStyled>
                <Lenguage />
                <ConteudoInicio />
            </MainInicioStyled>
            <BarraHabInicio />
            <Rodape />
        </>
    )
}