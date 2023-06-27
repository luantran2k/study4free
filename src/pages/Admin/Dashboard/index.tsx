import FileIcon from '../../../assets/icons/File';
import UsersIcon from '../../../assets/icons/Users';
import WalletIcon from '../../../assets/icons/Wallet';
import DashboardLineChart from '../../../components/admin/Dashboard/LineChart';
import DashboardOverviewCard from '../../../components/admin/Dashboard/OverviewCard';
import DashboardPieChart from '../../../components/admin/Dashboard/PieChart';
import DashboardTopExams from '../../../components/admin/Dashboard/TopExams';
import DashboardTopUsers from '../../../components/admin/Dashboard/TopUsers';

function AdminDashboard() {
  return (
    <div>
      <p className="text-4xl font-medium mb-6">Overview</p>
      <p className="text-2xl font-medium mb-4">This month</p>
      <div className="flex flex-col md:flex-row  gap-6 mb-20">
        <DashboardOverviewCard
          title={'Active user'}
          icon={<UsersIcon />}
          description={'300+'}
          className={'bg-blue-500'}
        />
        <DashboardOverviewCard
          title={'New paid users'}
          icon={<WalletIcon />}
          description={'120+'}
          className={'bg-blue-700'}
        />
        <DashboardOverviewCard
          title={'Done exams'}
          icon={<FileIcon />}
          description={'200+'}
          className={'bg-blue-900'}
        />
      </div>
      <p className="text-2xl font-medium mb-4">Recent months</p>
      <div className="flex flex-col md:flex-row  gap-8 w-full items-center mb-12">
        <div className="flex-auto flex justify-center">
          <DashboardLineChart />
        </div>
        <div className="flex-auto flex justify-center">
          <DashboardPieChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 [&>div]:flex-1">
        <DashboardTopUsers />
        <DashboardTopExams />
      </div>
    </div>
  );
}

export default AdminDashboard;
