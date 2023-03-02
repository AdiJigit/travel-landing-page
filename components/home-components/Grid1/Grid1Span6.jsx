import Image from 'next/image';
import React from 'react';

export default function Grid1Span6() {
  return (
    <div className="mt-10">
      <div className="shadow-md">
        <h1 className="text-xl text-center font-[500] p-10">Product That I Have</h1>
      </div>
      <div className='mt-10'>
      <div className="flex gap-5">
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span6-01.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
            RFZHANZ Rc Drone
            </p>
            <h1 className="mt-4 font-[500] text-lg">
              $653
            </h1>
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span6-02.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
            Canon, EOS-1D X Mark II
            </p>
            <h1 className="mt-4 font-[500] text-lg">
            $267
            </h1>
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <Image
            className="w-[120px] h-[120px] object-cover"
            src="/assets/grid1span6-03.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div>
            <p className="font-[500] text-sm">
            Insta360 One R module action camera.
            </p>
            <h1 className="mt-4 font-[500] text-lg">
              $514
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
