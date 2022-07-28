import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react';

import UnstyledLink from '../links/UnstyledLink';

const HeaderDekstop: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      className={clsx(
        'fixed top-0 right-0 left-0  bg-dark z-10 ',
        offset !== 0 ? 'shadow-md' : ''
      )}
    >
      <header
        className={clsx(
          'max-w-screen-xl mx-auto flex flex-col text-white  transition-all',
          offset !== 0 ? ' pt-7 pb-1' : ' pt-[52px] pb-[32px]'
        )}
      >
        <div
          className={clsx(
            'flex justify-between items-center transition-all',
            offset !== 0 ? ' mb-4' : ' mb-10'
          )}
        >
          <h1 className='font-bold text-2xl'>Naufaldi</h1>
          <div className='flex w-7/12 lg:w-5/12 justify-between'>
            <UnstyledLink href='/'>Home</UnstyledLink>
            <UnstyledLink href='/mentorship'>Mentorship</UnstyledLink>
            <UnstyledLink href='/portofolio'>Portofolio</UnstyledLink>
            <UnstyledLink href='/snippet'>Snippet</UnstyledLink>
            <UnstyledLink href='/blog'>Blog</UnstyledLink>
          </div>
        </div>
        <hr
          className={clsx(
            'transition-all border-[#4D4D4D]',
            offset !== 0 ? 'invisible' : 'visible'
          )}
        />
      </header>
    </nav>
  );
};

export default HeaderDekstop;
