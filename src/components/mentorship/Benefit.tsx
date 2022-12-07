import Image from 'next/image';
import React, { FC } from 'react';

import Card from '../common/Card';
import Grid from '../common/Grid';
import Section from '../common/Section';

const Benefit: FC = () => {
  return (
    <Section name='benefit' className='w-full pt-12 xl:pt-28'>
      <Grid>
        <div className='col-span-full xl:col-span-4 mb-20 flex flex-col'>
          <h2 className='text-white text-2xl xl:text-5xl font-bold text-center xl:text-left mb-0 xl:mb-6'>
            Keuntungan Mentorship
          </h2>
          <div className='w-full h-[400px] relative -ml-8 hidden xl:block'>
            <Image
              height={400}
              width={400}
              objectFit='cover'
              layout='fill'
              src='/image/mentorship/person-white.png'
              alt='Person White Mentorship'
            />
          </div>
        </div>
        <div className='col-span-full xl:col-span-8 space-y-20'>
          <Card
            whatIdo={false}
            image='👨‍🏫 '
            title='Mentorship 1 : 1'
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            whatIdo={false}
            image='🎯 '
            title='Terarah '
            caption='Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya'
          />
          <Card
            whatIdo={false}
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
