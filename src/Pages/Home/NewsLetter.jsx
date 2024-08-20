const NewsLetter = () => {
  return (
    <div className="xl:px-28 px-4 bg-paige py-16 md:py-24 lg:py-32">
      <div className="flex flex-col container max-w-screen-2xl m-auto items-center justify-center text-center">
        <div className="text flex flex-col gap-6 md:gap-8">
          <h4 className="text-greenC font-bold text-[12px] md:text-[14px]">
            Newsletter
          </h4>
          <h2 className="text-blackC text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-wider">
            Watch our Courses
          </h2>
          <p className="text-light text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[20px] lg:leading-[24px] font-normal">
            Problems trying to resolve the conflict between{" "}
            <br className="hidden md:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="form mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full md:w-[688px] h-[48px] md:h-[58px] p-4 bg-[#F9F9F9] rounded-[5px] mb-4 md:mb-0 md:me-3 focus:outline-greenC border-[1px] border-[#E6E6E6]"
          />
          <button className="w-full md:w-auto px-5 py-3 bg-greenC text-white text-lg rounded-[5px]">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewsLetter;
