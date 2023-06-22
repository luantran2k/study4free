import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/common/Header';
import { Footer } from '../../../components/common/Footer';
import React from 'react';
const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
