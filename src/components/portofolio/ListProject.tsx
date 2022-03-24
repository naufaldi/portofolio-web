import React, { FC } from 'react';

import Project from './Project';
import Section from '../common/Section';

const ListProject: FC = () => {
  return (
    <Section name='list-project'>
      <Project />
    </Section>
  );
};

export default ListProject;
