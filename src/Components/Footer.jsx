import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="xl:px-28 py-2 bg-[#FAFAFA]">
      <div className="flex container py-4 max-w-screen-2xl m-auto gap-4 justify-between items-center">
        <p className="text-black/80 font-bold">Made With Love By Figmaland All Right Reserved</p>
        <div className="socials flex gap-4 items-center justify-center">
          <FaFacebook className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
          <FaInstagram className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
          <FaTwitter className="text-greenC text-2xl hover:scale-125 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
