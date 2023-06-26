import { NavLink } from 'react-router-dom';

function NotVipPlayer() {
  return (
    <section className="flex flex-col h-screen w-full relative py-[3rem]">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="text-center">
          <div
            className="min-h-[400px] bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
            }}
          >
            <h2 className="text-[2rem] text-sky-600">
              Payment for available this feature
            </h2>
          </div>
          <div className="">
            <h2 className="text-6xl mb-5 text-[red]">
              Look like you'r not a VIP member
            </h2>
            <p>The function you are looking for not avaible!</p>
            <NavLink
              to="/users/payment"
              className="btn text-white bg-sky-500 border-none  py-3 px-5 my-5 hover:text-black"
            >
              Go to Payment to unlock
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotVipPlayer;
