import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";

const Packages = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex container py-24 max-w-screen-2xl m-auto items-center justify-between">
        <div className="text w-1/3">
          <span className="block w-24 h-1.5 bg-red-600 mb-8"></span>
          <h1 className="text-blackC text-4xl font-bold tracking-wider mb-10">
            Approdable Packages
          </h1>
          <p className="text-lg text-black/60 mb-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <Link className="text-greenC text-lg relative after:content-['\2192'] after:ml-2 hover:text-green-700 transition-all duration-300">
            Learn More
          </Link>
        </div>

        <div className="packages flex gap-10">
          <div className="package bg-white flex flex-col gap-5 shadow-lg px-12 py-10 w-64">
            <div className="icon">
              <FaChalkboardTeacher className="bg-greenC text-white text-7xl p-3 rounded-xl" />
            </div>
            <h2 className="font-semibold text-blackC">Certified Teacher</h2>
            <span className="block w-16 h-0.5 bg-red-600 mb-2"></span>
            <p className="text-black/70">
              The gradual accumulation of information about
            </p>
          </div>
          <div className="package bg-white flex flex-col gap-5 shadow-lg px-12 py-10 w-64">
            <div className="icon">
              <IoTelescope className="bg-greenC text-white text-7xl p-3 rounded-xl" />
            </div>
            <h2 className="font-semibold text-blackC">Expert Instruction</h2>
            <span className="block w-16 h-0.5 bg-red-600 mb-2"></span>
            <p className="text-black/70">
              The gradual accumulation of information about
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
