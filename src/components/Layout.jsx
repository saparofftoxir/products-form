import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Navbar = lazy(() => import('../pages/Navbar'))
const Home = lazy(() => import('../pages/Home'))
const Admin = lazy(() => import('../pages/Admin/Admin'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Books = lazy(() => import('../pages/Admin/Books'))
const Tasks = lazy(() => import('../pages/Admin/Tasks'))
const Users = lazy(() => import('../pages/Admin/Users'))
const Plans = lazy(() => import('../pages/Admin/Plans'))
const Products = lazy(() => import('../pages/Admin/Products'))
const Basket = lazy(() => import('../pages/Admin/Basket'))
function Layout() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="admin" element={<Admin />} >
                    <Route path='/admin/books' element={<Books />} />
                    <Route path='/admin/tasks' element={<Tasks />} />
                    <Route path='/admin/users' element={<Users />} />
                    <Route path='/admin/plans' element={<Plans />} />
                    <Route path='/admin/products' element={<Products />} />
                    <Route path='/admin/basket' element={<Basket />} />
                </Route>
                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Layout;
