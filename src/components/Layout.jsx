import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <div className="container">
            <main>
                <Outlet />
            </main>
            </div>
            <Footer />
        </div>
    )
}