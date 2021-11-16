import React from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/mentorship/Hero';
import Weeks from '@/components/mentorship/Weeks';
import Seo from '@/components/Seo';

export default function mentorship() {
  return (
    <>
      <Seo title='Mentorship' />
      <Layout>
        <Hero />
        <Weeks />
      </Layout>
    </>
  );
}
