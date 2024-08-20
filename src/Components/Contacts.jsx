import { Link } from "react-router-dom";
import { TiPhoneOutline } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Contacts = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex flex-col md:flex-row container py-12 max-w-screen-2xl m-auto gap-4 justify-center items-center text-center md:text-start">
        {/* Company Info */}
        <div className="flex flex-col gap-6 w-full md:w-1/5">
          <h3 className="text-lg font-bold">Company Info</h3>
          <ul className="flex flex-col gap-4 text-light text-sm font-bold">
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/carrier">
              <li>Carrier</li>
            </Link>
            <Link to="/hiring">
              <li>We are hiring</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-6 w-full md:w-1/5">
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="flex flex-col gap-4 text-light text-sm font-bold">
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/carrier">
              <li>Carrier</li>
            </Link>
            <Link to="/hiring">
              <li>We are hiring</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-6 w-full md:w-1/5">
          <h3 className="text-lg font-bold">Features</h3>
          <ul className="flex flex-col gap-4 text-light text-sm font-bold">
            <Link to="/marketing">
              <li>Business Marketing</li>
            </Link>
            <Link to="/analytics">
              <li>User Analytic</li>
            </Link>
            <Link to="/chat">
              <li>Live Chat</li>
            </Link>
            <Link to="/support">
              <li>Unlimited Support</li>
            </Link>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-6 w-full md:w-1/5">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="flex flex-col gap-4 text-light text-sm font-bold">
            <Link to="/ios-android">
              <li>IOS & Android</li>
            </Link>
            <Link to="/demo">
              <li>Watch a Demo</li>
            </Link>
            <Link to="/customers">
              <li>Customers</li>
            </Link>
            <Link to="/api">
              <li>API</li>
            </Link>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col gap-6 w-[80%] md:w-1/5">
          <h3 className="text-lg font-bold">Get In Touch</h3>
          <ul className="flex flex-col gap-4 text-light text-sm font-bold">
            <Link to="/contact">
              <li className="flex items-center gap-3">
                <TiPhoneOutline className="text-2xl text-greenC" />
                (480) 555-0103
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-2xl text-greenC" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex items-center gap-3">
                <IoMail className="text-2xl text-greenC" />
                debra.holt@example.com
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
