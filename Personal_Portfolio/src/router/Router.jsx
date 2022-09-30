import { Route, Routes } from "react-router-dom";
import { TelaInicial } from "../pages/TelaInicial";
import { TelaPortfolio } from "../pages/TelaPortfolio";

export const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />
            <Route exact path="/portfolio" element={<TelaPortfolio />} />
        </Routes>
    )
}