import {Link} from "react-router-dom"
import logo from "/images/logo.png"

export default function Header() {
    return (
        <div className="container">
            <header>
                <Link className="site-logo" to="/">
                    <img src={logo} />
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/host">Hosts</Link>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
        </div>
    )
}