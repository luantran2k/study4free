import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
const Header = lazy(() => import('../../../components/common/Header'));
const Footer= lazy(() => import('../../../components/common/Footer'));

const RootLayout = () => {
  return (
    <div className="h-full relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
