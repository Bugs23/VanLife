import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Login from "./pages/Login"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import NotFound from "./pages/NotFound"

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
                    <Route path="login" element={<Login />} />
                    {/* DASHBOARD LAYOUT STARTS */}
                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="Income" element={<Income />} />
                        <Route path="Reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        {/* HOST VAN DETAILS LAYOUT STARTS */}
                        <Route path="vans/:id" element={<HostVanDetail />} >
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                        {/* HOST VAN DETAILS LAYOUT ENDS */}
                    </Route>
                    {/* DASHBOARD LAYOUT ENDS */}
                    <Route path="*" element={<NotFound />} />
                </Route>
                {/* PAGE LAYOUT ENDS */}
            </Routes>
        </BrowserRouter>
    )
}

export default App