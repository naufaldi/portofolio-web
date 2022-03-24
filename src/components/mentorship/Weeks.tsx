import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const Weeks = () => {
  return (
    <Section name='weeks'>
      <Grid>
        <div className='flex flex-col  py-5 pl-9 pr-2 col-span-full'>
          <div className='bg-dark-200 rounded-xl py-5 space-y-5'>
            <div className='flex flex-col  pl-[34px] pr-1 relative '>
              <h3 className='text-white font-semibold text-lg'>
                Minggu Pertama
              </h3>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas dasar dari website seperti tag atribut dan element.{' '}
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px]'>😃 </div>
            </div>
            <div className='flex flex-col  pl-[34px] pr-1 relative '>
              <h3 className='text-white font-semibold text-lg'>
                Minggu Pertama
              </h3>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas dasar dari website seperti tag atribut dan element.{' '}
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px]'>😃 </div>
            </div>
            <div className='flex flex-col  pl-[34px] pr-1 relative '>
              <h3 className='text-white font-semibold text-lg'>
                Minggu Pertama
              </h3>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas dasar dari website seperti tag atribut dan element.{' '}
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px]'>😃 </div>
            </div>
          </div>
          <button className='bg-dark-200 px-6 py-3 text-gray-300 flex items-center leading-6 rounded-xl mt-4'>
            <MenuIcon className='h-5 w-5 mr-5' />
            Baca Selengkapnya
          </button>
        </div>
      </Grid>
    </Section>
  );
};

export default Weeks;
