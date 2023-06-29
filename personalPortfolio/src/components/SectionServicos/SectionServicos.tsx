import { H1TituloSecao } from "../PTituloSecao/PTituloSecao"
import React from "react"
import * as S from './SectionServicos.styles'
import { CardServico } from "../CardServico/CardServico"
import { useState, useEffect, useRef } from "react"
import data from '../../assets/json/dados_cards.json'

export const SectionServicos = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return(
        <>
            <S.SectionCentral>
                <H1TituloSecao conteudo="SERVIÇOS"/>
                <S.TituloServicos>Serviço especializado! Vamos dar uma olhada</S.TituloServicos>
                <S.SubtituloServicos>Como desenvolvedor de sistemas, eu ofereço uma variedade de serviços para atender às necessidades tecnológicas dos meus clientes. Com meu conhecimento em diversas linguagens de programação e plataformas, sou capaz de criar soluções personalizadas e eficientes.</S.SubtituloServicos>
                <S.DivCards ref={carousel} whileTap={{ cursor: "grabbing" }}>
                    <S.InnerDivCards 
                        drag="x"
                        dragConstraints={{ right: 0, left: -width}}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}>
                            {data.map((value, key) => (
                                <CardServico
                                    img={value.imgPath}
                                    titulo={value.titulo}
                                    descricao={value.descricao}
                                    key={key} />
                            ))}
                    </S.InnerDivCards>
                </S.DivCards>
            </S.SectionCentral>
            
        </>
    )
}