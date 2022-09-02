import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const DashboardUsers = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="mx-20 my-20">
                <header className="flex justify-between mb-10 ">
                    <div className="flex items-center gap-10">
                        <h1 className="text-3xl font-bold">Users </h1>
                        <button className="btn btn-primary">
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />{' '}
                            <span className="ml-2">Invite User</span>
                        </button>
                        <h3>View Canceled Users</h3>
                    </div>
                    <div className="flex items-center gap-10">
                        <h3>Total users: 4</h3>
                        <div className="form-control">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search user"
                                    className="input input-bordered"
                                />
                                <button className="btn btn-square">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Email Address
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        First Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Last Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Created On
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Assess permissions
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">
                                        Invited{' '}
                                        <span className="text-blue-500 ml-2 cursor-pointer">
                                            Resend
                                        </span>
                                        <span className="text-blue-500 ml-2 cursor-pointer">
                                            Copy Invitation
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">
                                        Invited{' '}
                                        <span className="text-blue-500 ml-2 cursor-pointer">
                                            Resend
                                        </span>
                                        <span className="text-blue-500 ml-2 cursor-pointer">
                                            Copy Invitation
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardUsers
