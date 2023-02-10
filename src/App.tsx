import Portfolio from "./components/portfolio"

import { HashRouter, Route, Routes } from "react-router-dom"
import Curriculum from "./components/curriculum"
import Redirect from "./helpers/redirect"
export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="*" element={<Redirect to="/" />} />
            </Routes>
        </HashRouter>
    )
}
