import React, { FC } from 'react';

import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

const Benefit: FC = () => {
  return (
    <Section name='benefit' className='w-full pt-12'>
      <Grid>
        <div className='col-span-full mb-20'>
          <h2 className='text-white text-2xl text-center'>
            Keuntungan Mentorship
          </h2>
        </div>
        <div className='col-span-full space-y-20'>
          <Card
            image='👨‍🏫 '
            title='Mentorship 1 : 1'
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            image='🎯 '
            title='Terarah '
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            image='🔖'
            title='Silabus'
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
        </div>
      </Grid>
    </Section>
  );
};

export default Benefit;
