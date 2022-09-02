import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsBucketFill } from "react-icons/bs";
import React from 'react'

const DashboardBuckets = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="mx-20 my-20">
                <header className="xl:flex justify-between">
                    <div className=" md:flex md:items-center md:gap-10 grid gap-2 mb-5 xl:mb-10 ">
                        <h1 className="text-3xl font-bold">Users </h1>
                        <label
                            for="create-bucket-model"
                            className="btn btn-primary  modal-button max-w-[200px]"
                        >
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />{' '}
                            <span className="ml-2">Create Bucket</span>
                        </label>
                        <input
                            type="checkbox"
                            id="create-bucket-model"
                            class="modal-toggle"
                        />
                        {/* -----modal------------ */}
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box relative">
                                <label
                                    for="create-bucket-model"
                                    class="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </label>
                                <h3 class="font-bold text-xl flex items-center ">
                                    <BsBucketFill className='mr-3' style={{ fontSize: '30px' }} /> Create Bucket
                                </h3>
                                {/* -----======------- */}
                                <div className='bg-blue-100 p-5 mt-4 rounded-lg'>
                                    <label htmlFor="" className='font-medium '>Enabled regions</label> <br />
                                    <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-1 placeholder:text-slate-900   focus:outline-none focus:border-gray-300' type="text" placeholder='finance' />
                                </div>
                                {/* ---=======---------- */}
                                <div className='bg-blue-100 p-5 mt-4 rounded-lg'>
                                    <div class="form-control">
                                        <label class="label cursor-pointer">
                                            <h3 className='font-medium '>Default encryption</h3>
                                            <input type="checkbox" class="toggle toggle-primary"  />
                                        </label>
                                    </div>
                                </div>
                                {/* ---=======---------- */}
                                <div className='bg-blue-100 p-5 mt-4 rounded-lg'>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <h3 className='font-medium '>Object locking</h3>
                                            <p className='text-sm'>required support retention</p>
                                            <p className='text-sm'>required support retention</p>
                                        </div>
                                        <div class="form-control">
                                            <label class="label cursor-pointer">
                                                <input type="checkbox" class="toggle toggle-primary"  />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* ------========- */}
                                <div className='mt-5'>
                                    <button className='py-1 px-4 bg-blue-500 text-white rounded-md mr-3 font-medium'>Create Bucket</button>
                                    <button className='rounded-md border-2 border-gray-300 text-black font-medium'style={{padding:"2.5px 12px"}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        <h3>View Canceled Users</h3>

                    </div>
                    <div className="md:flex items-center gap-10 mb-5 xl:mb-10">
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
                        <table className="w-full text-sm text-left text-gray-500  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50   ">
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
                                <tr className="bg-white border-b      hover:bg-gray-50  ">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b      hover:bg-gray-50  ">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b      hover:bg-gray-50  ">
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">$2999</td>
                                </tr>
                                <tr className="bg-white border-b      hover:bg-gray-50  ">
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
                                <tr className="bg-white border-b      hover:bg-gray-50  ">
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

export default DashboardBuckets
