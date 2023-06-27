import { H1TituloSecao } from "../PTituloSecao/PTituloSecao"
import React from "react"
import * as S from './SectionServicos.styles'

export const SectionServicos = () => {
    return(
        <>
            <S.DivCentral>
                <H1TituloSecao conteudo="SERVIÇOS"/>
                <S.TituloServicos>Serviço especializado! Vamos dar uma olhada</S.TituloServicos>
                <S.SubtituloServicos>Como desenvolvedor de sistemas, eu ofereço uma variedade de serviços para atender às necessidades tecnológicas dos meus clientes. Com meu conhecimento em diversas linguagens de programação e plataformas, sou capaz de criar soluções personalizadas e eficientes.</S.SubtituloServicos>
            </S.DivCentral>
            
        </>
    )
}