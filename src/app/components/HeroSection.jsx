'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16 bg-none'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-snug font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>
              <TypeAnimation
                sequence={[
                  'Adithya Permana',
                  1000,
                  'Game Developer',
                  1000,
                  'FrontEnd',
                  1000,
                  'UI/UX Designer',
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className='text-[#E0E6ED] text-base sm:text-lg mb-6 lg:text-xl'>
            Change your thoughts and you change your world
          </p>
          <div>
            <Link
              href='/#contact'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-teal-500 hover:bg-teal-300 text-white'>
              Hire
            </Link>
            <Link
              href='/'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-teal-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#181818] hover:bg-gray-700 rounded-full px-5 py-2'>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#1F1F1F] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
            <Image
              src='/images/teng.jpg'
              alt='hero image'
              className='absolute object-cover w-full h-full'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
