import { DivConteudoInicioStyled, ImgTheoStyled, TextSobreInicioStyled } from "./ConteudoInicio.styles"

export const ConteudoInicio = () => {
    return(
        <DivConteudoInicioStyled>
            <TextSobreInicioStyled>
                Meu nome é Théo Barreto Silva e eu vou contar um pouquinho sobre mim. Tenho 17 anos e atualmente faço o curso DEVinHouse[Intelbras].<br/>
                Concluí o ensino médio técnico em Desenvolvimento de Sistemas no SENAI. Tenho como objetivo aprender cada vez mais para poder abranger ainda mais campos da tecnologia e desenvolvimento de sistemas.<br/>
                Estou cursando a graduação em Análise e Desenvolvimento de Sistemas no SENAI.
            </TextSobreInicioStyled>
            <ImgTheoStyled 
                src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/fotoTheoInicio.png?raw=true"
                alt="Foto de Théo Silva"
            />
        </DivConteudoInicioStyled>
    )
}