import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/common/Header';
import { Footer } from '../../../components/common/Footer';
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
