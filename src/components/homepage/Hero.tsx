import Image from 'next/image';
import React, { FC } from 'react';

import FacebookIcon from '@/public/icon/facebook.svg';
import InstagramIcon from '@/public/icon/instagram.svg';
import TwitterIcon from '@/public/icon/twitter.svg';
import HeroImage from '@/public/image/homepage/naufaldi.png';

import Container from '../common/Container';
import Grid from '../common/Grid';

const Hero: FC = () => {
  return (
    <section id='hero' className='w-full pt-10'>
      <Container>
        <Grid>
          <div className='col-span-2 col-start-2 flex flex-col justify-center items-center'>
            <div className='w-[120px] h-[120px] rounded-full bg-gradient-hero p-[6px]'>
              <div className='h-full w-full rounded-full bg-dark-100 flex justify-center items-center'>
                <Image
                  src={HeroImage}
                  width={96}
                  height={96}
                  alt='Naufaldi'
                  quality={100}
                />
              </div>
            </div>
            <div className='flex space-x-4 mt-6'>
              <InstagramIcon className='text-white h-6 w-6' />
              <TwitterIcon className='text-white h-6 w-6' />
              <FacebookIcon className='text-white h-6 w-6' />
            </div>
          </div>
          <div className='col-span-full'>
            <div className='flex w-full mt-10'>
              <h1 className='text-2xl leading-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-leaf-500 to-ocean-500 tracking-wide text-center'>
                Hi Im Naufaldi, a special human with some ability to love
                learning and working on teamwork.{' '}
              </h1>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
