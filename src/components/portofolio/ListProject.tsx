import React, { FC } from 'react';

import Project from './Project';
import Section from '../common/Section';

const ListProject: FC = ({ posts }: any) => {
  return (
    <Section name='list-project'>
      {posts.map((post: any, index: number) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, category, date, bannerImage, tags, description } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <Project
            key={index}
            title={title}
            category={category}
            description={description}
            tags={tags}
            bannerImage={bannerImage}
          />
        );
      })}
    </Section>
  );
};

export default ListProject;
