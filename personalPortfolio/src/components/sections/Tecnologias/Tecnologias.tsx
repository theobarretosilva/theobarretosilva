import { H1TituloSecao } from "../../PTituloSecao/PTituloSecao"
import * as S from "./Tecnologias.styles"
import React, { useRef } from "react"

export const Tecnologias = () => {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current?.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return(
        <S.SectionTec id="tecnologias">
            <H1TituloSecao>TECNOLOGIAS</H1TituloSecao>
            <S.DivTecs>
                <S.BtnNext onClick={handleLeftClick}>
                    <img style={{ width: '2.5rem'}} src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/arrow_left.png?raw=true" />
                </S.BtnNext>
                <S.Carousel ref={carousel}>
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="AndroidStudio" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="NestJS" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="Aws" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" />
                    <S.ImgHabInicio src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" />
                </S.Carousel>
                <S.BtnNext onClick={handleRightClick} style={{ rotate: '180deg' }}>
                    <img style={{ width: '2.5rem'}} src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/arrow_left.png?raw=true" />
                </S.BtnNext>
            </S.DivTecs>
        </S.SectionTec>
    )
}