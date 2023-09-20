import {Outlet, Navigate} from "react-router-dom"

export default function AuthRequired() {
    const authRequired = false

    if (!authRequired) {
        return <Navigate to="login" />
    }

    return <Outlet />
}