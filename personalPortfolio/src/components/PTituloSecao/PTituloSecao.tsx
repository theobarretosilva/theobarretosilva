import { TituloSecao } from "./PTituloSecao.styles"
import React from "react"

type H1TituloSecaoProps = {
    conteudo: string,
}

export const H1TituloSecao = ({conteudo}: H1TituloSecaoProps) => {
    return <TituloSecao>{conteudo}</TituloSecao>
}