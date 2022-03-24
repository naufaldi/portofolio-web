import React from 'react';

import Layout from '@/components/layout';
import Seo from '@/components/Seo';
import Hero from '@/components/snippet/Hero';
import ListSnippet from '@/components/snippet/ListSnippet';

const snippet = () => {
  return (
    <>
      <Seo description='code-snippet' />
      <Layout>
        <Hero />
        <ListSnippet />
      </Layout>
    </>
  );
};

export default snippet;
