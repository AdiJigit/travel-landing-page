import React from 'react'

export default function Newsletter() {
  return (
    <div className='mt-28 md:mx-20 mx-2'>
      <div className='h-[20vh]  flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-[500px] text-3xl font-[500]'>
          <p>Join 98,641 Monthly Readers. Subscribe Today!</p>
        </div>
        <div className='flex'>
          <input className='border md:w-[400px] rounded-l-md pl-4 outline-none' placeholder='Email Address' />
          <button className='md:px-16 px-8 md:py-5 py-3 bg-blue-800 rounded-r-md text-white font-[500] text-lg'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
