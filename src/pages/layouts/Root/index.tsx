import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/common/Header/Header';
import { Footer } from '../../../components/common/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="container flex-grow-[1] mx-auto mb-10">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
