import { Route, Routes } from "react-router-dom"
import { TelaInicio } from "../pages/TelaInicio/TelaInicio"
import { TelaProjetos } from "../pages/TelaProjetos/TelaProjetos"

export const Router = () => {
    return(
        <Routes>
            <Route exact path={"/"} element={<TelaInicio />} />
            <Route exact path={"/projetos"} element={<TelaProjetos />} />
        </Routes>
    )
}