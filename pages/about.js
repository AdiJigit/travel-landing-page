import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import Slider from '@/components/Slider';
import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <Layout title="About Us">
      {/* Hero section */}
      <section>
        <div className="h-screen w-full heroAboutUs">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-[70px] md:w-[800px] font-bold text-white text-center tracking-widest">
              About us
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="md:mt-36 mt-20 md:mx-10 mx-2 h-full">
          <div className="flex flex-col md:flex-row">
            <p className="flex-1 text-5xl">
              Hey, We are the Red Explorers Brief History{' '}
              <span className="text-[#FFA500]">About Us.</span>{' '}
            </p>
            <p className="flex-1 font-[500] mt-10 md:mt-0">
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
        <div className="mt-44">
          <Image
            src="/assets/about2.jpg"
            alt=""
            width={2000}
            height={2000}
            className="md:w-[80vw] md:h-[50vh] object-cover m-auto"
          />
          <p className="mt-12 font-[500] md:w-[80vw] mx-2 md:mx-0 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id.
            In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
            Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
            pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac
            tempus pellentesque nibh duis ultrices. Senectus sagittis id
            ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci
            volutpat egestas fermentum. Sit turpis diam risus leo bibendum
            neque, quis in vitae.
          </p>
          <p className="md:w-[80vw] mx-2 md:mx-0 m-auto font-[500] mt-5">
            Praesent enim augue tellus vitae placerat purus pretium at massa.
            Aliquet a malesuada eget posuere. Pellentesque euismod nulla
            praesent rhoncus.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row gap-10 justify-between mt-20 md:mx-10 mx-2">
          <div className="flex flex-col">
            <h1 className="font-[500] text-3xl">Our Story</h1>
            <p className="mt-8 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus.{' '}
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero.
            </p>
            <h1 className="mt-4 font-[500] text-3xl">About Our Cameraman</h1>
            <p className="mt-8 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at
              malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus
              hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae
              rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-[500] text-3xl">Who Are Red Explorers</h1>
            <p className="mt-8 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus.{' '}
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.
            </p>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero.
            </p>
            <h1 className="mt-4 font-[500] text-3xl">What you’ll Learn Here</h1>
            <p className="mt-4 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at
              malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus
              hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae
              rhoncus.
            </p>
            <h2 className="text-2xl font-[500] mt-5">
              On Our Website You’ll find:
            </h2>
            <p className="mt-4 font-[500]">
              &gt; Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="mt-4 font-[500]">
              &gt; Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="mt-4 font-[500]">
              &gt; Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="mt-4 font-[500]">
              &gt; Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-36 md:h-[30vh] bg-[#EDEDED] w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-10 my-10 md:my-0">
            <Image
              src="/assets/about3.png"
              alt=""
              width={500}
              height={500}
              className="md:w-[250px] md:h-[150px] px-2"
            />
            <Image
              src="/assets/about4.png"
              alt=""
              width={500}
              height={500}
              className="md:w-[250px] md:h-[150px] px-2"
            />
            <Image
              src="/assets/about5.png"
              alt=""
              width={500}
              height={500}
              className="md:w-[250px] md:h-[150px] px-2"
            />
            <Image
              src="/assets/about6.png"
              alt=""
              width={500}
              height={500}
              className="md:w-[250px] md:h-[150px] px-2"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="md:mt-36 mt-20 mx-2 md:mx-10 h-full">
          <div className="flex flex-col md:flex-row">
            <p className="flex-1 text-5xl">
              What Customer says{' '}
              <span className="text-[#FFA500]">About Us?</span>{' '}
            </p>
            <p className="flex-1 font-[500] mt-10 md:mt-0">
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
        <div className="mt-20 mx-10 flex flex-col md:flex-row gap-20 justify-center">
          <div className="p-10 h-[400px] w-[300px] rounded-md shadow-lg">
            <p className="font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <h1 className="mt-10 text-xl font-[500]">Joy Kim</h1>
            <p className="font-[500]">explorer</p>
          </div>
          <div className="p-10 h-[400px] w-[300px] rounded-md shadow-lg">
            <p className="font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <h1 className="mt-10 text-xl font-[500]">Joy Kim</h1>
            <p className="font-[500]">explorer</p>
          </div>
          <div className="p-10 h-[400px] w-[300px] rounded-md shadow-lg">
            <p className="font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut natoque imperdiet
              faucibus.
            </p>
            <h1 className="mt-10 text-xl font-[500]">Joy Kim</h1>
            <p className="font-[500]">explorer</p>
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
