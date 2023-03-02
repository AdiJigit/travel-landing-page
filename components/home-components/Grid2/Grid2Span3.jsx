import Image from 'next/image';
import React from 'react';

export default function Grid2Span3() {
  return (
    <div className="mt-10 shadow-md">
      <div className="w-full">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5s8fs_j2xlY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-[500px]"
        ></iframe>
      </div>
      <div className="mt-4">
        <p className="border-l-[5px] border-l-yellow-500 px-5 font-[500]">
          January 23, 2023 - Travel & World
        </p>
        <h1 className="text-4xl font-[500] px-5 my-10">
          Do You Want To Travel?
        </h1>
        <p className="text-[16px] font-[500] px-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          dicta iusto voluptate fugiat quisquam, corporis atque ipsam nemo nobis
          ut porro, harum deserunt doloribus beatae iure voluptatem placeat.
          Facilis, alias? .Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste architecto impedit tempora sequi sapiente. Sed, itaque qui
          dolore porro nihil voluptatibus maiores temporibus iste sit
          repudiandae aut delectus ipsam deserunt.
        </p>
        <div className="mt-10 flex justify-between mt-10 p-5">
        <div className="flex gap-5">
          <Image
            src="/assets/geo-icon.png"
            alt=""
            width={50}
            height={50}
            className="w-[20px] h-[25px] cursor-pointer"
          />
          <p className='font-[500] cursor-pointer'>India, Maldives</p>
        </div>
        <div className='flex gap-5'>
        <Image
            src="/assets/comment-icon.png"
            alt=""
            width={50}
            height={50}
            className="w-[25px] h-[25px] cursor-pointer"
          />
          <p className='font-[500] cursor-pointer'>Comment (52)</p>
        </div>
      </div>
      </div>
    </div>
  );
}
