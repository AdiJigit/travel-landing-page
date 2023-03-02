import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';

import { BsFillGeoAltFill } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

export default function Tips() {
  return (
    <Layout title="Tips">
      <section>
        <div className="h-screen w-full heroTips">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-[70px] md:w-[800px] font-bold text-white text-center tracking-widest">
              Tips
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="md:mt-36 my-20 md:mx-10 mx-2 h-full">
          <div className="flex flex-col md:flex-row gap-10">
            <p className="flex-1 text-6xl">
              Maintaining your <span className="text-[#FFA500]">privacy </span>
              during travels.
            </p>
            <p className="flex-1 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{' '}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-32 md:mx-10 mx-2 grid md:grid-cols-3 gap-10">
          <div className="col-span-1 md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips1.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Going to the Extreme -The Northern Pole
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="col-span-1 md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips2.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Summer Vibes.. Where to spend the energy.
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="col-span-1 md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips3.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Smartest cities and how enjoy them.
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips4.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
            Going to the wild?
What should you pack?
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips5.jpg"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Foods to try when you visit Australia.
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips6.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
            Beaches And how to
enjoy them the most.
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="col-span-1 md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips7.jpg"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Road Trip 101. Thing you need to know
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips8.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
            Water front precautions
to take during travels.
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[350px] rounded-[30px] shadow-md">
            <Image
              className="rounded-t-[30px] md:w-[350px] md:h-[200px]"
              src="/assets/tips9.png"
              alt=""
              width={500}
              height={500}
            />
            <p className="text-center font-[500] py-2 text-gray-600">
              January 15, 2019 - Travel Tips
            </p>
            <h1 className="bg-blue-800 py-2 text-center font-[500] text-2xl text-white">
              Going to the Extreme -The Northern Pole
            </h1>

            <div className="mx-2 my-5 md:my-0 flex justify-between mt-5">
              <div className="flex gap-1 text-sm">
                <BsFillGeoAltFill />
                North Pole
              </div>
              <div className="flex gap-1 text-sm">
                <FaComments />
                12 Comment
              </div>
              <div className="flex gap-1 text-sm">
                <AiFillStar />
                4.8 of 5
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
