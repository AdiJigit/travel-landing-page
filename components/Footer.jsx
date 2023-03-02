import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { AiOutlineGooglePlus } from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
      <div className="md:mt-40 mt-20 mb-10 md:mx-20 mx-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex">
            <div>
              <Image
                className="h-[30px] w-[50px] object-contain"
                src="/assets/Red.png"
                alt=""
                width={50}
                height={50}
              />
              <Image
                className="h-[15px] w-[60px]"
                src="/assets/Explorers.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <Image
              className="ml-4 object-contain h-[40px]"
              src="/assets/paper-plane.png"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="mt-5 md:mt-0 flex md:mr-32 md:w-[700px] justify-between font-[500]">
            <p>Body</p>
            <p>Travel</p>
            <p>Account</p>
          </div>
        </div>
      </div>
      <div className="w-full py-10 md:px-20 px-2 bg-[#535353] h-full">
        <div className="flex flex-col md:flex-row gap-10 text-gray-300">
          <div className="flex-[1]">
            <p>
              We are location independent bloggers, digital influencers, small
              group tour organizers and world travelers with a serious passion
              for the sun, the sea and adventure.
              <span className="mt-4">
                Eight years and 60-something countries later and we are still on
                the road.
              </span>
            </p>
          </div>
          <div className="flex-[1] flex flex-col gap-5">
            <p>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <p>T: +234 706 507 8544</p>
            <p>E: info@redexplorers.com</p>
            <p>W: www. redexplorers.com</p>
          </div>
          <div className="flex-[1] flex flex-col gap-5">
            <p>My List</p>
            <p>My Requests</p>
            <p>My Credits</p>
            <p>My Info</p>
            <p>Contact</p>
          </div>
          <div className="flex-[1] flex flex-col gap-5">
            <p>Travel</p>
            <p>Why Travel</p>
            <p>Become a Traveler</p>
            <p>How Its Works</p>
            <p>Traveling FAQs</p>
          </div>
        </div>
        <div className="mt-10 border-t">
          <div className="flex flex-col md:flex-row mt-10 justify-between">
            <Image
              src="/assets/sidehustle.png"
              alt=""
              width={500}
              height={500}
              className="w-[150px]"
            />
            <div className="flex items-center gap-10">
              <FaFacebookF size={25} className="text-blue-600" />
              <ImTwitter size={25} className="text-blue-400" />
              <AiOutlineGooglePlus size={30} className="text-red-600" />
              <FaLinkedinIn size={25} className="text-blue-500" />
            </div>
            <p className='text-gray-300'>
              © 2021 RedExplorers. All rights reserved | Terms | Privacy | Site
              Map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
