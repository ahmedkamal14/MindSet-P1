const NewsLetter = () => {
  return (
    <div className="xl:px-28 px-4 bg-paige py-32">
      <div className="flex flex-col container pb-3 max-w-screen-2xl m-auto items-center justify-center text-center">
        <div className="text flex flex-col gap-8">
          <h4 className="text-greenC font-semibold">Newsletter</h4>
          <h2 className="text-blackC text-4xl font-bold tracking-wider">
            Watch our Courses
          </h2>
          <p className="text-black/60 ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="form mt-16 w-[800px] flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-[80%] p-4 bg-mint rounded-md me-3 focus:outline-greenC"
          />
          <button className="px-5 py-3 bg-greenC text-white text-lg rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
