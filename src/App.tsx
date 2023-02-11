import Portfolio from "./components/portfolio"

import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router"

import Curriculum from "./components/curriculum"
import Redirect from "./helpers/redirect"
export default function App() {
    return (
        <>
            <BrowserRouter basename="portfolio">
                <Routes
                    location={
                        window.location.pathname.replace("/portfolio", "") ||
                        undefined
                    }
                >
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="*" element={<Redirect to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
