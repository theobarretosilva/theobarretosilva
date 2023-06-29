import * as S from './CardServico.styles'
import React from 'react';

type CardServicoProps = {
    img: string,
    titulo: string,
    descricao: string,
};

export const CardServico = ({img, titulo, descricao}: CardServicoProps) => {
    return(
        <S.DivGeral>
            <S.ImgServico src={img}/>
            <S.TituloServico>{titulo}</S.TituloServico>
            <S.DescricaoServico>{descricao}</S.DescricaoServico>
        </S.DivGeral>
    );
};