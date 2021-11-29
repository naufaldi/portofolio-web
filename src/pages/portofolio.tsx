import React from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/portofolio/Hero';
import Project from '@/components/portofolio/Project';
import Seo from '@/components/Seo';

const Portofolio = () => {
  return (
    <>
      <Seo description='portofolio-naufaldi' />
      <Layout>
        <Hero />
        <Project />
      </Layout>
    </>
  );
};

export default Portofolio;
