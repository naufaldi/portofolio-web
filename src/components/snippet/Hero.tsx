import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const Hero: FC = () => {
  return (
    <Section name='snippet' className='pt-6 xl:pt-[200px]'>
      <Grid>
        <div className='col-span-full'>
          <h2 className='text-5xl font-bold text-white xl:mb-4'>
            Code Snippet
          </h2>
        </div>
      </Grid>
    </Section>
  );
};

export default Hero;
