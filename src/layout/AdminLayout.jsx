import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <section className="admin-content">
        <Outlet />
    </section>
  )
}

export default AdminLayout