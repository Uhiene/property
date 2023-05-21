import React from 'react'
import CustomerTitle from '../components/customers/CustomerTitle'
import CustomerSlide from '../components/customers/CustomerSlide'

const Customer = () => {
  return (
    <div className='bg-white w-screen p-16 space-y-10'>
        <CustomerTitle/>
        <CustomerSlide/>
    </div>
  )
}

export default Customer