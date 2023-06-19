import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/common/NavBar';

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
