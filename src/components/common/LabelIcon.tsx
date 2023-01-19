import React, { FC } from 'react';

interface LabelIconProps {
  name?: string;
  imgSrc?: string;
}

const LabelIcon: FC<LabelIconProps> = ({ name, imgSrc }) => {
  return (
    <label
      htmlFor={name}
      className='bg-white rounded-sm flex items-center justify-center h-6 w-6'
    >
      <img src={imgSrc} className='h-4 w-4' alt={name} />
    </label>
  );
};

export default LabelIcon;
