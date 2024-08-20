import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const PackagesNew = () => {
  return (
    <div className="xl:px-28 px-4 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        {/* Text Section */}
        <div className="text flex flex-col gap-[10px] text-center md:text-left">
          <h4 className="text-greenC font-bold text-[14px]">Practice Advice</h4>
          <h2 className="text-blackC text-[32px] md:text-[40px] font-bold tracking-wider">
            Affordable Packages
          </h2>
          <p className="text-light text-[14px] leading-[20px] ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Packages Section */}
        <div className="packages mt-16 md:mt-28 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">
          <div className="package flex flex-col lg:flex-row items-center gap-8">
            <div className="img bg-[url('/MindSet-P1/p1.png')] w-[209px] h-[402px] rounded-lg relative">
              <span className="px-3 py-1 bg-redC text-white rounded-[3px] absolute top-5 left-5">
                Sale
              </span>
              <div className="actions flex justify-center items-center absolute bottom-8 left-6 gap-[10px]">
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <CiHeart />
                </button>
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <BsCart2 />
                </button>
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="disc flex flex-col justify-center text-center w-72 md:w-auto lg:text-left pe-8 gap-[10px]">
              <span className="text-[14px] text-greenC font-bold">
                2,769 online courses
              </span>
              <h3 className="text-[16px] font-bold text-blackC">
                Watch our Courses
              </h3>
              <p className="text-[14px] text-light font-normal">
                We focus on ergonomics and <br />
                meeting you where you work. {`It's`} only a keystroke away.
              </p>
              <div className="downloads flex justify-center lg:justify-start gap-2 items-center text-[14px] text-light">
                <GoDownload />
                <p>15 Sales</p>
              </div>
              <div className="prices flex justify-center lg:justify-start gap-2 text-lg font-semibold">
                <span className="old text-[#BDBDBD]">$16.48</span>
                <span className="new text-[#FFAB71]">$6.48</span>
              </div>

              <button className="border border-greenC w-auto py-[10px] px-[20px] rounded-[37px] mt-5 text-greenC font-semibold after:content-['\2192'] after:ml-2 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="package flex flex-col lg:flex-row items-center gap-8">
            <div className="img bg-[url('/MindSet-P1/p2.png')] w-[209px] h-[402px] rounded-lg relative">
              <span className="px-3 py-1 bg-redC text-white rounded-[3px] absolute top-5 left-5">
                Sale
              </span>
              <div className="actions flex justify-center items-center absolute bottom-8 left-6 gap-[10px]">
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <CiHeart />
                </button>
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <BsCart2 />
                </button>
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="disc flex flex-col justify-center text-center w-72 md:w-auto  lg:text-left pe-8 gap-[10px]">
              <span className="text-[14px] text-greenC font-bold">
                Lifetime access
              </span>
              <h3 className="text-[16px] font-bold text-blackC">
                Our Expert Teachers
              </h3>
              <p className="text-[14px] text-light font-normal">
                We focus on ergonomics and <br />
                meeting you where you work. {`It's`} only a keystroke away.
              </p>
              <div className="downloads flex justify-center lg:justify-start gap-2 items-center text-[14px] text-light">
                <GoDownload />
                <p>15 Sales</p>
              </div>
              <div className="prices flex justify-center lg:justify-start gap-2 text-lg font-semibold">
                <span className="old text-[#BDBDBD]">$16.48</span>
                <span className="new text-[#FFAB71]">$6.48</span>
              </div>

              <button className="border border-greenC w-auto py-[10px] px-[20px] rounded-[37px] mt-5 text-greenC font-semibold after:content-['\2192'] after:ml-2 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesNew;
