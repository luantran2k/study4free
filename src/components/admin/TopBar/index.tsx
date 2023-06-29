import BarsIcon from '../../../assets/icons/Bars';
import { useAppSelector } from '../../../hooks/redux';

type Props = {
  toggleSidebar: () => void;
};

function AdminTopBar({ toggleSidebar }: Props) {
  const { name, userInformation } = useAppSelector((state) => state.auth);
  const avatar = userInformation?.avatar || '';
  return (
    <div className="flex justify-between px-4 items-center border-b-2 h-20 ">
      <button onClick={toggleSidebar}>
        <BarsIcon />
      </button>
      <div className="flex gap-6 items-center">
        <p className="text-2xl font-medium">Wellcome {name}!</p>
        <div className="w-12 h-12">
          <img src={avatar} alt="Avatar" />
        </div>
        {/* <ul className="menu menu-horizontal  rounded  bg-slate-800 [&_.icon]:p-2 hover:[&_svg]:text-blue-400 [&_.icon]:cursor-pointer  [&_svg]:text-white ">
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
        </ul> */}
      </div>
    </div>
  );
}

export default AdminTopBar;
