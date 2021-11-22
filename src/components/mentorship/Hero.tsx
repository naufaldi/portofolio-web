import React from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

export default function Hero() {
  return (
    <Section name='hero-mentorship' className='w-full pt-6'>
      <Grid>
        <div className='col-span-full flex flex-col'>
          <h1 className='text-white text-2xl text-center mb-4'>Mentorship</h1>
          <hr className='text-gray-400 my-2' />
          <p className='text-sm text-gray-300 mb-2 mt-4'>
            Menghabiskan banyak waktu untuk belajar{' '}
            <span className='text-leaf-500'> sendiri</span> dan tetap merasa
            <span className='text-leaf-500'> stuck </span>?
          </p>
          <p className='text-sm text-gray-300 mb-2 '>
            Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena
            disini, kamu bakal merasakan mentoring yang lebih personal
          </p>
        </div>
      </Grid>
    </Section>
  );
}
