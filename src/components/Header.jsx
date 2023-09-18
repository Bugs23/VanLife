import {Link, NavLink} from "react-router-dom"
import logo from "/images/logo.png"
import {BiUserCircle} from "react-icons/bi"

export default function Header() {
    return (
        <div className="container">
            <header>
                <Link className="site-logo" to="/">
                    <img src={logo} />
                </Link>
                <nav>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/">Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null } to="/host">Hosts</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans">Vans</NavLink>
                    <Link to="login" className="login-link">
                        <BiUserCircle className="login-icon" />
                    </Link>
                </nav>
            </header>
        </div>
    )
}