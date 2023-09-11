import {useState, useEffect} from "react"
import {useParams, Link, useLocation} from "react-router-dom"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function VanDetail() {

    const params = useParams()

    const location = useLocation()

    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    // Optional chaining...
    // If there's a location.state, check for the search property and set the search variable = to the state.search value
    // If there's no location.state, make it an empty string
    const search = location.state?.search || ""

    // Optional chaining...
    // If there's a location.type, check for the search property and set the search variable = to the type.search value
    // If there's no location.type, make it = to all
    const type = location.state?.type || "all"

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