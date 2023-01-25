import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/portofolio/Hero';
import ListProject from '@/components/portofolio/ListProject';
import Seo from '@/components/Seo';

import { portofolioProps } from '@/types/portofolio';

const Portofolio = ({ posts }: portofolioProps) => {
  return (
    <>
      <Seo description='portofolio-naufaldi' />
      <Layout>
        <Hero />
        <ListProject posts={posts} />
      </Layout>
    </>
  );
};
//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('src/contents/project');

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(
      `src/contents/project/${fileName}`,
      'utf-8'
    );
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
export default Portofolio;
