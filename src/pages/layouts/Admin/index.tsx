import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../../components/admin/Sidebar';
import AdminTopBar from '../../../components/admin/TopBar';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <div className=" basis-1/4 md:basis-1/6 border-r-2">
        <AdminSideBar />
      </div>
      <div className="flex-1">
        <AdminTopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
