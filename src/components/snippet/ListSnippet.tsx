import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

import ItemSnippet from './ItemSnippet';
import Grid from '../common/Grid';
import Section from '../common/Section';

const ListSnippet = () => {
  return (
    <Section name='list-snippet'>
      <Grid className='pt-5 gap-y-5'>
        <label className='block col-span-full relative'>
          <input
            type='text'
            className='mt-1 block w-full bg-dark-300 rounded-lg px-4 py-2 placeholder-gray-500 text-sm'
            placeholder='Type your favorite snippet ...'
          />
          <SearchIcon className='h-5 w-5 text-gray-300 absolute right-4 top-3' />
        </label>
        <div className='col-span-full'>
          <ItemSnippet />
        </div>
      </Grid>
    </Section>
  );
};

export default ListSnippet;
