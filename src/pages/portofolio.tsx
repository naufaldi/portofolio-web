import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/portofolio/Hero';
import ListProject from '@/components/portofolio/ListProject';
import Seo from '@/components/Seo';

const Portofolio = ({ posts }: any) => {
  console.log('postss', posts);
  return (
    <>
      <Seo description='portofolio-naufaldi' />
      <Layout>
        <Hero />
        <ListProject />
        <div>
          {posts.map((post: any) => {
            //extract slug and frontmatter
            const { slug, frontmatter } = post;
            //extract frontmatter properties
            const { title, author, category, date, bannerImage, tags } =
              frontmatter;

            //JSX for individual blog listing
            return (
              <article key={title}>
                <Link href={`/project/${slug}`}>
                  <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
              </article>
            );
          })}
        </div>
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
  console.log('post', posts);
  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
export default Portofolio;
