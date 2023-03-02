import Image from 'next/image'
import React from 'react'

export default function Grid2Span4() {
  return (
    <div className='mt-10 relative'>
      <Image className='brightness-[0.5]' src='/assets/grid2span4.jpg' alt='' width={1000} height={1000} />
      <h1 className='absolute top-2 p-5 text-white font-[500] text-3xl md:text-5xl md:leading-[70px]'>Want  <span className='text-[#FFA500]'>Me to Purchase</span>  Something For You That isn’t available in your Country?</h1>
      <button className='absolute md:left-[40%] left-[45%] bottom-10 md:bottom-32 bg-blue-800 rounded-md text-white px-5 md:px-10 py-5 hover:bg-transparent hover:border-[2px] hover:border-blue-800'>Place Order</button>
    </div>
  )
}
