import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#005555] h-20 p-5 px-10 rounded-md flex justify-between items-center'>
        <h1 className='text-[#C7DADA] text-2xl font-semibold hover:text-white cursor-pointer'>Property</h1>
        <div className='w-1/2'>
            <ul className='flex justify-between w-full'>
                <li className='text-[#C7DADA] hover:text-white cursor-pointer'>Home</li>
                <li className='text-[#C7DADA] hover:text-white cursor-pointer'>Properties</li>
                <li className='text-[#C7DADA] hover:text-white cursor-pointer'>Services</li>
                <li className='text-[#C7DADA] hover:text-white cursor-pointer'>About</li>
                <li className='text-[#C7DADA] hover:text-white cursor-pointer'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar