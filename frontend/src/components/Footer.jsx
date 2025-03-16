// import React from 'react'
// import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* -------Left Section ------ */}
        <div>
          {/* <img className='mb-5 w-40' src={assets.logo} alt="" /> */}
          <h2
            className="w-44 cursor-pointer text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            Hospital <span className="text-gray-600">X</span>
          </h2>

          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Hospital X is a modern healthcare platform designed to streamline patient management, doctor scheduling, and medical records. It offers a user-friendly interface for patients, doctors, and admins, ensuring efficient appointment booking, secure data handling, and smooth hospital operations.</p>
        </div>

        {/* -------Center Section ------ */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* -------Right Section ------ */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600' >
            <li>+1-524-663-4696</li>
            <li>appointment@gmail.com</li>
          </ul>
        </div>

      </div>
      {/* -------copyright text-------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @Hospital X - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer