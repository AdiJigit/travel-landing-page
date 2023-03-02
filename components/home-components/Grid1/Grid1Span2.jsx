import React from 'react';

export default function Grid1Span2() {
  return (
    <div className="mt-10 border rounded-md p-5 px-10 shadow-md">
      <h1 className="text-center text-xl font-[500]">Categories</h1>
      <ul className="flex my-10 flex-col gap-5">
        <div className='flex justify-between font-[500]'>
          <li>Europe</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Mountains</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Traveling Video</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Beauty of Seas</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Cuisine</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Guides for traveler</li>
          <p>(11)</p>
        </div>
        <div className='flex justify-between font-[500]'>
          <li>Other</li>
          <p>(11)</p>
        </div>
      </ul>
    </div>
  );
}
