import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

export default function Hero() {
  return (
    <Section name='hero-mentorship' className='w-full pt-6 xl:pt-[200px]'>
      <Grid>
        <div className='col-span-full xl:col-span-5 flex flex-col'>
          <h1 className='text-white text-2xl text-center mb-4 xl:mb-10 xl:text-5xl  font-bold'>
            Mentorship
          </h1>
          <hr className='text-gray-400 my-2 block xl:hidden' />
          <p className='text-sm xl:text-lg text-gray-300 mb-2 xl:mb-5 mt-4 xl:mt-0'>
            Menghabiskan banyak waktu untuk belajar{' '}
            <span className='text-leaf-500 xl:underline'> sendiri</span> dan
            tetap merasa{' '}
            <span className='text-leaf-500 xl:underline'>stuck </span>?
          </p>
          <div className='flex items-center'>
            <div className='h-[77px] w-[5px] bg-gradient-hr mr-4 hidden xl:block'></div>
            <p className='text-sm xl:text-lg text-gray-300 mb-2 xl:mb-0'>
              Mentorship Frontend ini menjadi jawaban atas permasalahanmu.
              Karena disini, kamu bakal merasakan mentoring yang lebih personal
            </p>
          </div>
        </div>
        <div className='hidden xl:flex flex-col  py-5 pl-9 pr-2 col-span-full xl:col-span-7 xl:col-start-6'>
          <div className='bg-dark-200 rounded-xl py-5 space-y-5 xl:space-y-0 flex flex-col xl:flex-row px-0 xl:px-10 gap-0 xl:gap-6'>
            <div className='flex flex-col  pl-[34px] xl:px-0 pr-1 relative '>
              <div className='flex'>
                <p className='text-4xl mr-3'>😀</p>
                <h3 className='text-white font-semibold text-lg break-words'>
                  Minggu Pertama
                </h3>
              </div>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas dasar dari website seperti tag atribut dan element.
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px] block xl:hidden'>
                😃{' '}
              </div>
            </div>
            <div className='flex flex-col  pl-[34px] xl:px-0 pr-1 relative '>
              <div className='flex'>
                <p className='text-4xl mr-3'>😗</p>
                <h3 className='text-white font-semibold text-lg break-words'>
                  Minggu Kedua
                </h3>
              </div>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas seputar Pengembangan website - SDLC dasar.
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px] block xl:hidden'>
                😃{' '}
              </div>
            </div>
            <div className='flex flex-col  pl-[34px] xl:px-0 pr-1 relative '>
              <div className='flex'>
                <p className='text-4xl mr-3'>🥰</p>
                <h3 className='text-white font-semibold text-lg break-words'>
                  Minggu Ketiga
                </h3>
              </div>
              <p className='text-gray-300 text-sm mt-4'>
                Membahas seputar konsep layoung seperti flexbox dan grid.
              </p>
              <div className='absolute top-[15%] -left-7 text-[40px] block xl:hidden'>
                😃{' '}
              </div>
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
}
