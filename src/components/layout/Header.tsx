import {
  ArchiveIcon,
  ClipboardCheckIcon,
  DotsVerticalIcon,
  HomeIcon,
} from '@heroicons/react/solid';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className='fixed bottom-0  h-[76px] bg-black right-0 left-0 z-20'>
      <div className='flex justify-between pl-[18px] pr-[19px] pt-[17px] pb-4'>
        <div className='flex flex-col items-center'>
          <HomeIcon className='h-5 w-5 text-white' />
          <p className='text-sm text-white mt-1'>Home</p>
        </div>
        <div className='flex flex-col items-center'>
          <ClipboardCheckIcon className='h-5 w-5 text-gray-500' />
          <p className='text-sm text-gray-500 mt-1'>Mentorship</p>
        </div>
        <div className='flex flex-col items-center'>
          <ArchiveIcon className='h-5 w-5 text-gray-500' />
          <p className='text-sm text-gray-500 mt-1'>Portofolio</p>
        </div>
        <div className='flex flex-col items-center'>
          <DotsVerticalIcon className='h-5 w-5 text-gray-500' />
          <p className='text-sm text-gray-500 mt-1'>More</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
