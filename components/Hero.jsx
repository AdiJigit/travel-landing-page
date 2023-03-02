import Image from 'next/image';
import React from 'react';

export default function Hero({ handleScroll }) {
  return (
    <section>
      <div className="h-screen w-full hero">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h2 className="px-1 md:px-0 mb-10 md:mt-10 text-2xl md:text-3xl text-white font-[500]">
            THE COUNTER: <span className="text-[#FFA500]">70</span> Countries{' '}
            <span className="ml-4 text-[#FFA500]">1036</span> Cities{' '}
          </h2>
          <h1 className="px-1 md:px-0 mb-10 text-[50px] md:text-[70px] md:w-[800px] font-bold text-white text-center leading-[50px] md:leading-[70px]">
            Leave your mark on all over the world{' '}
          </h1>
          <button className="mb-10 md:mb-0 px-12 py-6 rounded-md bg-blue-800 text-white text-[23px] hover:bg-transparent hover:border-[2px] hover:border-blue-800">
            Read More
          </button>
          <p className="text-2xl mt-5 text-white font-[500]">
            Explore The World
          </p>
        </div>
      </div>
    </section>
  );
}
