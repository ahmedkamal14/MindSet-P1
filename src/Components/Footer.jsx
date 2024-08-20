import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="xl:px-28 py-4 bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row container py-4 max-w-screen-2xl m-auto gap-4 justify-between items-center">
        {/* Footer Text */}
        <p className="text-light text-sm md:text-base font-bold text-center md:text-left">
          Made With Love By Figmaland All Rights Reserved
        </p>

        {/* Social Media Icons */}
        <div className="socials flex gap-4 items-center justify-center md:justify-end">
          <FaFacebook className="text-greenC text-xl md:text-2xl hover:scale-125 transition-all duration-300" />
          <FaInstagram className="text-greenC text-xl md:text-2xl hover:scale-125 transition-all duration-300" />
          <FaTwitter className="text-greenC text-xl md:text-2xl hover:scale-125 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
