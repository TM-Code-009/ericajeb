import { Outlet } from "react-router-dom"
import Header from "../Pages/Header"


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout