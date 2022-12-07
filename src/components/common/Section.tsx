import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Section: FC<{ name: string; children: ReactNode; className?: string }> =
  ({ name, children, className }) => {
    return (
      <section
        id={name}
        className={clsx(
          'w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl',
          className
        )}
      >
        {children}
      </section>
    );
  };

export default Section;
