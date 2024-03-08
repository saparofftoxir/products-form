import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"

function Admin() {
  return (
    <div className="flex flex-1">
      <Sidebar/>
      <main className="h-screen flex-1 ">
        <Outlet/>
      </main>
    </div>
  )
}

export default Admin;