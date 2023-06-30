import * as S from "./SobreMim.styles"
import React from "react"
import { H1TituloSecao } from "../../PTituloSecao/PTituloSecao"

export const SobreMim = () => {
    return(
        <section id="sobre_mim">
            <H1TituloSecao>SOBRE MIM</H1TituloSecao>
            <S.DivConteudoInicioStyled>
                <S.TextSobreInicioStyled>
                Eu sou um estudante de 17 anos com experiência em programação e desenvolvimento de sistemas. Concluí o curso DEVinHouse[Intelbras] e fiz o ensino médio técnico em Desenvolvimento de Sistemas no SENAI. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Senai.
                <br/>
                Meu objetivo é continuar aprendendo e expandir meus conhecimentos na área de tecnologia e desenvolvimento de sistemas. Tenho interesse especial em programação Front-end e já desenvolvi vários projetos usando Android Studio com a linguagem Java.
                </S.TextSobreInicioStyled>
                <S.TextCelular>Eu sou um estudante de 17 anos com experiência em programação e desenvolvimento de sistemas. Concluí o curso DEVinHouse[Intelbras] e fiz o ensino médio técnico em Desenvolvimento de Sistemas no SENAI. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Senai.</S.TextCelular>
                <S.ImgTheoCelular 
                    src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/fotoTheoInicio.png?raw=true"
                    alt="Foto de Théo Silva"
                />
                <S.TextCelular>Meu objetivo é continuar aprendendo e expandir meus conhecimentos na área de tecnologia e desenvolvimento de sistemas. Tenho interesse especial em programação Front-end e já desenvolvi vários projetos usando Android Studio com a linguagem Java.</S.TextCelular>
                <S.ImgTheoStyled 
                    src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/fotoTheoInicio.png?raw=true"
                    alt="Foto de Théo Silva"
                />
            </S.DivConteudoInicioStyled>
        </section>
    )
}