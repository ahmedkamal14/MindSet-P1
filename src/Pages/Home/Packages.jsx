import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";

const Packages = () => {
  return (
    <div className="xl:px-28 px-4 py-8 bg-mint">
      <div className="flex flex-col md:flex-row container py-24 max-w-screen-2xl m-auto items-center justify-between gap-10 md:gap-0">
        {/* Text Section */}
        <div className="text w-full md:w-1/3 flex flex-col gap-[35px] text-center md:text-left">
          <span className="block w-[94px] h-[7px] bg-redC mx-auto md:mx-0"></span>
          <h1 className="text-blackC text-[30px] md:text-[40px] font-bold tracking-wider">
            Affordable Packages
          </h1>
          <p className="text-[14px] text-light font-normal">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <Link className="text-greenC text-[14px] font-bold relative after:content-['\2192'] after:ml-2 hover:text-green-700 transition-all duration-300">
            Learn More
          </Link>
        </div>

        {/* Packages Section */}
        <div className="packages flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="package bg-white flex flex-col gap-[14px] shadow-lg px-8 py-10 w-80 md:w-60 text-center md:text-left">
            <div className="icon mx-auto md:mx-0">
              <FaChalkboardTeacher className="bg-greenC text-white text-6xl md:text-7xl p-3 rounded-xl" />
            </div>
            <h2 className="font-bold text-blackC text-[16px]">
              Certified Teacher
            </h2>
            <span className="block w-[50px] h-[2px] bg-redC mb-2 mx-auto md:mx-0"></span>
            <p className="text-light text-[14px] font-normal">
              The gradual accumulation of information about
            </p>
          </div>

          <div className="package bg-white flex flex-col gap-[14px] shadow-lg px-8 py-10 w-80 md:w-60 text-center md:text-left">
            <div className="icon mx-auto md:mx-0">
              <IoTelescope className="bg-greenC text-white text-6xl md:text-7xl p-3 rounded-xl" />
            </div>
            <h2 className="font-bold text-blackC text-[16px]">
              Expert Instruction
            </h2>
            <span className="block w-[50px] h-[2px] bg-redC mb-2 mx-auto md:mx-0"></span>
            <p className="text-light text-[14px] font-normal">
              The gradual accumulation of information about
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
