import { Link } from "react-router-dom";
import * as S from "./Navbar.styled"
import React, { useState } from 'react';

type NavbarProps = {
    selecionado: boolean,
};

const CV_THEO = "https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/pdfs/CV_TheoSilva.pdf"

export const Navbar = () => {
    const downloadCV = () => {
        fetch(CV_THEO).then(response=>response.blob()).then(blob=>{
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = CV_THEO.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag)
            aTag.click();
            aTag.remove();
        })
    }
    return(
        <S.HeaderStyled>
            <S.NomeTheoStyled>Théo Silva</S.NomeTheoStyled>
            <S.DivNavStyled>
            <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Início</S.PNavStyled></Link>
                <Link to={'/projetos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Projetos</S.PNavStyled></Link>
            </S.DivNavStyled>
            <S.BtnBaixarCV onClick={downloadCV}>Baixar CV</S.BtnBaixarCV>
        </S.HeaderStyled>
    );
};