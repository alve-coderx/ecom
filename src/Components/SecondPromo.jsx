import React from 'react'

const SecondPromo = () => {
  return (
      <div className='bg-slate-900 flex items-center justify-center h-[50vh]'>
        <div className='bg-white p-[5rem] uppercase'>
          <span className='text-slate-500 font-bold'>Special Offer</span>
          <p className='text-2xl font-bold'>Subscribe And </p>
          <span className='text-2xl font-bold text-pink-500'>Get 10% off</span>
          <div className='bg-slate-100 p-1 mt-5'>Enter your email</div>
          <div className='bg-black text-white p-3 mt-5'>Subscribe</div>
        </div>
      </div>
  )
}

export default SecondPromo