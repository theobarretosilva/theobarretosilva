import { DivLinksRodapeStyled, FooterStyled, ImgLinksRodapeStyled, LinhaRodapeStyled, PCopyrightStyled } from "./Rodape.styles"

export const Rodape = () => {
    return(
        <>
            <LinhaRodapeStyled />
            <FooterStyled>
                <PCopyrightStyled>&copy; Copyright all rights reserved - 2023</PCopyrightStyled>
                <DivLinksRodapeStyled>
                    <ImgLinksRodapeStyled src="" alt="" />
                    <ImgLinksRodapeStyled src="" alt="" />
                    <ImgLinksRodapeStyled src="" alt="" />
                </DivLinksRodapeStyled>
            </FooterStyled>
        </>
    )
}