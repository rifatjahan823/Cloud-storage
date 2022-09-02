import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsCheck2,BsTrashFill,BsBucketFill,BsPieChartFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa";
import flag from '../../img/flag.png'
const Dashboard = () => {

    return (
        <section className="max-w-7xl mx-auto">
            <div className=" mx-10  my-20">
                <div className='flex items-center'>
                    <div className='mr-7'>
                        <h1 className="">Dashboard</h1>
                    </div>
                    <div>
                        <select class="select select-info w-full max-w-xs">
                            <option disabled selected>All Regions  <FontAwesomeIcon icon={faPlus} /></option>
                            <option>English, &#xf042;</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>
                    </div>
                </div>
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5'>
                    <div className='bg-cyan-200 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>9</h1>
                            <button className=' border-2 border-blue-500 rounded px-2 py-1 bg-white text-blue-500 font-medium'>Create bucket</button>
                        </div>
                            <p className='text-right flex justify-end mt-3'><BsBucketFill style={{fontSize:'40px'}} /></p>
                    </div>
                    <div className='bg-cyan-300 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>1426 GB</h1>
                           
                        </div>
                            <p className='text-right flex justify-end mt-3'><BsTrashFill style={{fontSize:'40px'}} /></p>
                    </div>
                    <div className='bg-cyan-300 text-white p-3 rounded-md'>
                        <p className='font-medium text-black'>All Buckets</p>
                        <div className='border-t-2 border-gray-600 mt-4 mb-6'></div>
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold mr-3'>1504</h1>
                        </div>
                            <p className='text-right flex justify-end mt-3'><BsPieChartFill style={{fontSize:'40px'}} /></p>
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
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy/></span>
                            </div>
                            <div className='flex items-center my-4'>
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy/></span>
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium text-gray-600 mr-3'>https://api.idrivee2.com/api/</p><span><MdContentCopy/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Dashboard;
