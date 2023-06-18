import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../../../components/NavBar';

const RootLayout = () => {
  return (
    <div>
      <NavBar />

      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
