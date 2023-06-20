import BellIcon from '../../../assets/icons/Bell';
import MoonIcon from '../../../assets/icons/Moon';
import SettingIcon from '../../../assets/icons/Setting';
import UserIcon from '../../../assets/icons/User';

function AdminTopBar() {
  return (
    <div className="flex justify-end items-center border-b-2 h-20">
      <ul className="menu menu-horizontal mr-4 rounded  bg-slate-800 [&_.icon]:p-2 hover:[&_svg]:text-blue-400 [&_.icon]:cursor-pointer  [&_svg]:text-white ">
        <li className="icon ">
          <MoonIcon />
        </li>
        <li className="icon ">
          <BellIcon />
        </li>
        <li className="icon ">
          <SettingIcon />
        </li>
        <li className="icon ">
          <UserIcon />
        </li>
      </ul>
    </div>
  );
}

export default AdminTopBar;
