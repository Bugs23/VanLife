import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import logo from "/images/logo.png"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import "./server"

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <header>
                    <Link className="site-logo" to="/">
                        <img src={logo} />
                    </Link>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/vans">Vans</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />}>Vans</Route>
                    <Route path="/vans/:id" element={<VanDetail />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
