import { Outlet } from 'react-router-dom';


const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>

      <div className="container flex-grow-[1] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
