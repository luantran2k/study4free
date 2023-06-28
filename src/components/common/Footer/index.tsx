import { Link } from 'react-router-dom';
import Cambridge from '../../../assets/images/Cambridge';

const Footer = () => {
  return (
    <div className="bg-[#273044] py-[2rem]">
      <div className="w-[80%] px-2 sm:px-0 hx-auto mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] text-[#fff]">
        <div className="">
          <div className="text-[1.25rem] font-bold uppercase">About</div>
          <p>
            <span className="text-[#2966e4]"> Study4Free</span> is Education
            WordPress theme featured by Learning Management System (LMS) for
            online education. Developed by{' '}
            <span className="text-[#2966e4]">
              LongDT29,MinhDV9,LuanTV9,HuanNH6
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at
            egestas magna.
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.25rem] font-bold uppercase">
            Popular examinations
          </div>
          <div className="flex items-center gap-[2rem]">
            <img className="w-[3rem] h-[3rem]" alt="" src={Cambridge} />
            Cambridge 15
          </div>
          <div className="flex items-center gap-[2rem]">
            <img className="w-[3rem] h-[3rem]" alt="" src={Cambridge} />
            Cambridge 15
          </div>
          <div className="flex items-center gap-[2rem]">
            <img className="w-[3rem] h-[3rem]" alt="" src={Cambridge} />
            Cambridge 15
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-[1.25rem] font-bold uppercase ">Pages</div>
          <Link
            to="/#slide-introduction"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Introduction
          </Link>
          <Link
            to="/#ielts-levels"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            English level
          </Link>

          <Link
            to="/#team-achievements"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Our achievement
          </Link>
          <Link
            to="/#our-teams"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            About us
          </Link>
          <Link
            to="/#payment"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Become VIP member
          </Link>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.25rem] font-bold uppercase">Contacts</div>
          <p>FPT Duy Tan Software, Ha Noi, Viet Nam</p>
          <p>Tel:0973818134</p>
          <p>Fax: +1 234 567 890</p>
          <p>study4free@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
