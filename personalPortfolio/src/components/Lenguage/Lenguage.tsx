import { DivLenguageStyled, PLenguageStyled } from "./Lenguage.styled"
import React from "react"

export const Lenguage = () => {
    return(
        <DivLenguageStyled >
            <PLenguageStyled style={{fontWeight:'600', cursor:'default'}}>Português</PLenguageStyled>
            <PLenguageStyled>Inglês</PLenguageStyled>
        </DivLenguageStyled>
    )
}