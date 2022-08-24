import clsx from 'clsx';
import React, { FC } from 'react';

const Card: FC<{
  className?: string;
  //image type
  image: string | React.ReactNode;
  title: string;
  caption: string;
}> = ({ className, image, title, caption }) => {
  return (
    <div
      className={clsx(
        'relative pl-[18px] pr-4 pt-[26px] pb-[13px] xl:pb-[26px] bg-dark-200 rounded-xl max-w-[260px] xl:max-w-[655px] ml-0 xl:ml-auto ',
        className
      )}
    >
      <div className='flex flex-col xl:flex-row'>
        <div className='bg-gradient-to-b from-leaf-500 to-ocean-500 rounded-full h-[60px] w-[60px] xl:h-[120px] xl:w-[120px] -mt-16 xl:mt-0 ml-0  xl:-ml-20 mx-auto p-[2px] flex-shrink-0'>
          <div className='bg-dark-200 w-full h-full rounded-full flex items-center justify-center'>
            <span className='text-3xl xl:text-5xl'>{image}</span>
          </div>
        </div>
        <div className='flex flex-col px-0 xl:px-16'>
          <h4 className='text-white text-sm xl:text-3xl leading-6 xl:leading-normal mt-2 xl:mt-0 text-center xl:text-left font-bold '>
            {title}
          </h4>
          <p className='text-gray-300 text-center xl:text-left text-sm xl:text-lg  leading-6  xl:leading-normal'>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
