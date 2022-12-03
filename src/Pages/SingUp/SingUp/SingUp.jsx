import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import banner from '../../../images/banner.jpg'
import logo from '../../../images/logo.png'


const SingUp = () => {
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(0);
    const [page3, setPage3] = useState(0);

   const [firstName,setFirstName] = useState('')
   const [lastName,setLastName] = useState('')
   const [phoneNumber,setPhoneNumber] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
    const navigste = useNavigate()
    const HandePage1 = () =>{
        setPage1(false)
        setPage2(true)
        setPage3(false)
    }
    const HandePage2 = () =>{
        setPage1(false)
        setPage2(false)
        setPage3(true)
    }
    const user = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password
    }
    const handleSubmit = () =>{
       fetch("https://test.nexisltd.com/users/signup",{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
       })
       .then(data =>{
        console.log(data.data)
       })
       navigste('/table')
        
    }
    return (
        <div className=' bg-white p-10 lg:w-3/4 mx-auto'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='lg:flex lg:justify-between'>
                <div>
                    <img src={banner} alt="" />
                </div>
                {
                    page1 && <div className='drop-shadow-lg sm:w-full lg:w-[516px] bg-white px-4 h-[630px] '>
                    <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>

                    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='Write First Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  placeholder='Write Last Name' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
                   
                    <button onClick={HandePage1}  className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10'>Next Step</button>

                   <div className='mt-10'> <span>Already have an account? <Link className='text-[#1678CB]' to='/login'> Log in</Link> </span>
                         </div>
                    
                </div>
                }
                {
                    page2 && <div className=' drop-shadow-lg bg-white sm:w-full lg:w-[516px] px-4 h-[630px] '>
                    <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>

                    <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Enter Your Phone Number' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
                    <button  onClick={HandePage2} className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10'>Next Step</button>
                    <div className='mt-10'> <span>Already have an account? <Link className='text-[#1678CB]' to='/login'> Log in</Link> </span>
                         </div>
                </div>
                }
                {
                    page3 && <> <div className='drop-shadow-lg sm:w-full lg:w-[516px] bg-white px-4 h-[630px] '>
                    <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>

                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Write Password' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />

                    
                    <button  onClick={handleSubmit} className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10'>Submit</button>
                    <div className='mt-10'> <span>Already have an account? <Link className='text-[#1678CB]' to='/login'> Log in</Link> </span>
                         </div>
                </div>
                 </>
                }
                
                <div>


                </div>
            </div>

        </div>
    );
};

export default SingUp;