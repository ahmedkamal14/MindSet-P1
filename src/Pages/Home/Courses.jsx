const Courses = () => {
  return (
    <div className="xl:px-28 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        <div className="text flex flex-col gap-5">
          <h4 className="text-greenC font-semibold">Testimonials</h4>
          <h2 className="text-blackC text-4xl font-bold tracking-wider">
            Watch our Courses
          </h2>
          <p className="text-black/60 ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="courses mt-28 flex justify-around items-center">
          <div className="single flex flex-col items-center justify-center w-[450px] gap-8 text-center">
            <img
              src="./u1.png"
              alt="User"
              className="rounded-full hover:scale-110 transition-all duration-300"
            />
            <p className="text-black/60">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>

            <h2 className="text-xl font-bold">Regina Miles</h2>
            <h4 className="text-black/60 -mt-6">Designer</h4>
          </div>
          <div className="single flex flex-col items-center justify-center w-[450px] gap-8 text-center">
            <img
              src="./u2.png"
              alt="User"
              className="rounded-full hover:scale-110 transition-all duration-300"
            />
            <p className="text-black/60">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>

            <h2 className="text-xl font-bold">Regina Miles</h2>
            <h4 className="text-black/60 -mt-6">Designer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
