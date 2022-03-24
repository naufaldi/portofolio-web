import React from 'react';

import Layout from '@/components/layout';
import Benefit from '@/components/mentorship/Benefit';
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
        <Benefit />
      </Layout>
    </>
  );
}
