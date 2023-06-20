import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
<<<<<<< HEAD
    <div>
      <Outlet />
=======
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="container flex-grow-[1] mx-auto">
        <Outlet />
      </div>
>>>>>>> develop
    </div>
  );
};

export default RootLayout;
