import Image from 'next/image';
import React from 'react';

export default function Grid1Span4() {
  return (
    <div className="mt-10">
      <div className="shadow-md">
        <h1 className="text-xl text-center font-[500] p-10">Recent Post</h1>
      </div>
      <div className="mt-10">
        <div className="flex gap-5">
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span4-01.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
              September 17, 2018 - Tips & Tricks
            </p>
            <h1 className="mt-4 font-[500] text-lg">
              Finding Love & home in Nevada, USA
            </h1>
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span4-02.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
              August 17, 2028 - Tips & Tricks
            </p>
            <h1 className="mt-4 font-[500] text-lg">
            Explore & find unusual places, Kyrgyzstan
            </h1>
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span4-03.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
              January 4, 2023 - Tips & Tricks
            </p>
            <h1 className="mt-4 font-[500] text-lg">
              Relax & enjoy your life, Georgia
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
