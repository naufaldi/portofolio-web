import React, { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
