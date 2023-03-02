import Image from 'next/image';
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

export default function Grid1Span3() {
  return (
    <div className="mt-10">
      <div className="shadow-md">
        <h1 className="text-xl text-center font-[500] p-10">Popular Post</h1>
      </div>
      <div className="mt-10 relative h-[250px]">
        <Image
          className="absolute top-0 h-full z-0"
          src="/assets/grid1span3.jpg"
          alt=""
          width={500}
          height={500}
        />
        <Image className='absolute top-0 h-[250px]' src="/assets/bg-blue.png" alt="" width={500} height={500} />
        <p className="absolute w-full p-2 top-0 text-center text-white text-lg font-[500]">
          September 17, 2018 - Tips & Tricks
        </p>
        <h1 className='absolute w-full bottom-24 p-5 text-2xl text-center font-[500] text-white'>Finding Spirit & Relax in Arizona.</h1>
          <div className='absolute bottom-[30px] left-[35px] bg-blue-800 p-3 rounded-sm cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-blue-800 hover:rounded-sm'>
            <AiFillCaretLeft size={20} className='text-white'  />
          </div>
          <div className='absolute bottom-[30px] left-[90px] bg-blue-800 p-3 rounded-sm cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-blue-800 hover:rounded-sm'>
            <AiFillCaretRight size={20} className='text-white'  />
          </div>
          
      </div>
    </div>
  );
}
