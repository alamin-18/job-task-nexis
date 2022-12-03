import React from 'react';

const ThirdPage = ({page,setPage}) => {
    const handleThirdPage =(event)=>{
        event.preventDefault()
        
    }
    return (
        <div>
             <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>
            <form onSubmit={handleThirdPage}>
            <input type="text" placeholder='Email' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />
            <input type="text" placeholder='Phone Number' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
            <input type="submit" value='Next Step' className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10' />
            </form>
        </div>
    );
};

export default ThirdPage;