import React from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/portofolio/Hero';
import ListProject from '@/components/portofolio/ListProject';
import Seo from '@/components/Seo';

const Portofolio = () => {
  return (
    <>
      <Seo description='portofolio-naufaldi' />
      <Layout>
        <Hero />
        <ListProject />
      </Layout>
    </>
  );
};

export default Portofolio;
