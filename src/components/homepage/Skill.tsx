import { GlobeIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';

import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

const Skill: FC = () => {
  return (
    <Section name='skill' className='mt-20  block xl:hidden'>
      <Grid className='w-full gap-y-12'>
        <div className='col-span-full sm:col-span-2 flex justify-center px-8'>
          <Card
            whatIdo={true}
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='Web Development'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
        </div>
        <div className='col-span-full sm:col-span-2 flex justify-center px-8'>
          <Card
            whatIdo={true}
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='UX Research'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
        </div>
        <div className='col-span-full sm:col-span-2 flex justify-center px-8'>
          <Card
            whatIdo={true}
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='Mentoring'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
        </div>
        <div className='col-span-full sm:col-span-2 flex justify-center px-8'>
          <Card
            whatIdo={true}
            image={<GlobeIcon className='h-7 w-7 text-white' />}
            title='Speaker'
            caption='You will receive a customized plan for your fitness journey, and lots of support.'
          />
        </div>
      </Grid>
    </Section>
  );
};

export default Skill;
