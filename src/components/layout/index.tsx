import React, { FC } from 'react';

import useMediaQueryHook from '@/Hooks/useMediaQueryHook';

import Footer from './Footer';
import HeaderDekstop from './HeaderDekstop';
import HeaderMobile from './HeaderMobile';

const Layout: FC = ({ children }) => {
  const { isBigDekstop } = useMediaQueryHook();
  return (
    <>
      {isBigDekstop ? <HeaderDekstop /> : <HeaderMobile />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
