import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '../buttons/Button';
import Grid from '../common/Grid';
import Section from '../common/Section';
import ItemSnippet from '../snippet/ItemSnippet';

import { snippetProps } from '@/types/portofolio';

const ListSnippet = ({ posts }: snippetProps) => {
  return (
    <Section name='list-snippet ' className='mt-20'>
      <Grid className='gap-y-6'>
        <div className='col-span-full'>
          <h2 className='text-5xl font-bold text-white '>Code Snippet</h2>
        </div>
        {posts.map((post: any, index: number) => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post;
          //extract frontmatter properties
          const { title, tags, description } = frontmatter;

          //JSX for individual blog listing
          return (
            <div className='col-span-full sm:col-span-6' key={index}>
              <ItemSnippet
                title={title}
                tags={tags}
                description={description}
              />
            </div>
          );
        })}

        <div className='col-span-full sm:col-span-2 my-4 sm:my-0'>
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
