import * as S from './CardServico.styles'
import React from 'react';

export const CardServico = () => {
    return(
        <S.DivGeral>
            <S.ImgServico src='../../src/assets/imgs/servicos/desenvolvApi.png'/>
            <S.TituloServico>Desenvolvimento de API</S.TituloServico>
            <S.DescricaoServico>Para o desenvolvimento de API utilizo JS, TS, PostgreSQl, MongoDB, NestJS</S.DescricaoServico>
        </S.DivGeral>
    );
};