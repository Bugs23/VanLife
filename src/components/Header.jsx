import {useState} from "react"
import {Link, NavLink} from "react-router-dom"
import logo from "/images/logo.png"
import {BiUserCircle} from "react-icons/bi"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    const [mobileIconClick, setMobileIconClick] = useState(false)

    // Change the mobile menu icon if it's clicked
    function handleMobileIconClick() {
        setMobileIconClick((prevMobileIconClick) => !prevMobileIconClick)
    }

    const mobileIcon = mobileIconClick ? "fas fa-times" : "fa-solid fa-bars"

    const mobileNavActive = mobileIconClick ? "#navbar active" : "#navbar"

    return (
        <header>
            <Link className="site-logo" to="/">
                <img src={logo} />
            </Link>
            <nav className={mobileNavActive}>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null } to="/host">Hosts</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans">Vans</NavLink>
                <Link to="login" className="login-link">
                    <BiUserCircle className="login-icon" />
                </Link>
                <button onClick={fakeLogOut}>Log Out</button>
            </nav>
            <div id="mobile">
                <i className={mobileIcon} onClick={handleMobileIconClick}></i>
            </div>
        </header>
    )
}