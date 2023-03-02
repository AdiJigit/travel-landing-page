import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

export default function Grid1Span7() {
  return (
    <div className=" my-20 md:my-10">
      <div className="shadow-md">
        <h1 className="text-xl text-center font-[500] p-10">Get In Touch</h1>
      </div>
      <div className="mt-10">
        <div className="flex justify-center gap-10">
          <div className="flex md:px-10 px-5 items-center text-white gap-5 p-3 rounded-md bg-[#4056AC]">
            <FaFacebookF size={25} />
            <div>
              <p>65.5k</p>
              <p>Likes</p>
            </div>
          </div>
          <div className="flex md:px-10 px-5 items-center text-white gap-5 p-3 rounded-md bg-[#60B6FD]">
            <BsTwitter size={25} />
            <div>
              <p>65.5k</p>
              <p>Likes</p>
            </div>
          </div>
        </div>
        <div className='mt-5 flex justify-center gap-10'>
          <div className="flex md:px-10 px-5 items-center text-white gap-5 p-3 rounded-md bg-[#FE182B]">
            <AiFillYoutube size={25} />
            <div>
              <p>65.5k</p>
              <p>Likes</p>
            </div>
          </div>
          <div className="flex md:px-10 px-5 items-center text-white gap-5 p-3 rounded-md bg-[#E04D93]">
            <AiOutlineInstagram size={25} />
            <div>
              <p>65.5k</p>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
