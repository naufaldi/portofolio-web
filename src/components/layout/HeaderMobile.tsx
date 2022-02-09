import {
  ArchiveIcon,
  BookmarkIcon,
  ChatIcon,
  ClipboardCheckIcon,
  CodeIcon,
  CurrencyDollarIcon,
  DotsVerticalIcon,
  HomeIcon,
} from '@heroicons/react/solid';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

import UnstyledLink from '../links/UnstyledLink';

const HeaderMobile: FC = () => {
  const router = useRouter();
  const [isMore, setIsMore] = useState(false);
  const routeHref = router.route;
  // console.log(routeHref);
  return (
    <div
      className={clsx(
        'fixed bottom-0 transition-all  bg-black right-0 left-0 z-20',
        isMore ? 'h-[152px]' : 'h-[76px]'
      )}
    >
      <div className='grid grid-cols-4 gap-4 pl-[18px] pr-[19px] pt-[17px] pb-4 max-w-screen-sm mx-auto'>
        <UnstyledLink href='/' className='flex flex-col items-center'>
          <HomeIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/' ? 'text-white' : 'text-gray-500'
            )}
          >
            Home
          </p>
        </UnstyledLink>
        <UnstyledLink className='flex flex-col items-center' href='/mentorship'>
          <ClipboardCheckIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/mentorship' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/mentorship' ? 'text-white' : 'text-gray-500'
            )}
          >
            Mentorship
          </p>
        </UnstyledLink>
        <UnstyledLink className='flex flex-col items-center' href='/portofolio'>
          <ArchiveIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/portofolio' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/portofolio' ? 'text-white' : 'text-gray-500'
            )}
          >
            Portofolio
          </p>
        </UnstyledLink>
        <UnstyledLink
          href={isMore ? '/snippet' : ''}
          className='flex flex-col items-center'
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? (
            <CodeIcon
              className={clsx(
                'h-5 w-5',
                routeHref === '/snippet' ? 'text-white' : 'text-gray-500'
              )}
            />
          ) : (
            <DotsVerticalIcon className={clsx('h-5 w-5 text-gray-500')} />
          )}
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/snippet' && isMore
                ? 'text-white'
                : 'text-gray-500'
            )}
          >
            {isMore ? 'Snippet' : 'More'}
          </p>
        </UnstyledLink>
      </div>
      <div className='grid grid-cols-4 gap-4 pl-[18px] pr-[19px] pt-[17px] pb-4'>
        <UnstyledLink href='/support' className='flex flex-col items-center'>
          <CurrencyDollarIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/support' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/support' ? 'text-white' : 'text-gray-500'
            )}
          >
            Support
          </p>
        </UnstyledLink>
        <UnstyledLink
          href='https://blog.cerita-faldi.xyz/'
          className='flex flex-col items-center'
        >
          <BookmarkIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/blog' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/blog' ? 'text-white' : 'text-gray-500'
            )}
          >
            Blog
          </p>
        </UnstyledLink>
        <UnstyledLink href='/contact' className='flex flex-col items-center'>
          <ChatIcon
            className={clsx(
              'h-5 w-5',
              routeHref === '/contact' ? 'text-white' : 'text-gray-500'
            )}
          />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/contact' ? 'text-white' : 'text-gray-500'
            )}
          >
            Contact
          </p>
        </UnstyledLink>
        <div
          className='flex flex-col items-center'
          onClick={() => setIsMore(!isMore)}
        >
          <DotsVerticalIcon className={clsx('h-5 w-5 text-gray-500')} />
          <p
            className={clsx(
              'text-sm mt-1',
              routeHref === '/' ? 'text-white' : 'text-gray-500'
            )}
          >
            Less
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
