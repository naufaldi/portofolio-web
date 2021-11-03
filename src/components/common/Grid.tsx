import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

const Grid: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx('grid grid-cols-4 gap-x-3', className)}>
      {children}
    </div>
  );
};

export default Grid;
