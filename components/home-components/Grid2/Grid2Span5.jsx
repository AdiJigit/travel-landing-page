import Image from 'next/image';
import React from 'react';

export default function Grid2Span5() {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-10">
      <div className="shadow-md">
        <Image
          src="/assets/grid2span5-01.jpg"
          alt=""
          width={500}
          height={500}
        />
        <div>
          <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
            October 17, 2022 - Tips & Tricks
          </p>
          <h1 className="px-2 my-16 text-3xl font-[500]">
            Get away from the maddening Crowds{' '}
          </h1>
          <div className="flex justify-between px-2 my-5">
            <div className="flex gap-3">
              <Image
                src="/assets/geo-icon.png"
                alt=""
                width={50}
                height={50}
                className="w-[20px] h-[25px] cursor-pointer"
              />
              <p className="font-[500] cursor-pointer">Grece</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/assets/comment-icon.png"
                alt=""
                width={50}
                height={50}
                className="w-[25px] h-[25px] cursor-pointer"
              />
              <p className="font-[500] cursor-pointer">Comment (32)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md">
        <Image
          src="/assets/grid2span5-02.jpg"
          alt=""
          width={500}
          height={500}
        />
        <div>
          <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
            April 22, 2022 - Tips & Tricks
          </p>
          <h1 className="px-2 my-16 text-3xl font-[500]">
            The Mountain is considered one of{' '}
          </h1>
          <div className="flex justify-between px-2 my-5">
            <div className="flex gap-3">
              <Image
                src="/assets/geo-icon.png"
                alt=""
                width={50}
                height={50}
                className="w-[20px] h-[25px] cursor-pointer"
              />
              <p className="font-[500] cursor-pointer">Italy</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/assets/comment-icon.png"
                alt=""
                width={50}
                height={50}
                className="w-[25px] h-[25px] cursor-pointer"
              />
              <p className="font-[500] cursor-pointer">Comment (41)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
