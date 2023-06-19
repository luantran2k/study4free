import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/common/NavBar';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
