import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Section: FC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => {
  return (
    <section id={name} className={clsx('w-full')}>
      {children}
    </section>
  );
};

export default Section;
