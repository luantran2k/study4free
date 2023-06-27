import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const AdminSideBar = lazy(() => import('../../components/admin/Sidebar'));
const AdminTopBar = lazy(() => import('../../components/admin/TopBar'));
function AdminPage() {
  return (
    <div className="flex h-screen overflow-x-hidden ">
      <div className=" w-1/4 md:1/6 max-w-xs border-r-2">
        <AdminSideBar />
      </div>
      <div className="flex-1 h-screen ">
        <AdminTopBar />
        <Suspense fallback={<span className="loading loading-dots"></span>}>
          <div className="p-4 h-[calc(100%-5rem)] overflow-y-auto scrollbar">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default AdminPage;
