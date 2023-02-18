import { DivLinksRodapeStyled, FooterStyled, ImgLinksRodapeStyled, LinhaRodapeStyled, PCopyrightStyled } from "./Rodape.styles"

export const Rodape = () => {
    return(
        <>
            <LinhaRodapeStyled />
            <FooterStyled>
                <PCopyrightStyled>&copy; Copyright all rights reserved - 2023</PCopyrightStyled>
                <DivLinksRodapeStyled>
                    <a href="https://www.linkedin.com/in/th%C3%A9o-barreto-silva-245994202/" target="_blank"><ImgLinksRodapeStyled src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/linkedIn.png?raw=true" alt="LinkedIn-Théo" /></a>
                    <a href="https://t.me/barretotheo25" target="_blank"><ImgLinksRodapeStyled src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/telegram.png?raw=true" alt="Telegram-Théo" /></a>
                    <a href="https://github.com/theobarretosilva" target="_blank"><ImgLinksRodapeStyled src="https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/github.png?raw=true" alt="GitHub-Théo" /></a>
                </DivLinksRodapeStyled>
            </FooterStyled>
        </>
    )
}