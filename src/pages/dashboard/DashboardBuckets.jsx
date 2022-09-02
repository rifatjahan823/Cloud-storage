import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsBucketFill } from "react-icons/bs";
import React, { useState } from 'react';
import Select from 'react-select';

const DashboardBuckets = () => {
    const data = [
        {
            value: 1,
            text: 'Up Arrow',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"/></svg>
        },
        {
            value: 2,
            text: 'Down Arrow',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"/></svg>
        },
        {
            value: 3,
            text: 'Left Arrow',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"/></svg>
        },
        {
            value: 4,
            text: 'Right Arrow',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"/></svg>
        },
        
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
    return (
        <section className="max-w-7xl mx-auto">
            <div className="mx-6 my-20">
                <header className="md:flex justify-between ">
                    <div className="  md:flex md:items-center lg:gap-8 md:gap-5 gap-2 mb-5 xl:mb-10 ">
                        <h1 className="text-3xl md:text-2xl font-bold mb-5 md:mb-0">Users </h1>
                        <label
                            for="create-bucket-model"
                            className=" lg:max-w-[150px] mx-w-[120px] inline btn-primary  md:max-w-[150px] md:text-[14px] my-2 md:my-0 p-2 rounded-md "
                        >
                            {' '}
                            <FontAwesomeIcon icon={faPlus} />{' '}
                            <span className="ml-1">Create Bucket</span>
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
                                    <Select
                                        placeholder="All Regions"
                                        value={selectedOption}
                                        options={data}
                                        onChange={handleChange}
                                        getOptionLabel={e => (
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {e.icon}
                                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                                            </div>
                                        )}
                                    />
                                </div>
                                {/* -----======------- */}
                                <div className='bg-blue-100 p-5 mt-4 rounded-lg'>
                                    <label htmlFor="" className='font-medium '>Bucket Name</label> <br />
                                    <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-1 placeholder:text-slate-900   focus:outline-none focus:border-gray-300' type="text" placeholder='finance' />
                                </div>
                                {/* ---=======---------- */}
                                <div className='bg-blue-100 p-5 mt-4 rounded-lg'>
                                    <div class="form-control">
                                        <label class="label cursor-pointer">
                                            <h3 className='font-medium '>Default encryption</h3>
                                            <input type="checkbox" class="toggle toggle-primary" />
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
                                                <input type="checkbox" class="toggle toggle-primary" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* ------========- */}
                                <div className='mt-5'>
                                    <button className='py-1 px-4 bg-blue-500 text-white rounded-md mr-3 font-medium'>Create Bucket</button>
                                    <button className='rounded-md border-2 border-gray-300 text-black font-medium' style={{ padding: "2.5px 12px" }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        <h3 className='mt-5 md:mt-0'>View Canceled Users</h3>

                    </div>
                    <div className="md:flex items-center md:gap-2 lg:gap-4 mb-5 xl:mb-10">
                        <h3>Total users: 4</h3>
                        <div className="form-control">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search user"
                                    className="input input-bordered md:w-36"
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
