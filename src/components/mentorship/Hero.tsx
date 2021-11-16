import React from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';

export default function Hero() {
  return (
    <Section name='hero-mentorship' className='w-full'>
      <Grid>
        <div className='col-span-full flex flex-col'>
          <h1>Mentorship</h1>
          <hr className='text-gray-400 my-2' />
          <p>
            Menghabiskan banyak waktu untuk belajar sendiri dan tetap merasa
            stuck?
          </p>
          <p>
            Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena
            disini, kamu bakal merasakan mentoring yang lebih personal
          </p>
        </div>
      </Grid>
    </Section>
  );
}
