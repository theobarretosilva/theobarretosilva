import { H1TituloSecao } from "../../PTituloSecao/PTituloSecao"
import React from "react"
import * as S from './Servicos.styles'
import { CardServico } from "../../CardServico/CardServico"
import { useState, useEffect, useRef } from "react"
import data from '../../../assets/json/dados_cards.json'

export const Servicos = () => {
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current?.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return(
        <S.SectionCentral id="servicos">
            <H1TituloSecao>SERVIÇOS</H1TituloSecao>
            <S.TituloServicos>Serviço especializado! Vamos dar uma olhada</S.TituloServicos>
            <S.SubtituloServicos>Como desenvolvedor de sistemas, eu ofereço uma variedade de serviços para atender às necessidades tecnológicas dos meus clientes. Com meu conhecimento em diversas linguagens de programação e plataformas, sou capaz de criar soluções personalizadas e eficientes.</S.SubtituloServicos>
            <S.DivServicosCards>
                <S.BtnNext onClick={handleLeftClick}>
                    <img style={{ width: '2.5rem'}} src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/arrow_left.png?raw=true" />
                </S.BtnNext>
                <S.DivCards ref={carousel} >
                    {data.map((value, key) => (
                        <CardServico
                            img={value.imgPath}
                            titulo={value.titulo}
                            descricao={value.descricao}
                            key={key} />
                    ))}
                </S.DivCards>
                <S.BtnNext onClick={handleRightClick} style={{ rotate: '180deg' }}>
                    <img style={{ width: '2.5rem'}} src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/arrow_left.png?raw=true" />
                </S.BtnNext>
            </S.DivServicosCards>
        </S.SectionCentral>
    )
}