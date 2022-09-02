import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import DashboardNav from '../../components/DashboardNav'

const DashboardMain = () => {
    return (
        <div>
            <DashboardNav />
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* Page content here  */}
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-blue-100 text-base-content">
                        {/* Sidebar content here  */}
                        <li>
                            <Link to="users">User</Link>
                        </li>
                        <li>
                            <Link to="buckets">Buckets</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardMain
