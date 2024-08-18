import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
const PackagesNew = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        <div className="text flex flex-col gap-5">
          <h4 className="text-greenC font-semibold">Practice Advice</h4>
          <h2 className="text-blackC text-4xl font-bold tracking-wider">
            Approdable Packages
          </h2>
          <p className="text-black/60 ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="packages mt-28 flex justify-between items-center">
          <div className="package flex items-center gap-8">
            <div className="img bg-[url('./p1.png')] w-[209px] h-[402px] rounded-lg relative">
              <span className="px-3 py-1 bg-red-600 text-white rounded-md absolute top-5 left-5">
                Sale
              </span>
              <div className="actions flex justify-center items-center absolute bottom-8 left-6 gap-3">
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <CiHeart />
                </button>
                <button className="  bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <BsCart2 />
                </button>
                <button className="  bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="disc flex flex-col justify-center pe-8 gap-5">
              <span className="text-lg text-greenC font-semibold">
                2,769 online courses{" "}
              </span>
              <h3 className="text-xl font-bold text-blackC">
                Watch our Courses
              </h3>
              <p className="text-lg text-black/60">
                We focus on ergonomics and <br />
                meeting you where you work. {"It's"} only a keystroke away.
              </p>
              <div className="downloads flex gap-2 items-center text-lg text-black/60">
                <GoDownload />
                <p className="text-gray-700">15 Sales</p>
              </div>
              <div className="prices flex gap-2 text-lg font-semibold">
                <span className="old text-gray-600">$16.48</span>
                <span className="new text-orange-500">$6.48</span>
              </div>

              <button className="border border-greenC py-3 rounded-3xl mt-5 text-greenC font-semibold after:content-['\2192'] after:ml-2 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="package flex items-center gap-8">
            <div className="img bg-[url('./p2.png')] w-[209px] h-[402px] rounded-lg relative">
              <span className="px-3 py-1 bg-red-600 text-white rounded-md absolute top-5 left-5">
                Sale
              </span>
              <div className="actions flex justify-center items-center absolute bottom-8 left-6 gap-3">
                <button className=" bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <CiHeart />
                </button>
                <button className="  bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <BsCart2 />
                </button>
                <button className="  bg-white text-black text-3xl rounded-full p-2 hover:scale-110 transition-all duration-300">
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="disc flex flex-col justify-center pe-8 gap-5">
              <span className="text-lg text-greenC font-semibold">
                Lifetime access{" "}
              </span>
              <h3 className="text-xl font-bold text-blackC">
                Our Experts Teacher
              </h3>
              <p className="text-lg text-black/60">
                We focus on ergonomics and <br />
                meeting you where you work. {"It's"} only a keystroke away.
              </p>
              <div className="downloads flex gap-2 items-center text-lg text-black/60">
                <GoDownload />
                <p className="text-gray-700">15 Sales</p>
              </div>
              <div className="prices flex gap-2 text-lg font-semibold">
                <span className="old text-gray-600">$16.48</span>
                <span className="new text-orange-500">$6.48</span>
              </div>

              <button className="border border-greenC py-3 rounded-3xl mt-5 text-greenC font-semibold after:content-['\2192'] after:ml-2 hover:scale-105 transition-all duration-300">
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
