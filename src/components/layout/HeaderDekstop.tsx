import React, { FC } from 'react';

import UnstyledLink from '../links/UnstyledLink';

const HeaderDekstop: FC = () => {
  return (
    <div className='fixed top-0 right-0 left-0 h-40 bg-dark z-10'>
      <div className='max-w-screen-xl mx-auto flex flex-col text-white pt-[52px] pb-[32px]'>
        <div className='flex justify-between items-center mb-10'>
          <h1>Naufaldi</h1>
          <div className='flex w-7/12 justify-between'>
            <UnstyledLink href='/'>Home</UnstyledLink>
            <UnstyledLink href='/mentorship'>Mentorship</UnstyledLink>
            <UnstyledLink href='/portofolio'>Portofolio</UnstyledLink>
            <UnstyledLink href='/snippet'>Snippet</UnstyledLink>
            <UnstyledLink href='/blog'>Blog</UnstyledLink>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default HeaderDekstop;
