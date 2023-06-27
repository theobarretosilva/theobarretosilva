import * as S from "./ConteudoInicio.styles"
import React from "react"
import { H1TituloSecao } from "../PTituloSecao/PTituloSecao"

export const ConteudoInicio = () => {
    return(
        <>
            <H1TituloSecao conteudo="SOBRE MIM" />
            <S.DivConteudoInicioStyled>
                <S.TextSobreInicioStyled>
                Eu sou um estudante de 17 anos com experiência em programação e desenvolvimento de sistemas. Concluí o curso DEVinHouse[Intelbras] e fiz o ensino médio técnico em Desenvolvimento de Sistemas no SENAI. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Senai.
                <br/>
                Meu objetivo é continuar aprendendo e expandir meus conhecimentos na área de tecnologia e desenvolvimento de sistemas. Tenho interesse especial em programação Front-end e já desenvolvi vários projetos usando Android Studio com a linguagem Java.
                </S.TextSobreInicioStyled>
                <S.ImgTheoStyled 
                    src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/fotoTheoInicio.png?raw=true"
                    alt="Foto de Théo Silva"
                />
            </S.DivConteudoInicioStyled>
        </>
        
    )
}