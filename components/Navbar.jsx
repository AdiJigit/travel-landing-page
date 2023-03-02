/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [drop, setDrop] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  }, [scrollY, update]);

  return (
    <>
      <motion.div
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="w-full md:px-16 px-5 h-[15vh] bg-transparent fixed top-0 z-[998]"
      >
        <div className="flex h-full justify-between mt-5 md:mt-0 md:items-center">
          <div className="flex">
            <div>
              <Image
                className="md:h-[30px] md:w-[50px] object-contain"
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
          <div className="hidden md:flex text-[18px] text-[#FFA500] font-[400] items-center gap-28">
            <Link href="/">
              <p className="hover:bg-blue-800 hover:rounded-md hover:px-12 hover:py-2 hover:text-white cursor-pointer">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:bg-blue-800 hover:rounded-md hover:px-12 hover:py-2 hover:text-white cursor-pointer">
                About Us
              </p>
            </Link>
            <Link href="/destination">
              <p className="hover:bg-blue-800 hover:rounded-md hover:px-12 hover:py-2 hover:text-white cursor-pointer">
                Destination
              </p>
            </Link>
            <Link href="/tips">
              <p className="hover:bg-blue-800 hover:rounded-md hover:px-12 hover:py-2 hover:text-white cursor-pointer">
                Tips
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:bg-blue-800 hover:rounded-md hover:px-12 hover:py-2 hover:text-white cursor-pointer">
                Contact
              </p>
            </Link>
          </div>
          <div
            onClick={() => setDrop(!drop)}
            className={`${drop ? 'hidden' : 'block'} block sm:hidden`}
          >
            <RxHamburgerMenu size={25} className="text-[#FFA500]" />
          </div>
        </div>
      </motion.div>
      {drop === true && (
        <section>
          {/* <div>
              <AiOutlineClose size={25} className='text-[#FFA500]' onClick={() => setDrop(false)} />
            </div> */}
          <div className="relative">
            <div className="fixed z-[999] bg-violet-500/30 w-screen h-screen">
              <AiOutlineClose
                size={25}
                className="fixed right-3 top-5 text-[#FFA500]"
                onClick={() => setDrop(false)}
              />
              <div className="fixed top-24 left-10">
                <Link href="/">
                  <p className="bg-gray-900/20 px-20 py-5 my-1 text-xl font-[500] rounded-md border">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="bg-gray-900/30 px-20 py-5 my-1 text-xl font-[500] rounded-md border">
                    About Us
                  </p>
                </Link>
                <Link href="/destination">
                  <p className="bg-gray-900/20 px-20 py-5 my-1 text-xl font-[500] rounded-md border">
                    Destination
                  </p>
                </Link>
                <Link href="/tips">
                  <p className="bg-gray-900/20 px-20 py-5 my-1 text-xl font-[500] rounded-md border">
                    Tips
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="bg-gray-900/20 px-20 py-5 my-1 text-xl font-[500] rounded-md border">
                    Conatact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
