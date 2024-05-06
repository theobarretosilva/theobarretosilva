import { Tecnologias } from "../../components/Secoes/Tecnologias/Tecnologias"
import { SobreMim } from "../../components/Secoes/SobreMim/SobreMim"
import { Lenguage } from "../../components/Lenguage/Lenguage"
import { Navbar } from "../../components/Navbar/Navbar"
import { Rodape } from "../../components/Rodape/Rodape"
import { Servicos } from "../../components/Secoes/Servicos/Servicos"
import { SectionInicioStyled } from "./TelaInicio.styled"
import React from "react"

export const TelaInicio = () => {
    return(
        <>
            <Navbar />
            <SectionInicioStyled id="inicio">
                <Lenguage />
                <SobreMim />
            </SectionInicioStyled>
            <Tecnologias />
            <SectionInicioStyled>
                <Servicos />
            </SectionInicioStyled>
            <Rodape />
        </>
    )
}