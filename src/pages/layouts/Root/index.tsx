import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/common/NavBar';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <Container maxWidth="xl" sx={{flexGrow: 1}}>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
