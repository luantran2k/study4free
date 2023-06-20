import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/common/NavBar';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className="container flex-grow-[1] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
