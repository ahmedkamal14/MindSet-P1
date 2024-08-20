import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="xl:px-28 px-4 bg-paige pt-8">
      <div className="flex flex-col md:flex-row container pb-3 max-w-screen-2xl m-auto items-center">
        <div className="text w-full md:w-1/2 flex flex-col gap-[30px] md:pe-10 text-center md:text-left">
          <h2 className="text-greenC font-bold text-[16px]">Welcome</h2>
          <h1 className="text-blackC text-[36px] md:text-[48px] lg:text-[58px] font-bold tracking-wider">
            Best Learning Opportunities
          </h1>
          <p className="text-light text-[18px] md:text-[20px]">
            Our goal is to make online education work for everyone
          </p>
          <div className="flex flex-col md:flex-row gap-[10px] items-center justify-center md:justify-start">
            <Link className="bg-greenC w-full md:w-auto text-center px-[30px] md:px-[40px] py-[12px] md:py-[15px] text-[14px] text-white font-bold rounded-[5px] hover:bg-transparent hover:border-greenC hover:border hover:text-greenC transition-all duration-300">
              Join Us
            </Link>
            <Link className="border w-full md:w-auto text-center border-greenC px-[30px] md:px-[40px] py-[12px] md:py-[15px] text-greenC font-bold rounded-[5px] hover:bg-greenC hover:text-white transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
        <div className="img w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src="./landing.png"
            alt="Landing"
            className="w-full h-auto max-w-[80%] md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
