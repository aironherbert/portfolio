import Portfolio from "./components/portfolio"

import { Route, Routes } from "react-router-dom"

import Curriculum from "./components/curriculum"
import Lab from "components/lab"
import Redirect from "helpers/redirect"
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/lab/*" element={<Lab />} />

            <Route path="*" element={<Redirect to="/" />} />
        </Routes>
    )
}
