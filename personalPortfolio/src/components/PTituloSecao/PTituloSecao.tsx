import { TituloSecao } from "./PTituloSecao.styles"
import React from "react"

type H1TituloSecaoProps = React.HTMLProps<HTMLHeadingElement> & {
    children: string,
}

export const H1TituloSecao = ({children}: H1TituloSecaoProps) => {
    return <TituloSecao>{children}</TituloSecao>
}