import * as React from 'react';

import Seo from '@/components/Seo';
import Layout from '@/components/layout';
import Hero from '@/components/homepage/Hero';

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
