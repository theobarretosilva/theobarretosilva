import { Link } from "react-router-dom";
import * as S from "./Navbar.styled"
import React, { useState } from 'react';

const CV_THEO = "https://github.com/theobarretosilva/theobarretosilva/raw/main/personalPortfolio/src/assets/pdfs/CV_TheoSilva.pdf"

export const Navbar = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = CV_THEO;
        link.download = "CV_TheoSilva.pdf";
        link.target = "_blank";
        link.click();
    }

    return(
        <S.HeaderStyled>
            <S.NomeTheoStyled>Théo Silva</S.NomeTheoStyled>
            <S.DivNavStyled>
                <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled style={{ textDecoration: 'underline', cursor: 'pointer' }}>Início</S.PNavStyled></Link>
                <Link to={'#sobre_mim'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Sobre mim</S.PNavStyled></Link>
                <Link to={'#tecnologias'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Tecnologias</S.PNavStyled></Link>
                <Link to={'#servicos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Serviços</S.PNavStyled></Link>
                <Link to={'/projetos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Projetos</S.PNavStyled></Link>
            </S.DivNavStyled>
            <S.BtnBaixarCV onClick={downloadCV}>Baixar CV</S.BtnBaixarCV>
        </S.HeaderStyled>
    );
};