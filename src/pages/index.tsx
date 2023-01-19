import * as React from 'react';

import { getProjectPost } from '@/lib/project';
import { getSnippetPost } from '@/lib/snippet';

import Biography from '@/components/homepage/Biography';
import Hero from '@/components/homepage/Hero';
import ListProject from '@/components/homepage/ListProject';
import ListSnippet from '@/components/homepage/ListSnippet';
import Skill from '@/components/homepage/Skill';
import WhatIdo from '@/components/homepage/WhatIdo';
import Layout from '@/components/layout';
import Seo from '@/components/Seo';

import { portofolioProps, snippetProps } from '@/types/portofolio';

type projectProps = {
  posts: portofolioProps['posts'];
  snippet: snippetProps['posts'];
};

export default function HomePage({ posts, snippet }: projectProps) {
  return (
    <>
      <Seo templateTitle='Home' />

      <Layout>
        <Hero />
        <Biography />
        <WhatIdo />
        <Skill />
        <ListProject posts={posts} />
        <ListSnippet posts={snippet} />
      </Layout>
    </>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const posts = getProjectPost();
  const snippet = getSnippetPost();
  // Return the pages static props
  return {
    props: {
      posts,
      snippet,
    },
  };
}
