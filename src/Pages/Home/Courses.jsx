const Courses = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 xl:px-28 py-8 bg-mint">
      <div className="flex flex-col container pb-24 max-w-screen-2xl m-auto">
        <div className="text flex flex-col gap-5 text-center md:text-left">
          <h4 className="text-greenC font-bold text-[14px] md:text-[16px]">
            Testimonials
          </h4>
          <h2 className="text-blackC text-[30px] md:text-[40px] font-bold leading-[35px] md:leading-[50px] tracking-wider">
            Watch our Courses
          </h2>
          <p className="text-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
            Problems trying to resolve the conflict between{" "}
            <br className="hidden md:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="courses mt-16 md:mt-28 flex flex-col md:flex-row justify-around items-center gap-10 md:gap-5">
          <div className="single flex flex-col items-center justify-center w-full md:w-[450px] gap-[15px] text-center">
            <img
              src="./u1.png"
              alt="User"
              className="w-24 md:w-36 lg:w-48 rounded-full hover:scale-110 transition-all duration-300"
            />
            <p className="text-light text-[14px] md:text-[16px] mt-8">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold">
              Regina Miles
            </h2>
            <h4 className="text-light text-[14px] md:text-[16px] font-bold">
              Designer
            </h4>
          </div>
          <div className="single flex flex-col items-center justify-center w-full md:w-[450px] gap-[15px] text-center">
            <img
              src="./u2.png"
              alt="User"
              className="w-24 md:w-36 lg:w-48 rounded-full hover:scale-110 transition-all duration-300"
            />
            <p className="text-light text-[14px] md:text-[16px] mt-8">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>

            <h2 className="text-[16px] md:text-[18px] font-bold">
              Regina Miles
            </h2>
            <h4 className="text-light text-[14px] md:text-[16px] font-bold">
              Designer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
