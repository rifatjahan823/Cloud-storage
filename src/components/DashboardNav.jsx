import {
    faBars,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardNav = () => {
    return (
        <div className="bg-blue-500">
            <div className="max-w-7xl mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex="0">
                                    <a className="justify-between">
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        {/* Drawer BTN and logo */}
                        <div className="flex items-center gap-10">
                            <span className=" text-gray-50 normal-case text-3xl">
                                IDrive e2
                            </span>

                            <label
                                htmlFor="my-drawer"
                                className=" drawer-button cursor-pointer"
                            >
                                <span className="text-gray-50 text-2xl">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li tabIndex="0">
                                <a>
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
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
