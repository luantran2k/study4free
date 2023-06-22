import { Outlet, useLocation } from 'react-router-dom';

function ExamsPage() {
  const location = useLocation();
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default ExamsPage;
