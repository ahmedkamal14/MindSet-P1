import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        <div className="text flex flex-col gap-5">
          <h4 className="text-greenC font-semibold">Team</h4>
          <h2 className="text-blackC text-4xl font-bold tracking-wider">
            Get Quality Education
          </h2>
          <p className="text-black/60 ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="members mt-28 flex justify-evenly items-center">
          <div className="single flex flex-col items-center justify-center gap-8 text-center rounded-3xl shadow-lg w-[238px] pb-6">
            <img src="./m1.png" alt="Member" className="rounded-3xl"/>
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-6">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-8 text-center rounded-3xl shadow-lg w-[238px] pb-6">
            <img src="./m2.png" alt="Member" className="rounded-3xl"/>
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-6">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-8 text-center rounded-3xl shadow-lg w-[238px] pb-6">
            <img src="./m3.png" alt="Member" className="rounded-3xl"/>
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-6">Profession</h4>

            <div className="socials flex gap-4 items-center justify-center">
              <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className="single flex flex-col items-center justify-center gap-8 text-center rounded-3xl shadow-lg w-[238px] pb-6">
            <img src="./m4.png" alt="Member" className="rounded-3xl"/>
            <h2 className="text-xl font-bold">Julian Jameson</h2>
            <h4 className="text-black/60 -mt-6">Profession</h4>

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
