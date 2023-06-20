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
import EarthImg from '../../assets/images/earthImg.png';
import { InstaIcon } from '../../assets/icons/instaIcon';
import { YoutubeIcon } from '../../assets/icons/youtubeIcon';
import { GoogleIcon } from '../../assets/icons/googleIcon';
import { FacebookIcon } from '../../assets/icons/facebookIcon';
function HomePage() {
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
          data-aos-delay="300"
          className="text-[2rem] font-bold mb-[1rem]"
        >
          OUR TEAMS ACHIEVEMENTS
        </div>
        <div
          data-aos="zoom-out"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-delay="300"
          className="my-[rem]"
        >
          Here you can review some statistics about our Education Center
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem] py-[2rem]">
          <div
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col justify-center items-center"
          >
            <EarthIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              94532
            </span>
            <p className="uppercase font-medium">Foreign Follower</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col justify-center items-center"
          >
            <BellIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              11223
            </span>
            <p className="uppercase font-medium">Examinations</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col justify-center items-center"
          >
            <MultiUsersIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              415163
            </span>
            <p className="uppercase font-medium">Student enrolled</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col justify-center items-center"
          >
            <BagIcon width={'4rem'} height="4rem" fill="#fff" />
            <span className="text-[#eab830] text-[3rem] font-semibold ">
              69
            </span>
            <p className="uppercase font-medium">Certified teachers</p>
          </div>
        </div>
      </section>
      <section id="our-teams" className="p-[2rem]">
        <h2 className="text-[3rem] font-bold uppercase text-center ">
          Our teams
        </h2>
        <div className="grid lg:grid-cols-4 py-[32px] md:grid-cols-2 grid-cols-1 gap-4 w-[80%] mx-auto">
          <div
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col text-center  py-[2rem] px-[2rem] hover:shadow-2xl transition-all rounded"
          >
            <img
              className="rounded-full w-[14rem] aspect-square mx-auto"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="text-[1.5rem] font-semibold">Hi, I am LongDT29</div>
            <div className="text-[#ccc] font-bold">Team leader</div>

            <div className="flex gap-[0.5rem] justify-center my-[1rem]">
              <FacebookIcon width="16px" height="16px" fill="#2596be" />
              <InstaIcon width="16px" height="16px" fill="#2596be" />
              <YoutubeIcon width="16px" height="16px" fill="#2596be" />
              <GoogleIcon width="16px" height="16px" fill="#2596be" />
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col text-center  py-[2rem] px-[2rem] hover:shadow-2xl transition-all rounded"
          >
            <img
              className="rounded-full w-[14rem] aspect-square mx-auto"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="text-[1.5rem] font-semibold">Hi, I am LuanTV9</div>
            <div className="text-[#ccc] font-bold">Team Member</div>

            <div className="flex gap-[0.5rem] justify-center my-[1rem]">
              <FacebookIcon width="16px" height="16px" fill="#2596be" />
              <InstaIcon width="16px" height="16px" fill="#2596be" />
              <YoutubeIcon width="16px" height="16px" fill="#2596be" />
              <GoogleIcon width="16px" height="16px" fill="#2596be" />
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col text-center  py-[2rem] px-[2rem] hover:shadow-2xl transition-all rounded"
          >
            <img
              className="rounded-full w-[14rem] aspect-square mx-auto"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="text-[1.5rem] font-semibold">Hi, I am HuanNH6</div>
            <div className="text-[#ccc] font-bold">Team Member</div>

            <div className="flex gap-[0.5rem] justify-center my-[1rem]">
              <FacebookIcon width="16px" height="16px" fill="#2596be" />
              <InstaIcon width="16px" height="16px" fill="#2596be" />
              <YoutubeIcon width="16px" height="16px" fill="#2596be" />
              <GoogleIcon width="16px" height="16px" fill="#2596be" />
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-delay="800"
            className="flex flex-col text-center  py-[2rem] px-[2rem] hover:shadow-2xl transition-all rounded"
          >
            <img
              className="rounded-full w-[14rem] aspect-square mx-auto"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="text-[1.5rem] font-semibold">Hi, I am MinhDV9</div>
            <div className="text-[#ccc] font-bold">Team Member</div>

            <div className="flex gap-[0.5rem] justify-center my-[1rem]">
              <FacebookIcon width="16px" height="16px" fill="#2596be" />
              <InstaIcon width="16px" height="16px" fill="#2596be" />
              <YoutubeIcon width="16px" height="16px" fill="#2596be" />
              <GoogleIcon width="16px" height="16px" fill="#2596be" />
            </div>
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
    </>
  );
}

export default HomePage;
