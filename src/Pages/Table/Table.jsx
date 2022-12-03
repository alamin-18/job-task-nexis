import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
const Table = () => {
    const [dataList,setDataList] = useState([])
    useEffect(()=>{
        fetch("https://test.nexisltd.com/test")
        .then(res => res.json())
        .then(data =>setDataList(data))
    },[])
    console.log(dataList);
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='w-72 mx-auto mb-14'>
                <h1 className='bg-[#1678CB]  text-white font-bold mt-6 py-3 px-10'>Attendance information</h1>
            </div>
            <div>
                <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table table-zebra w-full">
                       
                        <thead>
                            <tr>
                                
                                <th>Date</th>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            <tr>
                                
                                <td>11/7/16</td>
                                <td>Arlene McCoy</td>
                                <td>Present</td>
                            </tr>
                            
                            <tr>
                                
                                <td>2/11/12</td>
                                <td>Eleanor Pena</td>
                                <td>Absent</td>
                            </tr>
                            <tr>
                                
                                <td>11/7/16</td>
                                <td>Arlene McCoy</td>
                                <td>Present</td>
                            </tr>
                            
                            <tr>
                                
                                <td>2/11/12</td>
                                <td>Eleanor Pena</td>
                                <td>Absent</td>
                            </tr>
                            <tr>
                                
                                <td>11/7/16</td>
                                <td>Arlene McCoy</td>
                                <td>Present</td>
                            </tr>
                            
                            <tr>
                                
                                <td>2/11/12</td>
                                <td>Eleanor Pena</td>
                                <td>Absent</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Table;