import { Outlet } from 'react-router-dom';

import { Suspense, lazy } from 'react';
const AdminSideBar = lazy(() => import('../../../components/admin/Sidebar'));
const AdminTopBar = lazy(() => import('../../../components/admin/TopBar'));
function AdminLayout() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <div className="flex h-screen ">
        <div className=" basis-1/4 md:basis-1/6 border-r-2">
          <AdminSideBar />
        </div>
        <div className="flex-1 h-screen ">
          <AdminTopBar />
          <div className="p-4 h-[calc(100%-5rem)] overflow-auto scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>


  );
}

export default AdminLayout;
