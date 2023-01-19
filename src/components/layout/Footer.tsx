import * as React from 'react';
// import CopyToClipboard from 'react-copy-to-clipboard';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

// import { Tooltip } from 'react-tippy';
// import { trackEvent } from '@/lib/analytics';
// import Accent from '@/components/Accent';
// import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';

// import { spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='pb-2 mt-12'>
      <main className='flex flex-col items-center pt-6 border-t border-gray-400 dark:border-gray-300 layout'>
        <FooterLinks />

        {/* {spotifyFlag && <Spotify className='mt-8' />} */}

        <p className='mt-12 font-medium text-white dark:text-gray-300'>
          Reach me out
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-300 dark:text-gray-300'>
          © Naufaldi Rafif S {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, text }) => (
        <UnstyledLink
          key={href}
          className='text-sm font-medium rounded-sm text-gray-300 dark:text-gray-300 animated-underline focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          href={href}
        >
          {text}
        </UnstyledLink>
      ))}
    </div>
  );
}

function SocialLinks() {
  // const [copyStatus, setCopyStatus] = React.useState(
  //   'Click the mail logo to copy'
  // );

  return (
    <div className='flex space-x-4 mb-12 mt-2'>
      <div className='flex items-center justify-center'></div>
      {socials.map((social) => (
        <UnstyledLink
          key={social.text}
          className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          href={social.href}
          target='_blank'
        >
          <social.icon className='w-6 h-6 my-auto text-gray-300 align-middle transition-colors dark:text-gray-300 hover:text-primary-300 dark:hover:text-primary-300' />
        </UnstyledLink>
      ))}
    </div>
  );
}

const footerLinks = [
  {
    href: 'https://karyakarsa.com/naufaldisatriya',
    text: 'Karya Karsa',
  },
  {
    href: 'https://naufaldi.showwcase.com/',
    text: 'Showwcase',
  },
  {
    href: 'https://www.polywork.com/naufaldi',
    text: 'Polywork',
  },
];

const socials = [
  {
    href: 'https://github.com/naufaldi',
    icon: SiGithub,
    text: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/naufaldirafif/',
    icon: SiLinkedin,
    text: 'Linkedin',
  },
  {
    href: 'https://twitter.com/F2aldi',
    icon: SiTwitter,
    text: 'Twitter',
  },
];
