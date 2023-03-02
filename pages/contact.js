import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import Slider from '@/components/Slider';
import React from 'react';

export default function Contact() {
  return (
    <Layout title="Contact">
      <section>
        <div className="h-screen w-full heroContact">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-[70px] md:w-[800px] font-bold text-white text-center tracking-widest">
              Contact
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-20 md:mx-20 mx-2 mb-20 md:mb-0">
            <h1 className='text-center font-[500] text-xl mb-10'>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h1>
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex gap-5 flex-col md:w-[400px]">
              <input
                className="rounded-md outline-none border p-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="rounded-md outline-none border p-2"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-5 flex-col md:w-[400px]">
              <input
                className="rounded-md outline-none border p-2"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="rounded-md outline-none border p-2"
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
          <textarea
            className=" mt-5 rounded-md md:w-[70vw] h-[200px] outline-none border p-2"
            type="text"
            placeholder="Message"
          />
          <div>
            <button className="mt-5 rounded-md px-10 py-3 bg-blue-800 text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
      <section>
        <Slider />
      </section>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
}
