import { ArrowUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const ImageUnsplash =
  'https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const Project = () => {
  return (
    <Section name='list-project'>
      <Grid className='gap-y-14 pt-5'>
        <div className='col-span-full'>
          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-3 font-bold'>
              Bolder Landingpage
            </h2>
            <h6 className='text-gray-200 text-base mb-[14px] font-bold'>
              Web Development
            </h6>
            <div className='w-full h-auto mb-5'>
              <div className='bg-dark-200 relative flex flex-col px-4'>
                <button className='h-6 w-6 flex items-center justify-center rounded bg-dark-300 mt-2 ml-auto'>
                  <ArrowUpIcon className='h-4 w-4 transform rotate-45 text-gray-100' />
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
            <p className='text-gray-200 text-sm font-inter leading-6'>
              Serrow restructured and designed core pages, creating interactive
              elements that put users in control and allowed them to discover
              the information needed to make a decision.
            </p>
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default Project;
