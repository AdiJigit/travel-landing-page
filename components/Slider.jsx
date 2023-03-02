import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 5);
    }
    if (direction === 'r') {
      setIndex(index !== 5 ? index + 1 : 0);
    }
  };

  return (
    <div className="mt-22">
      <div className='relative overflow-hidden'>
        <div className='absolute z-10 top-[50%] left-[5%]' onClick={() => handleArrow('l')}>
          <SlArrowLeft size={35} className='cursor-pointer text-white' />
        </div>
        <div className="md:w-[600vw] w-[300vh] h-full transition-all duration-1000" style={{ transform: `translateX(${-100 * index}vw)` }}>
          <div className="flex">
            <Image
              src="/assets/slider1.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-auto md:h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
            <Image
              src="/assets/slider2.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
            <Image
              src="/assets/slider3.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
            <Image
              src="/assets/slider4.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
            <Image
              src="/assets/slider5.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
            <Image
              src="/assets/slider6.jpg"
              alt=""
              width={2000}
              height={2000}
              className="w-[100vw] h-[100vh] object-cover md:p-10 brightness-[0.5]"
            />
          </div>
        </div>
        <div className='absolute bottom-[15%] md:left-[42%] left-[22%] text-white px-10 py-3 rounded-md bg-blue-800 hover:bg-transparent hover:border-[2px] hover:border-blue-800 cursor-pointer'>Follow @ instagram</div>
        <div className='absolute z-10 bottom-[45%] right-[4%]' onClick={() => handleArrow('r')}>
          <SlArrowRight size={35} className='cursor-pointer text-white' />
        </div>
      </div>
    </div>
  );
}
