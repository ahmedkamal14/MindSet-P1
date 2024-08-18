import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="xl:px-28 px-4 bg-paige py-2">
      <nav className="flex gap-32 justify-around items-center container md:py-4 pt-6 pb-3 max-w-screen-2xl m-auto">
        {/* Logo */}
        <a href="/MindSet-P1/">
          <h1 className="text-2xl font-bold text-blackC">Brandname</h1>
        </a>

        {/* Navigation */}
        <ul className="flex gap-10 font-semibold text-black/60 me-72">
          <a href="">
            <li className="hover:text-black transition-all duration-300">
              Home
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300">
              Product
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300">
              Pricing
            </li>
          </a>
          <a href="">
            <li className="hover:text-black transition-all duration-300">
              Contact
            </li>
          </a>
        </ul>

        {/* Accounts */}
        <div className="flex items-center gap-10 font-semibold">
          <Link className="text-greenC text-lg hover:text-green-700 transition-all duration-300">
            Login
          </Link>
          <Link className="bg-greenC text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
            <button>Join Us</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
