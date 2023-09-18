import {useState, useEffect} from "react"
import {useParams, Link, NavLink, Outlet, useOutletContext} from "react-router-dom"
import {getHostVans} from "../../api"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setCurrentVan(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    // If the data's still loading, show the "Loading"
    if (loading) {
        return <h1>Loading... </h1>
    }

    // If error's true, show an error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

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