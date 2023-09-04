import {useOutletContext} from "react-router-dom"

export default function HostVanPhotos() {

    const {currentVan} = useOutletContext()

    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" alt={`Image of the ${currentVan.name} van`} />
    )
}