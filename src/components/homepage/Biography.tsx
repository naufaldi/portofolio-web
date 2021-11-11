import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

const Biography: FC = () => {
  return (
    <Section name='biography' className='pt-7  px-6'>
      <Grid className='w-full items-center'>
        <h1 className='text-white col-span-full text-xl text-center'>
          Biography
        </h1>
        <div className='col-span-full'>
          <p className='text-sm mt-3 text-gray-100 leading-6 font-inter tracking-wide'>
            Getting Buff +1 for learning, Buff +2 for documentation and more
            buff on managing team. Exicited on
            <span className='text-ocean-500'> React</span>,
            <span className='text-sky-500'> UX Research</span> and
            <span className='text-leaf-500'> Agile Development.</span>
          </p>
        </div>
      </Grid>
    </Section>
  );
};

export default Biography;
