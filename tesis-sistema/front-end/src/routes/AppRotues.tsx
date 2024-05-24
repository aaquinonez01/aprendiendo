import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../dashboard/pages/DashboardPage"
import DashboardLayout from "../shared/layouts/DashboardLayout"
import { LoginPage } from "../auth/pages/LoginPage"

export const AppRotues = () => {
    const [status, setStatus] = useState<"Authenticated"|"Not-Authenticasted"|"Checking">("Not-Authenticasted")

    if(status ==="Checking") return <h1>Cargando...</h1>
    return (
    <>
        {
            (status==="Authenticated") ?(<DashboardLayout>
                <Routes>
                    <Route path="/" element={<DashboardPage/>}/>
                    <Route path="*" element={<Navigate to={"/"}/>}/>
                </Routes>

            </DashboardLayout>)
            :
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<Navigate to={"/login"}/>}/>
            </Routes>

        }
    </>
  )
}
