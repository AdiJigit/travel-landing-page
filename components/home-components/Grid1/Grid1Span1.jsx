import Image from 'next/image';
import React from 'react';

export default function Grid1Span1() {
  return (
      <div className="border rounded-md md:p-5 md:px-10 shadow-md">
        <h1 className="text-center text-xl font-[500] mb-4 my-4 md:my-0">About Me</h1>
        <Image
          src="/assets/aboutMe.jpg"
          alt=""
          className="object-cover md:w-[300px] md:h-[300px] px-2 md:px-0"
          width={400}
          height={400}
        />
        <p className="mt-2 text-sm font-[500] px-2 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          cum dignissimos sequi in dicta? Commodi architecto ullam alias aperiam
          dolorum deleniti iste, itaque quae sequi perferendis reprehenderit
          ducimus suscipit quaerat!
        </p>

        <div className="flex justify-center">
          <button className="px-8 py-5 my-4 rounded-md bg-blue-800 text-white font-[500] hover:bg-transparent hover:border-[2px] hover:border-blue-800 hover:text-black">
            Read More
          </button>
        </div>
      </div>
  );
}
