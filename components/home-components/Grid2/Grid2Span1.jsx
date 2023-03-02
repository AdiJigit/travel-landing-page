import Image from 'next/image';
import React from 'react';

export default function Grid2Span1() {
  return (
    // All text context can be changed through data, it's a static text
    <div className="shadow-md">
      <Image
        src="/assets/grid2span1.jpg"
        alt=""
        width={500}
        height={500}
        className="w-full object-cover h-[500px]"
      />
      <div className="px-5">
        <p className="pl-2 my-4 text-lg font-[500] border-l-[5px] border-l-yellow-500">
          July, 15, 2021 - Tips and Tricks{' '}
        </p>
        <h1 className="text-3xl font-[500]">
          A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep
          and Explore{' '}
        </h1>
        <p className="mt-10 font-[500]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum
          mollitia voluptatum omnis sit. Laborum ullam quis nemo molestias
          repudiandae, voluptas excepturi eius beatae eligendi voluptatum?
          Repudiandae magni nulla doloribus! .Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo
          eget gravida viverra. Pharetra pharetra.
        </p>
      </div>
      <div className="flex justify-between mt-10 p-5">
        <div className="flex gap-5">
          <Image
            src="/assets/geo-icon.png"
            alt=""
            width={50}
            height={50}
            className="w-[20px] h-[25px] cursor-pointer"
          />
          <p className='font-[500] cursor-pointer'>Penang, Malaysia </p>
        </div>
        <div className='flex gap-5'>
        <Image
            src="/assets/comment-icon.png"
            alt=""
            width={50}
            height={50}
            className="w-[25px] h-[25px] cursor-pointer"
          />
          <p className='font-[500] cursor-pointer'>Penang, Malaysia </p>
        </div>
      </div>
    </div>
  );
}
