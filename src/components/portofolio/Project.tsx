import { ArrowUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

import Grid from '../common/Grid';

const ImageUnsplash =
  'https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const Project = () => {
  return (
    <Grid className='gap-y-14 pt-5'>
      <div className='col-span-full'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px]'>
          <h2 className='text-white text-2xl mb-3 font-bold block lg:hidden'>
            Bolder Landingpage
          </h2>
          <h6 className='text-gray-200 text-base mb-[14px] font-bold block lg:hidden font-inter'>
            Web Development
          </h6>
          <div className='w-full h-auto mb-5 lg:w-5/12'>
            <div className='bg-dark-200 relative flex flex-col px-4'>
              <button className='h-6 w-6 lg:h-9 lg:w-9 flex items-center justify-center rounded bg-dark-300 mt-2 lg:mt-4 ml-auto'>
                <ArrowUpIcon className='h-4 w-4 lg:h-5 lg:aspect-w-9 transform rotate-45 text-gray-100' />
              </button>
              <div className='flex flex-col px-2 h-72 overflow-hidden'>
                <div className='flex space-x-2 '>
                  <label
                    htmlFor='logo'
                    className='bg-white rounded-sm flex items-center justify-center h-6 w-6'
                  >
                    <img
                      src='/icon/tailwind.svg'
                      className='h-4 w-4'
                      alt='Tailwind Logo'
                    />
                  </label>
                  <label
                    htmlFor='logo'
                    className='bg-white rounded-sm flex items-center justify-center h-6 w-6'
                  >
                    <img
                      src='/icon/react.svg'
                      className='h-4 w-4'
                      alt='Tailwind Logo'
                    />
                  </label>
                </div>
                <div className='aspect-w-4 aspect-h-3 relative mt-8 overflow-hidden '>
                  <Image
                    src={ImageUnsplash}
                    alt='unsplash'
                    layout='fill'
                    width={228}
                    height={158}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:w-5/12'>
            <h6 className='text-gray-200 font-bold mb-5 font-inter hidden sm:block lg:mt-4'>
              Web Development
            </h6>
            <h3 className='text-white text-5xl mb-7 font-sora font-bold hidden sm:block'>
              Bolder Landingpage
            </h3>
            <p className='text-gray-200 text-sm lg:text-lg font-inter leading-6 lg:leading-normal'>
              Serrow restructured and designed core pages, creating interactive
              elements that put users in control and allowed them to discover
              the information needed to make a decision.
            </p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Project;
