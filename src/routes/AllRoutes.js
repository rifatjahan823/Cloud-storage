import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import DashboardBuckets from '../pages/dashboard/DashboardBuckets'
import DashboardMain from '../pages/dashboard/DashboardMain'
import DashboardUsers from '../pages/dashboard/DashboardUsers'
import Home from '../pages/home/Home'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboardMain" element={<DashboardMain />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="buckets" element={<DashboardBuckets />} />
                <Route path="users" element={<DashboardUsers />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes
