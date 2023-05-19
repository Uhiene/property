import React from 'react'
import Header from '../components/yourHomes/Header'
import Hero from '../components/yourHomes/Hero'
import Statistics from '../components/yourHomes/Statistics'

const YourHome = () => {
  return (
    <div className='bg-[#F8F9FA] px-5 py-10 md:p-16 md:pr-0 w-screen'>
        <Header/>
        <Hero/>
        <Statistics/>
    </div>
  )
}

export default YourHome