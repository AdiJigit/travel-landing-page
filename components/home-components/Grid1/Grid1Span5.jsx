import React from 'react';

export default function Grid1Span5() {
  return (
    <div className="mt-10 p-10 shadow-md">
      <h2 className="mt-4 text-center text-2xl font-[500]">Gear I use</h2>
      <h1 className="mt-4 text-center text-2xl font-[500]">
        What`s in My Bag??
      </h1>
      <p className="mt-4 text-center">
        Unfortunately, there is no “one-size-fits-all” when it comes to travel
        packing lists.
      </p>
      <div className='mt-6 flex justify-center'>
        <button className="py-4 px-8 rounded-md bg-blue-800 text-white hover:bg-transparent hover:border-[2px] hover:border-blue-800 hover:text-black">
          Views Details
        </button>
      </div>
    </div>
  );
}
