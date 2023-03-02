import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import Slider from '@/components/Slider';
import Image from 'next/image';
import React from 'react';

export default function Destination() {
  return (
    <Layout title="Destination">
      <section>
        <div className="h-screen w-full heroDestination">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-[50px] md:text-[70px] md:w-[800px] font-bold text-white text-center tracking-widest">
              Destination
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="md:mt-36 mt-20 mx-2 md:mx-10 h-full">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col">
              <p className="flex-1 text-6xl">
                <span className="text-[#FFA500] border-b-[5px] border-b-[#FFA500]">
                  Where do
                </span>{' '}
                you want
              </p>
              <p className="mt-4 text-6xl">to go?</p>
            </div>
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
        <div className="mt-28 mx-2 md:mx-10">
          <div className="flex justify-between">
            <p className="text-sm border-[2px] w-full text-center md:text-2xl font-[500] py-5 hover:bg-blue-800 hover:text-white cursor-pointer">
              South America
            </p>
            <p className="text-sm border-[2px] w-full text-center md:text-2xl font-[500] py-5 hover:bg-blue-800 hover:text-white cursor-pointer">
              North America
            </p>
            <p className="text-sm border-[2px] w-full text-center md:text-2xl font-[500] py-5 hover:bg-blue-800 hover:text-white cursor-pointer">
              Europe
            </p>
            <p className="text-sm border-[2px] w-full text-center md:text-2xl font-[500] py-5 hover:bg-blue-800 hover:text-white cursor-pointer">
              Africa
            </p>
            <p className="text-sm border-[2px] w-full text-center md:text-2xl font-[500] py-5 hover:bg-blue-800 hover:text-white cursor-pointer">
              Asia
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-20 md:mx-10 mx-2 grid md:grid-cols-3 gap-10">
          <div className="shadow-md">
            <Image
              src="/assets/destination3.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                September 17, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                Have you read The Beach by Alex?
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
                  <p className="font-[500] cursor-pointer">Georgia</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/comment-icon.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[25px] h-[25px] cursor-pointer"
                  />
                  <p className="font-[500] cursor-pointer">Comment (52)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <Image
              src="/assets/destination4.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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
          <div className="shadow-md">
            <Image
              src="/assets/destination5.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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

          {/* 2 */}
          <div className="shadow-md">
            <Image
              src="/assets/destination6.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                September 17, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                Have you read The Beach by Alex?
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
                  <p className="font-[500] cursor-pointer">Georgia</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/comment-icon.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[25px] h-[25px] cursor-pointer"
                  />
                  <p className="font-[500] cursor-pointer">Comment (52)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <Image
              src="/assets/destination6.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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
          <div className="shadow-md">
            <Image
              src="/assets/destination7.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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

          {/* 3 */}
          <div className="shadow-md">
            <Image
              src="/assets/destination8.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                September 17, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                Have you read The Beach by Alex?
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
                  <p className="font-[500] cursor-pointer">Georgia</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/comment-icon.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[25px] h-[25px] cursor-pointer"
                  />
                  <p className="font-[500] cursor-pointer">Comment (52)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <Image
              src="/assets/destination9.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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
          <div className="shadow-md">
            <Image
              src="/assets/destination10.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-[400px] h-[250px]"
            />
            <div>
              <p className="my-4 p-2 font-[500] border-l-[5px] border-l-yellow-500">
                July 7, 2022 - Tips & Tricks
              </p>
              <h1 className="px-2 my-16 text-3xl font-[500]">
                The writer actually live in Philippines
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
                  <p className="font-[500] cursor-pointer">Switzerland</p>
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
      </section>
      <section>
        <div className='mt-48'>
          <Slider />
        </div>
      </section>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
}
