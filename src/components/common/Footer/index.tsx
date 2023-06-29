import { useLocation } from 'react-router-dom';
import Cambridge from '../../../assets/images/Cambridge';

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  const pagesArr = [
    {
      href: '#slide-introduction',
      title: 'Introduction'
    },
    {
      href: '#ielts-levels',
      title: 'English level'
    },
    {
      href: '#team-achievements',
      title: 'Our achievement'
    },
    {
      href: '#our-teams',
      title: 'About us'
    },
    {
      href: '#payment',
      title: 'Become VIP member'
    },

  ]
  return (
    <div className="bg-[#273044] py-[2rem]">
      <div className="w-[80%] px-2 sm:px-0 hx-auto mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] text-[#fff]">
        <div className="">
          <div className="text-[1.25rem] font-bold uppercase mb-3">About</div>
          <p className='mb-2'>
            <a href='/' className="text-sky-500 hover:text-sky-600"> Study4Free</a> is Education
            WordPress theme featured by Learning Management System (LMS) for
            online education.
          </p>
          <p className='mb-2'>
            Developed by: <br />
            <span className="text-sky-500">
              LongDT29, MinhDV9, LuanTV9, HuanNH6
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
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-[2rem]">
              <img className="w-[3rem] h-[3rem]" alt="" src={Cambridge} />
              Cambridge 15
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-[1.25rem] font-bold uppercase ">Pages</div>
          {pagesArr.map(({ href, title }, index) => (
            <a
              key={index}
              href={href}
              className={`border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643] ${pathname !== "/" && "pointer-events-none"}`}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.25rem] font-bold uppercase">Contacts</div>
          <p>FPT Duy Tan Software, Ha Noi, Viet Nam</p>
          <p>Tel:0973818134</p>
          <p>Fax: +1 234 567 890</p>
          <p>study4free@gmail.com</p>
        </div>
      </div>
    </div >
  );
};

export default Footer;
