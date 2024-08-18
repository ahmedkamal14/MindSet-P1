import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="xl:px-28 px-4 bg-paige pt-8">
      <div className="flex container pb-3 max-w-screen-2xl m-auto items-center">
        <div className="text w-1/2 flex flex-col gap-12 pe-10">
          <h2 className="text-greenC font-semibold">Welcome</h2>
          <h1 className="text-blackC text-6xl font-semibold tracking-wider">
            Best Learning Opportunities
          </h1>
          <p className="text-black/70 text-2xl">
            Our goal is to make online education work for everyone
          </p>
          <div className="flex gap-5 items-center">
            <Link className="bg-greenC px-7 py-3 text-white font-semibold rounded-lg hover:bg-transparent hover:border-greenC hover:border hover:text-greenC transition-all duration-300">
              <button>Join Us</button>
            </Link>
            <Link className="border border-greenC px-7 py-3 text-greenC font-semibold rounded-lg hover:bg-greenC hover:text-white transition-all duration-300">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <div className="img">
          <img src="./landing.png" alt="Landing Image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
