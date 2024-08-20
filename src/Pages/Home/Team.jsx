import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 xl:px-28 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        <div className="text flex flex-col gap-5 text-center md:text-left">
          <h4 className="text-greenC font-bold text-[14px] md:text-[16px]">
            Team
          </h4>
          <h2 className="text-blackC text-[24px] md:text-[30px] font-bold tracking-wider">
            Get Quality Education
          </h2>
          <p className="text-light text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px]">
            Problems trying to resolve the conflict between{" "}
            <br className="hidden md:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="members mt-16 md:mt-28 flex flex-col md:flex-row justify-center gap-10 md:gap-[30px] items-center">
          <div className="single flex flex-col items-center justify-center gap-6 text-center rounded-3xl shadow-lg w-full md:w-[238px] pb-6">
            <img src="./m1.png" alt="Member" className="rounded-t-3xl w-full" />
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-4">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-6 text-center rounded-3xl shadow-lg w-full md:w-[238px] pb-6">
            <img src="./m2.png" alt="Member" className="rounded-t-3xl w-full" />
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-4">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-6 text-center rounded-3xl shadow-lg w-full md:w-[238px] pb-6">
            <img src="./m3.png" alt="Member" className="rounded-t-3xl w-full" />
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-4">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-6 text-center rounded-3xl shadow-lg w-full md:w-[238px] pb-6">
            <img src="./m4.png" alt="Member" className="rounded-t-3xl w-full" />
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-4">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
