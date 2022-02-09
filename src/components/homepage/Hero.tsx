import Image from 'next/image';
import React, { FC } from 'react';

import FacebookIcon from '@/public/icon/facebook.svg';
import InstagramIcon from '@/public/icon/instagram.svg';
import TwitterIcon from '@/public/icon/twitter.svg';
import HeroImage from '@/public/image/homepage/naufaldi.png';

import Container from '../common/Container';
import Grid from '../common/Grid';
import Section from '../common/Section';

const Hero: FC = () => {
  return (
    <Section name='hero' className='w-full pt-10 xl:pt-40'>
      <Container>
        <Grid>
          <div className='col-span-2 col-start-2 xl:col-start-1 xl:col-span-full flex flex-col xl:flex-row justify-center xl:justify-start items-center xl:pt-[70px]'>
            <div className='w-[120px] h-[120px] xl:w-[155px] xl:h-[155px] rounded-full bg-gradient-hero p-[6px] xl:mr-9'>
              <div className='h-full w-full rounded-full bg-dark-100 flex justify-center items-center'>
                <div className='relative h-[96px] w-[96px] xl:h-[120px] xl:w-[120px]'>
                  <Image
                    src={HeroImage}
                    width={96}
                    height={96}
                    objectFit='fill'
                    layout='fill'
                    alt='Naufaldi'
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div className='flex w-10/12 xl:space-x-[80px]'>
              <div className='hidden xl:flex flex-col w-7/12'>
                <h4
                  className='text-white  text-3xl font-semibold
                 text-left'
                >
                  Biography
                </h4>
                <div className=''>
                  <p className='text-sm xl:text-lg mt-3 text-gray-100 leading-6 font-inter tracking-wide'>
                    Getting Buff +1 for learning, Buff +2 for documentation and
                    more buff on managing team. Exicited on
                    <span className='text-ocean-500'> React</span>,
                    <span className='text-sky-500'> UX Research</span> and
                    <span className='text-leaf-500'> Agile Development.</span>
                  </p>
                </div>
              </div>
              <div className='flex flex-row xl:flex-col  mt-6 xl:mt-0 '>
                <h4 className='hidden xl:block text-white  text-3xl font-semibold text-left'>
                  Lets connect
                </h4>
                <div className='flex  space-x-4 mt-0 xl:mt-3'>
                  <InstagramIcon className='text-white h-6 w-6' />
                  <TwitterIcon className='text-white h-6 w-6' />
                  <FacebookIcon className='text-white h-6 w-6' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-full xl:row-start-1'>
            <div className='flex w-full mt-10'>
              <h1 className='text-2xl xl:text-6xl xl:leading-snug xl:text-left leading-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-leaf-500 to-ocean-500 tracking-wide text-center'>
                Hi Im Naufaldi, a special human with some ability to love
                learning and working on teamwork.{' '}
              </h1>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Hero;
