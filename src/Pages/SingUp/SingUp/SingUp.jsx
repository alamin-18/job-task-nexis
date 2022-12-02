import React from 'react';
import banner from '../../../images/banner.jpg'
import logo from '../../../images/logo.png'

const SingUp = () => {
    return (
        <div className=' bg-white p-10 w-3/4 mx-auto'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className='drop-shadow-lg bg-white px-4 h-[630px] '>
                    <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>
                    <input type="text" placeholder='Write First Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20'/>
                    <input type="text" placeholder='Write Last Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
                    <input type="submit" value='Next Step' className='bg-[#1678CB] text-white font-bold py-3 px-10' />
                </div>

            </div>
            
        </div>
    );
};

export default SingUp;