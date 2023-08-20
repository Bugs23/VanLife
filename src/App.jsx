import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"

import "./server"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PAGE LAYOUT STARTS */}
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                    {/* DASHBOARD LAYOUT STARTS */}
                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="Income" element={<Income />} />
                        <Route path="Reviews" element={<Reviews />} />
                    </Route>
                    {/* DASHBOARD LAYOUT ENDS */}
                </Route>
                {/* PAGE LAYOUT ENDS */}
            </Routes>
        </BrowserRouter>
    )
}

export default App