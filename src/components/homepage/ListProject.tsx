import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '../buttons/Button';
import Grid from '../common/Grid';
import Section from '../common/Section';
import Project from '../portofolio/Project';

import { portofolioProps } from '@/types/portofolio';

type postProps = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category?: string;
    date: string;
    tags: string[];
    bannerImage: string;
    url: string;
  };
};
const ListProject = ({ posts }: portofolioProps) => {
  return (
    <Section name='project-list' className='mt-20 xl:mt-36'>
      <Grid className='w-full'>
        <div className='col-span-5'>
          <h2 className='text-5xl font-bold text-white'>Featured Project</h2>
        </div>
        {posts.slice(0, 2).map((post: postProps, index: number) => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post;
          //extract frontmatter properties
          const { title, category, date, bannerImage, tags, description } =
            frontmatter;

          //JSX for individual blog listing
          return (
            <div className='col-span-full' key={index}>
              <Project
                title={title}
                category={category}
                description={description}
                tags={tags}
                bannerImage={bannerImage}
              />
            </div>
          );
        })}

        <div className='col-span-2 my-4 xl:my-0'>
          <Button variants='primary' className='flex items-center'>
            <GiHamburgerMenu className='h-4 w-4 mr-2' /> See More
          </Button>
        </div>
      </Grid>
    </Section>
  );
};

export default ListProject;
