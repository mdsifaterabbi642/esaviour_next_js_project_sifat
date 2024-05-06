const PortfolioHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[50px]">
        <div className="basis-1/1 md:basis-1/3 md:mx-[100px] lg:mt-[50px] xl:basis-2/3 order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left font-bold pt-[20px] lg:text-[30px] xl:pl-[20%] xl:text-[34px] xl:leading-[50px] md:pt-[50px]">
            A Glimpse into our Creative Universe
          </h1>
          <h1 className="text-left font-bold  lg:text-[28px] xl:pl-[20%] xl:text-[32px] xl:leading-[50px]">
            Your Digital Business Development Partner!
          </h1>
          <p
            className="text-sm md:text-[14px] mt-[20px] xl:mt-[30px] mb-[10px] xl:pl-[20%] xl:text-[18px] xl:pr-[30px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Explore eSaviour Limited’s portfolio, where digital innovation meets
            exceptional results. From e-commerce mastery to dynamic business
            development solutions, we’re your strategic partner in achieving
            unparalleled success in the digital landscape. Discover how we can
            elevate your brand today.
          </p>
        </div>
        <div className="basis-1/1 md:basis-1/3 xl:basis-1/3 flex justify-center items-center order-0 md:order-1 pt-[20px] md:mr-[50px] lg:mr-[150px] lg:mt-[50px] xl:text-center xl:pt-[10px] xl:mr-[200px]">
          {/* <img src="../Speech_Bubble.png" alt="GSpeech_Bubble"></img> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
