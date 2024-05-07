import Image from "next/image";

const HomeIntro = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap xl:w-[90vw] overflow-x-hidden">
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center">
          <div className="w-[300px] sm:w-[350px] md:w-[350px] lg:w-[450px]">
            <Image
              src="/home/Arrow_2.png"
              alt="Arrow_2.png"
              width="500"
              height="373"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/2 text-left xl:py-[100px]">
          <span className="dmsans300 text-[70px] pr-[5px] pl-[5px] xl:text-[128px]">
            Who
          </span>
          <span className="text-sky-500 text-[34px] pr-[5px] xl:text-[70px] ">
            We
          </span>
          <span className="text-[20px] xl:text-[34px] font-bold">Are?</span>
          <p className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            eSaviour Limited is an industry leader in the digital marketing
            sector and offers B2B enterprises a wide range of services that help
            them dominate international markets
          </p>
          <p className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            Our specialty lies in the novelty experience we offer to our clients
            and partners. We are fixated on staying transparent in our work and
            communication, willing to negotiate on the best deals you’ll find in
            the market today and habituated to producing the most sustained
            results for you.
          </p>
          <p className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            We confidently assure you of a proper blend of innovation,
            professionalism, expertise and productivity in our projects. All we
            need now is your trust to complete the recipe and create magic
            together!
          </p>

          <button className="btn btn-sm btn-danger rounded-none my-[20px] bg-[#000000] text-white font-medium ml-[10px]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeIntro;
