import { Link } from "react-router-dom";

const LiveAction = () => {
  return (
    <div className="xl:px-28 px-4 py-8 bg-mint">
      <div className="flex flex-col md:flex-row container pb-24 max-w-screen-2xl m-auto items-center justify-between gap-10 md:gap-0">
        {/* Image Section */}
        <div className="img w-full md:w-[520px] text-center md:text-left">
          <img
            src="./live.png"
            alt="Live"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text flex flex-col gap-[35px] w-full md:w-[381px] text-center md:text-left">
          <span className="block w-[94px] h-[7px] bg-redC mx-auto md:mx-0"></span>
          <h1 className="text-blackC text-[30px] md:text-[40px] font-bold tracking-wider leading-[40px] md:leading-[50px]">
            Video in Live Action
          </h1>
          <p className="text-[14px] text-light font-normal">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <Link className="text-greenC text-[14px] font-bold relative after:content-['\2192'] after:ml-2 hover:text-green-700 transition-all duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveAction;
