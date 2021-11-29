import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const Hero: FC = () => {
  return (
    <Section name='portofolio' className='pt-6'>
      <Grid>
        <div className='col-span-full'>
          <h1 className='text-white text-2xl text-center mb-4'>
            Code Snippets
          </h1>
          <hr className='text-gray-400 my-2' />
        </div>
      </Grid>
    </Section>
  );
};

export default Hero;
