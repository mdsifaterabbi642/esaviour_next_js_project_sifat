import Link from "next/link";

const AboutSection_3 = () => {
  return (
    <>
      <div className="xl:w-[70vw] mx-auto">
        <h1
          className="text-center text-[34px] py-[30px] xl:text-[72px]"
          style={{
            fontFamily: "Futura PT, sans-serif",
          }}
        >
          Our Story
        </h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="basis-1/1 xl:basis-2/3 bg-[#eaf6ff] order-0 pb-[150px] xl:pb-[0px]">
            <h1 className="text-[#40b0fd] text-[20px] font-bold pl-[10px] pt-[10px] sm:text-[22px] sm:pt-[20px] sm:px-[30px] xl:text-[34px] xl:font-semibold xl:pl-[30px] xl:pr-[100px] xl:pt-[30px]">
              The Prime Example Of A Modern Digital Marketing Agency
            </h1>
            <p
              className="text-[16px] pl-[10px] pr-[5px] pt-[10px] sm:px-[30px] xl:text-[16px] xl:pl-[30px] xl:pr-[30px] xl:py-[20px]"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              eSaviour Limited has started its humble journey as a
              fully-developed Amazon FBA and Digital Marketing agency in the
              year 2023, although the company has been active for over 3 years
              now with around 30 clients in the bag.<br></br>
              <br></br>The world of digital marketing is opening up to newer
              possibilities everyday and at eSaviour, we are only getting
              started with a pioneering take on the industry where we promote a
              client-centric approach coupled with innovation and expertise to
              produce the most viable solution for all of you.<br></br>
              <br></br>Being a multinational corporation, we have partnered up
              with several supercharged brands around the world since our
              inception. We have accumulated a number of accolades under our
              belt in a relatively shorter span of time and our case studies
              speak for them.
            </p>
          </div>
          <div className="basis-1/1 pb-[40px] xl:basis-1/3 bg-[#2f9de8] text-center xl:pt-[50px] order-1 w-[95vw] mx-auto relative top-[-100px] left-0 xl:top-[0px] xl:left-[0px]">
            <p
              className="text-[20px] px-[5px] py-[10px] mb-[15px] xl:mb-[30px] text-center xl:text-[25px] text-[#ffffff] xl:px-[30px] xl:pt-[20px]"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              If you are a dreamer yourself and want to take your business to an
              unprecedented height, make your offer today and let’s build on
              your dreams together.
            </p>

            <Link
              href="#"
              className="text-white bg-[#263238] text-sm px-[15px] py-[5px] xl:inline-block xl:font-bold xl:rounded-lg"
            >
              Get a proposal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_3;
