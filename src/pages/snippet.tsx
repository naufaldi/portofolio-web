import React from 'react';

import { getSnippetPost } from '@/lib/snippet';

import Layout from '@/components/layout';
import Seo from '@/components/Seo';
import Hero from '@/components/snippet/Hero';
import ListSnippet from '@/components/snippet/ListSnippet';

import { snippetProps } from '@/types/portofolio';

type projectProps = {
  snippet: snippetProps['posts'];
};

const Snippet = ({ snippet }: projectProps) => {
  return (
    <>
      <Seo description='code-snippet' />
      <Layout>
        <Hero />
        <ListSnippet posts={snippet} />
      </Layout>
    </>
  );
};

export default Snippet;
//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder

  const snippet = getSnippetPost();
  // Return the pages static props
  return {
    props: {
      snippet,
    },
  };
}
