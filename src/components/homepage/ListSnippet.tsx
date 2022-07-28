import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '../buttons/Button';
import Grid from '../common/Grid';
import Section from '../common/Section';
import ItemSnippet from '../snippet/ItemSnippet';

const ListSnippet = () => {
  return (
    <Section name='list-snippet ' className='mt-20'>
      <Grid className='gap-y-6'>
        <div className='col-span-12'>
          <h2 className='text-5xl font-bold text-white '>Code Snippet</h2>
        </div>
        <div className='col-span-6'>
          <ItemSnippet />
        </div>
        <div className='col-span-6'>
          <ItemSnippet />
        </div>
        <div className='col-span-6'>
          <ItemSnippet />
        </div>
        <div className='col-span-6'>
          <ItemSnippet />
        </div>
        <div className='col-span-2 my-4 sm:my-0'>
          <Button variants='primary' className='flex items-center'>
            {' '}
            <GiHamburgerMenu className='h-4 w-4 mr-2' /> See More
          </Button>
        </div>
      </Grid>
    </Section>
  );
};

export default ListSnippet;
