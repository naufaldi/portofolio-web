import React, { FC } from 'react';

import Grid from '../common/Grid';
import Section from '../common/Section';
import Project from '../portofolio/Project';

const ListProject: FC = () => {
  return (
    <Section name='project-list' className='mt-20'>
      <Grid className='w-full'>
        <div className='col-span-5'>
          <h2>Featured Project</h2>
        </div>
        <div className='col-span-full'>
          <Project />
        </div>
        <div className='col-span-full'>
          <Project />
        </div>
      </Grid>
    </Section>
  );
};

export default ListProject;
