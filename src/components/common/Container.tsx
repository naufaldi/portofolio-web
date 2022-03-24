import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Container: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'max-w-screen-sm w-full px-6 sm:px-4 mx-auto xl:max-w-screen-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
