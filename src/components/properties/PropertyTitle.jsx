import React from 'react'

const PropertyTitle = () => {
  return (
    <div className='space-y-2 md:space-y-0 md:flex items-center justify-between'>
        <h1 className="text-[#00204a] text-3xl font-medium"> Popular Properties</h1>
        <button
          value=""
          className="bg-[#005555] rounded-full w-fit px-6 text-sm p-4 text-white placeholder:text-white"
        >
          View all properties
        </button>
    </div>
  )
}

export default PropertyTitle