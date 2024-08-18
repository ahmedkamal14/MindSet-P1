import { Link } from "react-router-dom";
import { TiPhoneOutline } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Contacts = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex container py-12 max-w-screen-2xl m-auto gap-4 justify-around items-center">
        <div className="col flex flex-col gap-8">
          <h3 className="text-xl font-bold">Company Info</h3>
          <ul className="flex flex-col gap-3 text-black/60 font-semibold">
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Carrier</li>
            </Link>
            <Link>
              <li>We are hiring</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h3 className="text-xl font-bold">Legal</h3>
          <ul className="flex flex-col gap-3 text-black/60 font-semibold">
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Carrier</li>
            </Link>
            <Link>
              <li>We are hiring</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h3 className="text-xl font-bold">Features</h3>
          <ul className="flex flex-col gap-3 text-black/60 font-semibold">
            <Link>
              <li>Business Marketing</li>
            </Link>
            <Link>
              <li>User Analytic</li>
            </Link>
            <Link>
              <li>Live Chat</li>
            </Link>
            <Link>
              <li>Unlimited Support</li>
            </Link>
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h3 className="text-xl font-bold">Resources</h3>
          <ul className="flex flex-col gap-3 text-black/60 font-semibold">
            <Link>
              <li>IOS & Android</li>
            </Link>
            <Link>
              <li>Watch a Demo</li>
            </Link>
            <Link>
              <li>Customers</li>
            </Link>
            <Link>
              <li>API</li>
            </Link>
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h3 className="text-xl font-bold">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-black/60 font-semibold">
            <Link>
              <li className="flex items-center gap-3">
                <TiPhoneOutline className="text-3xl text-greenC" />
                (480) 555-0103
              </li>
            </Link>
            <Link>
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-3xl text-greenC" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
            </Link>
            <Link>
              <li className="flex items-center gap-3">
                <IoMail className="text-3xl text-greenC" />
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
