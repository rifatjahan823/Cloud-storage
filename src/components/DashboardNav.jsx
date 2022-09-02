import {
    faBars,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardNav = () => {
    return (
        <div className="bg-blue-500 relative">
            <div className="max-w-7xl mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                      
                        {/* Drawer BTN and logo */}
                        <div className="flex items-center gap-10">
                            <span className=" text-gray-50 normal-case text-3xl">
                                IDrive e2
                            </span>

                            <label
                                htmlFor="my-drawer"
                                className=" drawer-button cursor-pointer lg:hidden"
                            >
                                <span className="text-gray-50 text-2xl">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className=" hidden lg:flex  absolute left-[350px]">
                       <p className='text-white'>Plan:Yearly(1TB)</p>
                    </div>
                    <div className="navbar-end">
                        <div className="bg-gray-100 px-3 pb-2 flex justify-center items-center  rounded-full ">
                            <div className="dropdown  dropdown-end dropdown-hover">
                                <label
                                    tabIndex="0"
                                    className=" m-1 text-3xl text-blue-500 "
                                >
                                    a
                                </label>
                                <ul
                                    tabIndex="0"
                                    className="dropdown-content menu  shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <p>
                                            <FontAwesomeIcon icon={faUser} />
                                            Account
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <FontAwesomeIcon
                                                icon={faRightFromBracket}
                                            />
                                            Logout
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav
