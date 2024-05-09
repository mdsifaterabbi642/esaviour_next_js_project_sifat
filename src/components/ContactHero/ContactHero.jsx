import Image from "next/image";

const ContactHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[150px] md:pb-[150px] md:pt-[0px] lg:pb-[150px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[0px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left pt-[20px] sm:text-[26px] md:text-xl lg:text-2xl  md:pt-[50px] md:pl-[5%] md:font-extrabold sm:pl-[5%] xl:pt-[50px] font-bold xl:font-bold xl:pl-[20%] xl:text-[38px] xl:leading-[40px]">
            Connect with eSaviour{`'`}s Your Gateway to Digital Excellence
          </h1>
          <p
            className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:text-[18px] xl:leading-[25px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontStyle: "normal",
            }}
          >
            At eSaviour, were committed to elevating your brands digital
            presence. Whether youre looking to redefine your marketing
            strategy, enhance your online visibility, or require bespoke
            marketing solutions, our team is here to transform your vision into
            reality. Get in touch with us today and take the first step towards
            digital excellence!
          </p>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 mt-[40px] pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <div className="w-[200px] xl:w-[30%]">
            <Image
              src="/ContactIcons/contact.png"
              alt="contact"
              width="287"
              height="283"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
