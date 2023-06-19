import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/common/NavBar';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
<<<<<<< HEAD
      <Container maxWidth="xl" sx={{flexGrow: 1}}>
=======
      <div className="container">
>>>>>>> a263ed41eeae4cfb0dd1fb5b1e064e76215f7578
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
