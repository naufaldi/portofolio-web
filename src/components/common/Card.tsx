import clsx from 'clsx';
import React from 'react';

type CardProps = {
  className?: string;
  //image type
  image: string | React.ReactNode;
  title: string;
  caption: string;
  whatIdo?: boolean | undefined;
};

const Card = ({ className, image, title, caption, whatIdo }: CardProps) => {
  console.log('whatIdo', whatIdo);
  return (
    <div
      className={clsx(
        'relative pl-[18px] pr-4 pt-[26px] pb-[13px] xl:pb-[26px] bg-dark-200 rounded-xl max-w-[260px] xl:max-w-[655px] ml-0 xl:ml-auto ',
        className
      )}
    >
      <div
        className={clsx(
          'flex flex-col ',
          whatIdo ? 'xl:flex-col' : 'xl:flex-row'
        )}
      >
        <div
          className={clsx(
            'bg-gradient-to-b from-leaf-500 to-ocean-500 rounded-full     mx-auto p-[2px] flex-shrink-0',
            whatIdo
              ? ' ml-auto h-[60px] w-[60px] xl:h-[72px] xl:w-[72px]  xl:-mt-16 xl:mb-4 '
              : 'ml-0 xl:h-[120px] xl:w-[120px] xl:mx-auto xl:-ml-16'
          )}
        >
          <div className='bg-dark-200 w-full h-full rounded-full flex items-center justify-center'>
            <span className='text-3xl xl:text-5xl'>{image}</span>
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-col px-0 ',
            whatIdo ? 'xl:px-5' : 'xl:px-5 xl:justify-center'
          )}
        >
          <h4
            className={clsx(
              'text-white text-sm leading-6 xl:leading-normal mt-2 xl:mt-0 text-center  font-bold ',
              whatIdo
                ? ' xl:text-base xl:text-center'
                : ' xl:text-3xl xl:mb-2 xl:text-left'
            )}
          >
            {title}
          </h4>
          <p
            className={clsx(
              'text-gray-300 text-center xl:text-left text-sm  leading-6  xl:leading-normal',
              whatIdo ? ' xl:text-sm xl:text-center' : 'xl:text-lg'
            )}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
