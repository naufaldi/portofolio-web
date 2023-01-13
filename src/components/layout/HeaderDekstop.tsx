import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { FC, Fragment, useEffect, useState } from 'react';

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
          'max-w-screen-xl px-[70px] mx-auto flex flex-col text-white  transition-all',
          offset !== 0 ? ' pt-7 pb-1' : ' pt-[52px] pb-[32px]'
        )}
      >
        <div
          className={clsx(
            'flex justify-between items-center transition-all',
            offset !== 0 ? ' mb-4' : ' mb-10'
          )}
        >
          <UnstyledLink href={'/'}>
            <p className='font-bold text-2xl'>Naufaldi</p>
          </UnstyledLink>
          <div className='flex w-7/12 lg:w-5/12 justify-between'>
            <UnstyledLink href='/'>Home</UnstyledLink>
            <UnstyledLink href='/mentorship'>Mentorship</UnstyledLink>
            <UnstyledLink href='/portofolio'>Portofolio</UnstyledLink>
            <UnstyledLink href='/snippet'>Snippet</UnstyledLink>
            <UnstyledLink href='https://blog.cerita-faldi.xyz'>
              Blog
            </UnstyledLink>
            <Menu
              as='div'
              className='relative inline-block text-left  sm:hidden'
            >
              <div>
                <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                  Options
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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
