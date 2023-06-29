import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
const Header = lazy(() => import('../../../components/common/Header'));
const Footer = lazy(() => import('../../../components/common/Footer'));

const RootLayout = () => {
  return (
    <div className="h-full relative">
      <Header />
      <div className="min-h-[16rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
