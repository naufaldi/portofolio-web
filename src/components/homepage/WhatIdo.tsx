import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const WhatIdo: FC = () => {
  return (
    <Section name='biography' className='pt-7 '>
      <Grid className='w-full'>
        <h1 className='text-white col-span-full text-xl text-center'>
          What I do
        </h1>
        <div className='col-span-full'>
          <p className='text-sm mt-3 text-gray-100 leading-6 font-inter tracking-wide'>
            Build and maintain websites,{' '}
            <span className='text-leaf-500'>frontend developer</span> FTW. I
            also have a mentorship called{' '}
            <strong className='text-transparent bg-clip-text bg-gradient-to-br from-leaf-500 to-ocean-500 tracking-wide'>
              MOFON
            </strong>
            . My motto is Beauty and function in equal measure as priority.
          </p>
        </div>
      </Grid>
    </Section>
  );
};

export default WhatIdo;
