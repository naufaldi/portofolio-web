import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';

const Card: FC<{
  className?: string;
  image: string | ReactElement<any, any>;
  title: string;
  caption: string;
}> = ({ className, image, title, caption }) => {
  return (
    <div
      className={clsx(
        'relative pl-[18px] pr-4 pt-[26px] pb-[13px] bg-dark-200 rounded-xl xl:max-w-[260px]',
        className
      )}
    >
      <div className='flex flex-col'>
        <div className='bg-gradient-to-b from-leaf-500 to-ocean-500 rounded-full h-[60px] w-[60px] -mt-16 mx-auto p-[2px]'>
          <div className='bg-dark-200 w-full h-full rounded-full flex items-center justify-center'>
            <span className='text-3xl'>{image}</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-white text-sm leading-6 mt-2 text-center'>
            {title}
          </h4>
          <p className='text-gray-300 text-center text-sm leading-6 xl:leading-[26px]'>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
