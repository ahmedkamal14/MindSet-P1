import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="xl:px-28 px-4 bg-paige py-2">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 max-w-screen-2xl m-auto">
        {/* Logo */}
        <a href="/MindSet-P1/">
          <h1 className="text-[24px] font-bold text-blackC">Brandname</h1>
        </a>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blackC focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:gap-[21px] font-bold text-light me-72 text-[14px] absolute md:static bg-paige md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto z-10 md:z-auto md:items-center p-4 md:p-0 transition-all duration-300`}
        >
          <a href="">
            <li className="hover:text-black transition-all duration-300 py-2 md:py-0">
              Home
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300 py-2 md:py-0">
              Product
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300 py-2 md:py-0">
              Pricing
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300 py-2 md:py-0">
              Contact
            </li>
          </a>
        </ul>

        {/* Accounts */}
        <div className="hidden md:flex items-center gap-10 font-bold">
          <Link
            to="/login"
            className="text-greenC text-[14px] hover:text-green-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-greenC text-white text-[14px] px-6 py-2 rounded-[5px] hover:bg-green-700 transition-all duration-300"
          >
            <button>Join Us</button>
          </Link>
        </div>
      </nav>

      {/* Mobile Accounts Section */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 font-bold p-4">
          <Link
            to="/login"
            className="text-greenC text-[14px] hover:text-green-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-greenC text-white text-[14px] px-6 py-2 rounded-[5px] hover:bg-green-700 transition-all duration-300"
          >
            <button>Join Us</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
