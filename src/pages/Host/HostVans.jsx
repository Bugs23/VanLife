import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {getHostVans} from "../../api"

export default function HostVans() {

    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const vanElements = vans.map((van) => (
        <Link to={van.id} className="host-van-link-wrapper" key={van.id}>
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Image of the ${van.name} van`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>{`$${van.price}/day`}</p>
                </div>
            </div>
        </Link>
    ))

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
            <h1>Your listed vans</h1>
            <div>
                {
                    vans.length > 0 ? (
                        <div>
                            {vanElements}
                        </div>
                    ) : (
                        <h2>Loading... </h2>
                    )
                }
            </div>
        </section>
    )
}