import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';

import BgImage1 from '../../assets/images/becomepro.jpg';
import { EarthIcon } from '../../assets/icons/earthIcon';
import { BellIcon } from '../../assets/icons/bellIcon';
import { MultiUsersIcon } from '../../assets/icons/multiUsersIcon';
import { BagIcon } from '../../assets/icons/bagIcon';
import { ListeningIcon } from '../../assets/icons/listeningLogo';
import { ReadingIcon } from '../../assets/icons/readingLogo';
import { WritingIcon } from '../../assets/icons/writingLogo';
import { SpeakingIcon } from '../../assets/icons/speakingLogi';

function HomePage() {
  return (
    <>
      <Header />
      <section
        id="slide-introduction"
        style={{
          backgroundImage: `url(${BgImage1})`,
        }}
        className={` bg-cover bg-no-repeat	 w-full h-[40rem] flex`}
      >
        <div className="m-auto flex flex-col items-center justify-center text-center">
          <h2
            className="text-[#EAB830] text-[3rem] uppercase font-bold
          "
          >
            Take the first step
          </h2>
          <p className="text-[#fff] text-[5rem] uppercase font-semibold">
            of your journey to success
          </p>
          <button className="rounded-full border-4 bg-transparent text-[#fff] border-[#fff] px-[2rem] py-[.75rem] hover:bg-[#307ad5] hover:border-[#307ad5] hover:font-semibold">
            Ready to get Started?
          </button>
        </div>
      </section>
      <section
        id="ielts-skills"
        className="bg-[yellow] bg-cover w-full py-[50px]"
      >
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          className="home-title w-full text-center font-extrabold text-8xl "
        >
          <h1>Choose your skill</h1>
        </div>
        <div className="grid md:grid-cols-4 py-[32px] grid-cols-2 gap-4">
          <div
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="300"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <ListeningIcon width={'6rem'} height={'6rem'} fill="" />
            <div className="text-center text-[24px] font-bold text-orange-500">
              Listening
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="500"
            data-aos-delay="500"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <ReadingIcon width={'6rem'} height={'6rem'} fill="" />
            <div className="text-center text-[24px] font-bold text-orange-500">
              Reading
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="500"
            data-aos-delay="700"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <WritingIcon width={'6rem'} height={'6rem'} fill="" />
            <div className="text-center text-[24px] font-bold text-orange-500">
              Writing
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="500"
            data-aos-delay="900"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <SpeakingIcon width={'6rem'} height={'6rem'} fill="" />
            <div className="text-center text-[24px] font-bold text-orange-500">
              Speaking
            </div>
          </div>
        </div>
      </section>
      <section id="ielts-levels" className="py-[30px]">
        <div className="relative w-fit h-fit mx-auto pl-[100px]">
          <div className="absolute z-100 left-[-50px] top-[30px]">
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
          <div className="relative w-[600px] h-[600px] rounded-full bg-[#e4f2f2]">
            <div className="absolute train-run w-full h-full z-50 rounded-full">
              <div className="absolute w-[30px] h-[30px] bg-[#eebb76]">
                <img src="/images/earth.jfif" alt="" />
              </div>
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
        <div className="text-[2rem] font-bold">OUR TEAMS ACHIEVEMENTS</div>
        <div>
          Here you can review some statistics about our Education Center
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem] py-[2rem]">
          <div className="flex flex-col justify-center items-center">
            <EarthIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              94532
            </span>
            <p className="uppercase font-medium">Foreign Follower</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BellIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              11223
            </span>
            <p className="uppercase font-medium">Examinations</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MultiUsersIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              415163
            </span>
            <p className="uppercase font-medium">Student enrolled</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BagIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              69
            </span>
            <p className="uppercase font-medium">Certified teachers</p>
          </div>
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
      <Footer />
    </>
  );
}

export default HomePage;
