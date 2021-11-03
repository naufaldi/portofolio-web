import * as React from 'react';

import Hero from '@/components/homepage/Hero';
import Layout from '@/components/layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
