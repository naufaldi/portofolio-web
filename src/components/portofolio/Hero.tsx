import Image from 'next/image';
import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const Hero: FC = () => {
  return (
    <Section name='portofolio' className='pt-6 xl:pt-[200px] mb-0 xl:mb-20'>
      <Grid>
        <div className='col-span-full xl:col-span-5'>
          <h1 className='text-white text-2xl xl:text-6xl text-center xl:text-left mb-4 font-normal xl:font-bold'>
            Project that i has been{' '}
            <strong className='text-leaf-500'>done</strong>
          </h1>
          <hr className='text-gray-400 my-2 block xl:hidden' />
        </div>
        <div className='col-span-2'>
          <div className='w-full h-[168px] relative ml-2'>
            <Image
              width={168}
              height={168}
              layout='fill'
              objectFit='cover'
              src='/image/portfolio/arrow.png'
              alt='Arrow'
            />
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default Hero;
