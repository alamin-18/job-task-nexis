import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import banner from '../../images/banner.jpg'
import logo from '../../images/logo.png'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            email,
            password,
        }
        fetch("https://test.nexisltd.com/users/login",{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
       })
       .then(data =>{
        console.log(data.data)
       })
       navigate('/table')
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
       
            <div className='drop-shadow-lg sm:w-full lg:w-[516px] bg-white px-4 h-[630px] '>
                    <h1 className='text-2xl font-bold mb-10'>Sing Up Form</h1>

                   <form onSubmit={handleLogin}>
                   <input   type="email" placeholder='Enter your Email' className='border-b-2  outline-0 border-[#A4A4A4] w-full mb-20' />
                    <input type="password"  placeholder='Enter Your Password' className='border-b-2  outline-0 border-[#A4A4A4] w-full' />
                   
                   <input type="submit" value='Sing Up' className='bg-[#1678CB] text-white font-bold mt-6 py-3 px-10' />
                   </form>
                   <div className='mt-10'> <span>Don’t have an account? <Link className='text-[#1678CB]' to='/'> Sing Up</Link> </span>
                         </div>
                   </div>

        </div>
        </div>
    );
};

export default Login;