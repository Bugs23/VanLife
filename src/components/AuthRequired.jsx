import {Outlet, Navigate} from "react-router-dom"

export default function AuthRequired() {
    const authRequired = true

    if (!authRequired) {
        return <Navigate to="login" state={{message: "You must login first"}}/>
    }

    return <Outlet />
}