import { Link } from "react-router-dom";
import * as S from "./Navbar.styled"
import React, { useState } from 'react';

type NavbarProps = {
    selecionado: boolean,
};

export const Navbar = () => {
    return(
        <S.HeaderStyled>
            <S.NomeTheoStyled>Théo Silva</S.NomeTheoStyled>
            <S.DivNavStyled>
            <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Início</S.PNavStyled></Link>
                <Link to={'/projetos'} style={{ textDecoration: 'none', cursor: 'pointer' }}><S.PNavStyled>Projetos</S.PNavStyled></Link>
            </S.DivNavStyled>
            <S.BtnBaixarCV onClick={}>Baixar CV</S.BtnBaixarCV>
        </S.HeaderStyled>
    );
};