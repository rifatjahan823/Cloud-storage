import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsCheck2, BsTrashFill, BsBucketFill, BsPieChartFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa";
import flag from '../../img/flag.png';
import Select from 'react-select';


const Dashboard = () => {
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
            <div className=" mx-10  my-20">
                <div className='flex items-center'>
                    <div className='mr-7'>
                        <h1 className="">Dashboard</h1>
                    </div>
                    <div>

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
                </div>
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5'>
                    <div className='bg-slate-300 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>9</h1>
                            <button className=' border-2 border-blue-500 rounded px-2 py-1 bg-white text-blue-500 font-medium'>Create bucket</button>
                        </div>
                        <p className='text-right flex justify-end mt-3'><BsBucketFill style={{ fontSize: '40px' }} /></p>
                    </div>
                    <div className='bg-cyan-400 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>1426 GB</h1>

                        </div>
                        <p className='text-right flex justify-end mt-3'><BsTrashFill style={{ fontSize: '40px' }} /></p>
                    </div>
                    <div className='bg-blue-400 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>1504</h1>
                        </div>
                        <p className='text-right flex justify-end mt-3'><BsPieChartFill style={{ fontSize: '40px' }} /></p>
                    </div>
                </div>
                {/* --===========---- */}
                <div className='border-t-2 slate-700  mt-8'></div>
                <div>
                    <h1 className='my-7 text-xl font-bold '>Enabled regions</h1>
                    <div className='grid gap-4 md:grid-cols-3 grid-cols-1 bg-gray-50 p-5 rounded shadow-lg'>
                        <div className=''>
                            <p className='ml-8 font-medium mb-5'>Name</p>
                            {/* -----------===========----- */}
                            <div className='flex items-center'>
                                <div>
                                    <BsCheck2 style={{ color: 'green', fontSize: "20px" }} />
                                </div>
                                <div className='mx-4'>
                                    <img style={{ width: '30px' }} src={flag} alt="" />
                                </div>
                                <div>
                                    <p className='font-medium text-gray-600'>Chicago</p>
                                </div>
                            </div>
                            {/* -----------===========----- */}
                            <div className='flex items-center my-4'>
                                <div>
                                    <BsCheck2 style={{ color: 'green', fontSize: "20px" }} />
                                </div>
                                <div className='mx-4'>
                                    <img style={{ width: '30px' }} src={flag} alt="" />
                                </div>
                                <div>
                                    <p className='font-medium text-gray-600'>Chicago</p>
                                </div>
                            </div>
                            {/* -----------===========----- */}
                            <div className='flex items-center'>
                                <div>
                                    <BsCheck2 style={{ color: 'green', fontSize: "20px" }} />
                                </div>
                                <div className='mx-4'>
                                    <img style={{ width: '30px' }} src={flag} alt="" />
                                </div>
                                <div>
                                    <p className='font-medium text-gray-600'>Chicago</p>
                                </div>
                            </div>
                            <div className='ml-8'>
                                <button className='px-3 py-1 bg-blue-500 mt-5 rounded-md text-white'>Add New Region</button>
                            </div>
                        </div>
                        <div className=''>
                            <p className=' font-medium mb-4' >S3 Endpoint</p>
                            <div className='flex items-center'>
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy /></span>
                            </div>
                            <div className='flex items-center my-4'>
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy /></span>
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Dashboard;
