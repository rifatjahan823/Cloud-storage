import {
    faBucket,
    faDollarSign,
    faGear,
    faTableColumns,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import DashboardNav from '../../components/DashboardNav'

const DashboardMain = () => {
    return (
        <div>
            <DashboardNav />
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here  */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <div className="menu p-4 overflow-y-auto w-80 relative bg-blue-100 text-base-content">
                        <div className="flex-col items-stretch">
                            <ul>
                                {/* Sidebar content Top */}
                                <li>
                                    <Link to="dashboard">
                                        {' '}
                                        <FontAwesomeIcon
                                            icon={faTableColumns}
                                        />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="users">
                                        {' '}
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        User
                                    </Link>
                                </li>
                                <li>
                                    <Link to="buckets">
                                        <FontAwesomeIcon icon={faBucket} />
                                        Buckets
                                    </Link>
                                </li>
                            </ul>
                            <ul className="absolute bottom-[8%]">
                                {/* Sidebar content Bottom */}

                                <li>
                                    <Link to="users">
                                        {' '}
                                        <FontAwesomeIcon icon={faGear} />
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faDollarSign} />
                                        Billing
                                    </Link>
                                </li>
                                <li className="mt-5 text-sm">
                                    <Link to="">&copy; IDrive Inc</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMain
