import { Link } from "react-router-dom";

const LiveAction = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex container pb-24 max-w-screen-2xl m-auto items-center justify-between">
        <div className="img">
          <img src="./live.png" alt="Live" />
        </div>

        <div className="text w-1/3">
          <span className="block w-24 h-1.5 bg-red-600 mb-8"></span>
          <h1 className="text-blackC text-4xl font-bold tracking-wider mb-10">
            Video in Live Action
          </h1>
          <p className="text-lg text-black/60 mb-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Link className="text-greenC text-lg relative after:content-['\2192'] after:ml-2 hover:text-green-700 transition-all duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveAction;
