import {useState, useEffect} from "react"
import {useParams, Link, NavLink, Outlet, useOutletContext} from "react-router-dom"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = useState()

    const {id} = useParams()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                <BsFillArrowLeftSquareFill className="back-arrow" /> 
                <span>Back to all vans</span>
            </Link>
            {
                currentVan ? (
                    <>
                        <div className="host-van-detail-layout-container">
                            <div className="host-van-detail">
                                <img src={`${currentVan.imageUrl}`} alt={`Image of the ${currentVan.name} van`} />
                                <div className="host-van-detail-info-text">
                                    <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                                    <h3>{currentVan.name}</h3>
                                    <h4>${currentVan.price}/day</h4>
                                </div>
                            </div>
                        </div>
                        <nav className="host-van-detail-nav">
                            <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null }>Details</NavLink>
                            <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                            <NavLink to="photos" style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                        </nav>
                        <Outlet context={{currentVan}} />
                    </>
                ) : (
                    <h2>Loading... </h2>
                )
            }
        </section>
    )
}