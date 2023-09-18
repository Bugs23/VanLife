import {useState, useEffect} from "react"
import {useParams, Link, useLocation} from "react-router-dom"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import {getVans} from "../../api"

export default function VanDetail() {

    const {id} = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        
        loadVans()
    }, [id])

    // Optional chaining... (.state?.)
    // If there's a location.state, check for the search property and set the search variable = to the state.search value
    // If there's no location.state, make it an empty string
    const search = location.state?.search || ""

    // Optional chaining... (.state?.)
    // If there's a location.type, check for the search property and set the search variable = to the type.search value
    // If there's no location.type, make it = to all
    const type = location.state?.type || "all"

    // If the data's still loading, show the "Loading"
    if (loading) {
        return <h1>Loading... </h1>
    }

    // If error's true, show an error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-detail-container">
            <Link to={`..?${search}`} relative="path" className="back-button">
                <BsFillArrowLeftSquareFill className="back-arrow" /> 
                <span>Back to {type} vans</span>
            </Link>
            {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price">{`${van.price}/day`}</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading... </h2>
            }
        </div>
    )
}