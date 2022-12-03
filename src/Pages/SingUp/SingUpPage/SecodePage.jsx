import React from 'react';

const SecodePage = ({page,setPage}) => {
   
    return (
        <div>
            <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>
            
            <input type="text" placeholder='Write First Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />
            <input type="text" placeholder='Write Last Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
            <button className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10'>Next Step</button>
            
        </div>
    );
};

export default SecodePage;