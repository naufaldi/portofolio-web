import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Section: FC<{ name: string; children: ReactNode; className?: string }> =
  ({ name, children, className }) => {
    return (
      <section id={name} className={clsx('w-full', className)}>
        {children}
      </section>
    );
  };

export default Section;
