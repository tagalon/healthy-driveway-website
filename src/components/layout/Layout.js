import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from './head'

const Layout = ({ children }) => {
  return (
    <>
      <Head/>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
