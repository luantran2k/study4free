import { Suspense, lazy, useState } from 'react';
import { Outlet } from 'react-router-dom';

const AdminSideBar = lazy(() => import('../../components/admin/Sidebar'));
const AdminTopBar = lazy(() => import('../../components/admin/TopBar'));
function AdminPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden ">
      <div
        className={
          isSidebarOpen
            ? `hidden md:block w-1/4 md:1/6 min-w-fit max-w-xs border-r-2 transition-all overflow-hidden`
            : 'hidden md:block w-0  transition-all overflow-hidden'
        }
      >
        <AdminSideBar />
      </div>
      <div
        className={`fixed md:hidden top-0 bottom-0 left-0 right-0 flex ${
          isSidebarOpen ? 'z-10' : '-z-10'
        }`}
      >
        <div
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-all z-20`}
        >
          <AdminSideBar hideSideBar={() => setSidebarOpen(false)} />
        </div>
        <div
          className={`fixed h-screen w-screen  bg-black opacity-20 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>
      </div>
      <div className={`h-screen w-3/4 md:5/6 flex-1`}>
        <AdminTopBar
          toggleSidebar={() => {
            setSidebarOpen(!isSidebarOpen);
          }}
        />
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
