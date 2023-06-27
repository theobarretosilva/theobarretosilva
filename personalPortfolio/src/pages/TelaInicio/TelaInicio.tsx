import { BarraHabInicio } from "../../components/BarraHabInicio/BarraHabInicio"
import { ConteudoInicio } from "../../components/ConteudoInicio/ConteudoInicio"
import { Lenguage } from "../../components/Lenguage/Lenguage"
import { Navbar } from "../../components/Navbar/Navbar"
import { Rodape } from "../../components/Rodape/Rodape"
import { SectionServicos } from "../../components/SectionServicos/SectionServicos"
import { SectionInicioStyled } from "./TelaInicio.styled"
import React from "react"

export const TelaInicio = () => {
    return(
        <>
            <Navbar />
            <SectionInicioStyled>
                <Lenguage />
                <ConteudoInicio />
            </SectionInicioStyled>
            <BarraHabInicio />
            <SectionInicioStyled>
                <SectionServicos />
            </SectionInicioStyled>
            <Rodape />
        </>
    )
}