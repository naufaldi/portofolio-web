import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Section: FC<{ name: string; children: ReactNode; className?: string }> =
  ({ name, children, className }) => {
    return (
      <section
        id={name}
        className={clsx(
          'w-full px-6 sm:px-10 max-w-md sm:max-w-2xl mx-auto xl:max-w-screen-xl',
          className
        )}
      >
        {children}
      </section>
    );
  };

export default Section;
