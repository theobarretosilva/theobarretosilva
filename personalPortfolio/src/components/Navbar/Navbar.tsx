import { Link } from "react-router-dom";
import * as S from "./Navbar.styled"
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const CV_THEO = "https://github.com/theobarretosilva/theobarretosilva/raw/main/personalPortfolio/src/assets/pdfs/CV_TheoSilva.pdf"

export const Navbar = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = CV_THEO;
        link.download = "CV_TheoSilva.pdf";
        link.target = "_blank";
        link.click();
    }

    const scrollToSection = (sectionId: string) => {
        scroll.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
          offset: -50, // ajuste o valor do deslocamento conforme necessário
        });
    };

    return(
        <S.HeaderStyled>
            <S.NomeTheoStyled>Théo Silva</S.NomeTheoStyled>
            <S.DivNavStyled>
                <ScrollLink
                    to="inicio"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <Link to={'#inicio'} style={{ textDecoration: 'none' }}><S.PNavStyled style={{ textDecoration: 'underline' }}>Início</S.PNavStyled></Link>
                </ScrollLink>
                <ScrollLink
                    to="sobre_mim"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <Link to={'#sobre_mim'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Sobre Mim</S.PNavStyled></Link>
                </ScrollLink>
                <ScrollLink
                    to="tecnologias"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <Link to={'#tecnologias'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Tecnologias</S.PNavStyled></Link>
                </ScrollLink>
                <ScrollLink
                    to="servicos"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <Link to={'#servicos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Servicos</S.PNavStyled></Link>
                </ScrollLink>
                <Link to={'/projetos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Projetos</S.PNavStyled></Link>
            </S.DivNavStyled>
            <S.BtnBaixarCV onClick={downloadCV}>Baixar CV</S.BtnBaixarCV>
        </S.HeaderStyled>
    );
};