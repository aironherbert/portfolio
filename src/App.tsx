import Portfolio from "./components/portfolio"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Curriculum from "./components/curriculum"
import Redirect from "./helpers/redirect"
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="*" element={<Redirect to="/portfolio" />} />
            </Routes>
        </BrowserRouter>
    )
}
