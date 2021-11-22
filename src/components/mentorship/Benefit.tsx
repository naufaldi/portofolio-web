import React, { FC } from 'react';

import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

const Benefit: FC = () => {
  return (
    <Section name='benefit' className='w-full'>
      <Grid>
        <div className='col-span-full'>
          <h2>Keuntungan Mentorship</h2>
        </div>
        <div className='col-span-full'>
          <Card
            image='😏'
            title='Mentorship 1 : 1'
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            image='😏'
            title='Terarah '
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            image='😏'
            title='Silabus'
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
        </div>
      </Grid>
    </Section>
  );
};

export default Benefit;
