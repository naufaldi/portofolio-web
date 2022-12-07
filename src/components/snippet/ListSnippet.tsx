import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

import ItemSnippet from './ItemSnippet';
import Grid from '../common/Grid';
import Section from '../common/Section';

const ListSnippet = () => {
  return (
    <Section name='list-snippet'>
      <Grid className='pt-5 gap-y-5 xl:gap-y-0'>
        <div className='hidden xl:block text-white  col-span-full mb-6'>
          Search code snippet
        </div>
        <label className='block col-span-full relative'>
          <input
            type='text'
            className='mt-1 block w-full bg-dark-300 rounded-lg px-4 py-2 xl:py-4 xl:px-6 placeholder-gray-500 text-sm xl:mb-7 xl:mt-0 '
            placeholder='Type your favorite snippet ...'
          />
          <SearchIcon className='h-5 w-5 text-gray-300 absolute right-4 top-3 xl:top-5 xl:right-6' />
        </label>
        <div className='col-span-full grid grid-cols-2 gap-x-7 gap-y-8'>
          <ItemSnippet />
          <ItemSnippet />
          <ItemSnippet />
          <ItemSnippet />
        </div>
      </Grid>
    </Section>
  );
};

export default ListSnippet;
