import { GlobeIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';

import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

const WhatIdo: FC = () => {
  return (
    <Section name='biography' className='pt-7 xl:pt-20'>
      <Grid className='w-full'>
        <h1 className='text-white col-span-full xl:col-span-5 xl:col-start-1 text-xl xl:text-3xl xl:font-semibold text-center xl:text-left'>
          What I do
        </h1>
        <div className='col-span-full xl:col-span-5 xl:col-start-1'>
          <p className='text-sm xl:text-lg mt-3 text-gray-100 leading-6 font-inter tracking-wide'>
            Build and maintain websites,{' '}
            <span className='text-leaf-500'>frontend developer</span> FTW. I
            also have a mentorship called{' '}
            <strong className='text-transparent bg-clip-text bg-gradient-to-br from-leaf-500 to-ocean-500 tracking-wide'>
              MOFON
            </strong>
            . My motto is Beauty and function in equal measure as priority.
          </p>
        </div>
        <div className='hidden xl:flex xl:space-x-8 col-span-5 col-end-13 xl:col-span-7 row-span-2'>
          <Card
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='Mentoring'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
          <Card
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='Mentoring'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
          <button>
            <svg
              className='h-9 w-9'
              viewBox='0 0 39 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 14.4218L0 19.223L29.0284 19.223L17.9304 30.321L21.2543 33.6079L38.0398 16.8224L21.2543 -4.57764e-05L17.9304 3.36075L29.0284 14.4218L0 14.4218Z'
                fill='#F3F3F3'
              />
            </svg>
          </button>
        </div>
      </Grid>
    </Section>
  );
};

export default WhatIdo;
