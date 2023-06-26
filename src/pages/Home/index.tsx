import BgImage1 from '../../assets/images/becomepro.jpg';
import EarthImg from '../../assets/images/earthImg.png';
import { InstaIcon } from '../../assets/icons/instaIcon';
import { YoutubeIcon } from '../../assets/icons/youtubeIcon';
import { GoogleIcon } from '../../assets/icons/googleIcon';
import { FacebookIcon } from '../../assets/icons/facebookIcon';
import { CheckIcon } from '../../assets/icons/checkIcon';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import { achievementArr, ourTeams, paymentBoard, skillArr } from './data';

function HomePage() {
  const navigate = useNavigate();

  const userInfo: any = useMemo(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('user') as string);
    }
  }, []);
  console.log(userInfo);
  const handleNavigatePayment = () => {
    if (userInfo.name) {
      navigate('/users/payment');
      notify(
        NOTIFICATION_TYPE.INFO,
        'Please choose upgade account to purchased your package'
      );
    } else {
      navigate('/login');
      notify(NOTIFICATION_TYPE.INFO, 'Please login before you make payment');
    }
  };
  return (
    <>
      <section
        id="slide-introduction"
        style={{
          backgroundImage: `url(${BgImage1})`,
        }}
        className={` bg-cover bg-no-repeat	 w-full h-[40rem] flex`}
      >
        <div className="m-auto flex flex-col items-center justify-center text-center">
          <h2
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="text-[#EAB830] text-[3rem] uppercase font-bold
          "
          >
            Take the first step
          </h2>
          <p
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="text-[#fff] text-[5rem] uppercase font-semibold"
          >
            of your journey to success
          </p>
          <button
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="rounded-full border-4 bg-transparent text-[#fff] border-[#fff] px-[2rem] py-[.75rem] hover:bg-[#307ad5] hover:border-[#307ad5] hover:font-semibold"
          >
            Ready to get Started?
          </button>
        </div>
      </section>
      <section
        id="ielts-skills"
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-cover w-full py-[50px] shadow-2xl"
      >
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          className="home-title w-full text-center font-extrabold text-8xl "
        >
          <h1>Choose your favorite skill</h1>
        </div>
        <div className="grid md:grid-cols-4 py-[32px] grid-cols-2 gap-4">
          {skillArr.map((item, index) => {
            return (
              <div
                key={index}
                data-aos={item.animate}
                data-aos-offset="50"
                data-aos-duration="500"
                data-aos-delay="800"
                className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
              >
                {item.component}
                <div className="text-center text-[24px] font-bold text-orange-500">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="ielts-levels" className="py-[30px]">
        <div className="relative w-fit h-fit mx-auto pl-[100px]">
          <div className="absolute z-40 left-[-50px] top-[30px]">
            <div className="text-[48px] font-extrabold">
              <div data-aos="fade-right" data-aos-duration="600">
                Learn about
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                className="text-red-400"
              >
                our levels
              </div>
            </div>
            <div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="font-bold text-[18px]"
              >
                Don't know your English level
              </div>
              <div data-aos="fade-up" data-aos-duration="600">
                Each course is divided into specific learning
                <br />
                levels. We teach up to C1 in English and B2 in
                <br />
                Business English.
              </div>
            </div>
          </div>
          <div className="relative w-[540px] h-[540px] rounded-full bg-[#e4f2f2]">
            <div className="absolute train-run w-full h-full z-50 rounded-full md:block hidden">
              <img
                className="absolute w-[30px] h-[30px]"
                src={EarthImg}
                alt=""
              />
            </div>
            <div className="absolute rounded-full top-[20px] left-[50%] translate-x-[-50%] text-center py-[35px] w-[165px] bg-[#eebb76] border-[1px] border-[#000]">
              <div className="font-bold text-[24px]">A1</div>
              <div className="uppercase text-[14px] font-medium">
                absolute beginner
              </div>
              <div className="text-[12px]">
                Basic words
                <br />& phrases
              </div>
            </div>
            <div className="absolute rounded-full bottom-[90px] left-[70px] text-center w-[130px] py-[20px] bg-[#b6e0d9] border-[1px] border-[#000]">
              <div className="font-bold text-[24px]">A2</div>
              <div className="uppercase text-[14px] font-medium">beginner</div>
              <div className="text-[12px]">
                Simple
                <br />
                Interactions
              </div>
            </div>
            <div className="absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-[130px] py-[20px] bg-[#dc7672] border-[1px] border-[#000]">
              <div className="font-bold text-[24px]">B1</div>
              <div className="uppercase text-[14px] font-medium">
                intermediate
              </div>
              <div className="text-[12px]">
                Everyday
                <br />
                conversation
              </div>
            </div>
            <div className="absolute rounded-full bottom-[20px] left-[60%] translate-x-[-60%] text-center w-[160px] bg-[#eebb76] border-[1px] border-[#000] py-[40px]">
              <div className="font-bold text-[24px]">B2</div>
              <div className="uppercase text-[14px] font-medium">
                upper-intermediate
              </div>
              <div className="text-[12px]">Complex topics</div>
            </div>
            <div className="absolute right-[50px] rounded-full top-[40%] translate-y-[-40%] text-center w-[130px] py-[20px] bg-[#b6e0d9] border-[1px] border-[#000]">
              <div className="font-bold text-[24px]">C1</div>
              <div className="uppercase text-[14px] font-medium">advanced</div>
              <div className="text-[12px]">
                Proficient
                <br />
                language use
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="team-achievements"
        className={`bg-[url('https://masterstudy.stylemixthemes.com/classic-lms-elementor/wp-content/uploads/sites/29/2018/09/achivements.jpg')] bg-cover bg-no-repeat	 w-full min-h-[40rem] h-fit flex text-[#fff] flex flex-col justify-center items-center py-[2rem]`}
      >
        <div
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="800"
          className="text-[2rem] font-bold mb-[1rem]"
        >
          OUR TEAMS ACHIEVEMENTS
        </div>

        <div
          data-aos="zoom-out"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="800"
          className="my-[rem]"
        >
          Here you can review some statistics about our Education Center
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem] py-[2rem]">
          {achievementArr.map((item, index) => {
            return (
              <div
                key={index}
                data-aos={item.animate}
                data-aos-offset="50"
                data-aos-duration="500"
                data-aos-delay="800"
                className="flex flex-col justify-center items-center"
              >
                {item.icon}
                <span className="text-[#eab830] text-[3rem] font-semibold ">
                  {item.quantity}
                </span>
                <p className="uppercase font-medium">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="our-teams" className="p-[2rem]">
        <h2
          data-aos="zoom-out"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="800"
          className="text-[3rem] font-bold uppercase text-center w-fit mx-auto"
        >
          Our team
        </h2>
        <div className="grid lg:grid-cols-4 py-[32px] md:grid-cols-2 grid-cols-1 gap-4 w-[80%] mx-auto">
          {ourTeams.map((items, index) => {
            return (
              <div
                key={index}
                data-aos={items.animate}
                data-aos-offset="50"
                data-aos-duration="500"
                data-aos-delay="800"
                className="flex flex-col text-center  py-[2rem] px-[2rem] hover:shadow-2xl transition-all rounded"
              >
                <img
                  className="rounded-full w-[14rem] aspect-square mx-auto"
                  src={items.avatar}
                  alt=""
                />
                <div className="text-[1.5rem] font-semibold">
                  Hi, I am {items.name}
                </div>
                <div className="text-[#ccc] font-bold">{items.role}</div>

                <div className="flex gap-[0.5rem] justify-center my-[1rem]">
                  <FacebookIcon width="16px" height="16px" fill="#2596be" />
                  <InstaIcon width="16px" height="16px" fill="#2596be" />
                  <YoutubeIcon width="16px" height="16px" fill="#2596be" />
                  <GoogleIcon width="16px" height="16px" fill="#2596be" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        id="payment"
        className="bg-[#f3f6fb] flex flex-col justify-center items-center py-[3rem]"
      >
        <h3
          data-aos="flip-left"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="800"
          className="text-[3rem] font-bold uppercase"
        >
          Ready to be our teams ?
        </h3>
        <p
          data-aos="flip-right"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="800"
          className="text-[#888b9c] text-[1.5rem] py-[2rem]"
        >
          Choose your suitable price
        </p>
        <div className="grid md:grid-cols-3 gap-[1rem] w-[80%]">
          {paymentBoard.map((item, index) => {
            return (
              <div
                data-aos={item.animate}
                data-aos-offset="50"
                data-aos-duration="500"
                data-aos-delay="800"
                key={index}
                className={` px-[2rem] py-[2rem] rounded-2xl ${
                  index == 2 ? 'bg-[#183d83] text-[#fff]' : 'bg-[#fff]'
                }`}
              >
                <div className="text-[2rem] font-bold">{item.package}</div>
                <div className="text-[#b7b7b8]">{item.subtitle}</div>
                <div className="flex items-center py-[1rem] gap-[0.5rem]">
                  <div className="text-[3rem] text-[#c4cedb]">$</div>
                  <div className="text-[3rem] ">{item.price}</div>
                  <div>per {item.period}</div>
                </div>
                <button
                  onClick={handleNavigatePayment}
                  className="bg-[#3aa5f5] text-white w-[100%] py-[0.75rem] rounded-lg font-bold"
                >
                  Get started
                </button>
                <div className="my-[1.5rem] font-bold">Benifits include :</div>
                {item.benifits.map((benefit, index) => {
                  return (
                    <div key={index} className="flex gap-[1rem] items-center">
                      <span className="">
                        <CheckIcon
                          width={'16px'}
                          height={'16px'}
                          fill={'#45aaf2'}
                        />
                      </span>
                      <p>{benefit}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
      <section id="subcribe-email " className="bg-[#2c75e4] ">
        <div className="w-[80%] m-auto flex flex-col md:flex-row gap-[3rem] text-[#fff] py-[3.5rem] px-[1rem]">
          <div className="flex flex-col flex-1">
            <h4 className="pb-[1.25rem] text-[1.25rem]">
              Subscribe our newsletter
            </h4>
            <h5 className="pb-[1rem]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </h5>
          </div>
          <div className="flex-1">
            <div className="mb-[1rem] text-[1.25rem]">YOUR E-MAIL ADDRESS</div>
            <div className="flex flex-col md:flex-row gap-y-[1rem]">
              <input
                className=" py-[0.75rem] px-[0.5rem] md:flex-1"
                type="text"
                placeholder="Enter your E-mail"
              />
              <button className="bg-[#273044] py-[0.75rem] px-[0.5rem] md:flex-2">
                SUBSCRIBES
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
