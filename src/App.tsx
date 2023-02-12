import Portfolio from "./components/portfolio"

import { HashRouter, Routes } from "react-router-dom"
import { Route } from "react-router"

import Curriculum from "./components/curriculum"
import Redirect from "./helpers/redirect"
export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="app">
                        <Route path="/app/" element={<Portfolio />} />
                        <Route
                            path="/app/curriculum"
                            element={<Curriculum />}
                        />
                    </Route>

                    <Route path="*" element={<Redirect to="/app/" />} />
                </Routes>
            </HashRouter>
        </>
    )
}
