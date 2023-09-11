import {useState, useEffect} from "react"
import {Link, useSearchParams} from "react-router-dom"

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    // If there's a typeFilter selected
    // Filter the vans that have the same type as the typeFilter
    // If there's no typeFilter, just display all the vans
    const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = displayedVans.map((van) => (
        <div className="van-tile" key={van.id}>
            <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                <img src={`${van.imageUrl}`} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            // If the value's null (like in clear filters), delete whatever prev key was passed in
            if (value === null) {
                prevParams.delete(key)
            // If the value's not null, set the value to whatever was passed in
            } else {
                prevParams.set(key, value)
            }

            // Return the param that was passed in
            return prevParams
        })
    }
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
                { typeFilter && <button className="van-type clear-filters" onClick={() => handleFilterChange("type", null)}>Clear Filters</button> }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}