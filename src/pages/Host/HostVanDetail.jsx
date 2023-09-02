import {useState, useEffect} from "react"
import {useParams, Link, Outlet} from "react-router-dom"

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = useState()

    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <section>
            <Link to=".." relative="path" className="back-button"><>&larr;</> <span>Back to all vans</span></Link>
            {
                currentVan ? (
                    <>
                        <div className="host-van-detail-layout-container">
                            <div className="host-van-detail">
                                <img src={`/images/${currentVan.imageUrl}`} alt={`Image of the ${currentVan.name} van`} />
                                <div className="host-van-detail-info-text">
                                    <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                                    <h3>{currentVan.name}</h3>
                                    <h4>${currentVan.price}/day</h4>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </>
                ) : (
                    <h2>Loading... </h2>
                )
            }
        </section>
    )
}