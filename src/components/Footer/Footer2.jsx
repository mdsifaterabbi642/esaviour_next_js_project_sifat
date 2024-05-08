import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      {/* Footer2 for extra small and small devices */}
      <div className="flex flex-col flex-wrap md:hidden bg-[#ffffff]">
        <div className="basis-1/1 w-[95vw] mx-auto relative top-[30px] z-50">
          <div className="flex flex-row flex-wrap bg-[#40b0fd]">
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">500+</span>
              <span className="text-sm font-bold text-white">
                Happy Clients
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">27+</span>
              <span className="text-sm font-bold text-white">
                Brains to Support
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">100+</span>
              <span className="text-sm font-bold text-white">
                Websites Developed
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">150+</span>
              <span className="text-sm font-bold text-white">
                Product launched
              </span>
            </div>
          </div>
        </div>
        <div className="basis-1/1 pt-[100px] bg-[#ddf1ff] w-[98vw] mx-auto mt-[-70px]">
          <div className="flex flex-col">
            <div className="basis-1/1 bg-[#ddf1ff]">
              <Image
                src="/footer/Logo.png"
                alt="Logo"
                width="140"
                height="140"
                className="mx-auto w-[140px] py-[30px]"
              ></Image>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <p className="spacegrotesk500 text-[15px] text-justify px-[10px] py-[5px]">
                eSaviour Limited is one of the leading multinational B2B Digital
                Marketing Agencies. We provide digital business development and
                branding services all around the world. Our services include
                Amazon FBA Consultancy, Graphics Design, Web Design and
                Development, Search Engine Optimization (SEO), UI/UX Design,
                Software Development, Mobile Apps Development, and so on.
              </p>
            </div>
            <div className="basis-1/1 py-[10px] bg-[#ddf1ff] w-[98vw] mx-auto">
              <div className="flex flex-row sm:w-[60%] sm:mx-auto">
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-[20px]">Quick Link</span>
                  <ul>
                    <li className="text-[16px] my-[3px] ">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <Link href="/service">Service</Link>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-[20px]">Legal</span>
                  <ul>
                    <li className=" text-[16px] my-[3px]">
                      <Link href="/">privacy Policy</Link>
                    </li>
                    <li className="text-[16px] my-[3px]">
                      <Link href="/">Terms & Conditions</Link>
                    </li>
                    <li className="text-[16px] my-[3px]">
                      <Link href="/">Order Calcellation Policy</Link>
                    </li>
                    <li className=" text-[16px] my-[3px]">
                      <Link href="/">Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
                Lets Get Social
              </h5>
              <div className="flex justify-center">
                <Link
                  className="inline mx-[5px]"
                  href="https://www.facebook.com/eSaviourLTD"
                  target="_blank"
                >
                  <Image
                    src="/footer/Facebook2.png"
                    width="30"
                    height="30"
                    alt="Facebook2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[5px]"
                  href="https://www.instagram.com/esaviourltd/"
                  target="_blank"
                >
                  <Image
                    src="/footer/instagram2.png"
                    width="30"
                    height="30"
                    alt="instagram2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[5px]"
                  href="https://www.linkedin.com/company/esaviour/"
                  target="_blank"
                >
                  <Image
                    src="/footer/Linkedin2.png"
                    width="30"
                    height="30"
                    alt="Linkedin2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[5px]"
                  href="https://www.youtube.com/@eSaviour"
                  target="_blank"
                >
                  <Image
                    src="/footer/youtube2.png"
                    width="30"
                    height="30"
                    alt="youtube2"
                    className="mt-[2px]"
                  ></Image>
                </Link>
              </div>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
                Payment method
              </h5>
              <div className="flex justify-center">
                <Link className="inline mx-[3px]" href="/">
                  <Image
                    src="/footer/visa_logo.png"
                    alt="visa_logo.png"
                    width="40"
                    height="30"
                    className=""
                  ></Image>
                </Link>
                <Link className="inline mx-[3px] pt-[3px]" href="/">
                  <Image
                    src="/footer/master_card.png"
                    alt="master_card.png"
                    width="30"
                    height="30"
                    className=""
                  ></Image>
                </Link>
                <Link className="inline mx-[3px]" href="/">
                  <Image
                    src="/footer/American_express.png"
                    alt="American_express"
                    width="30"
                    height="30"
                    className=""
                  ></Image>
                </Link>
                <Link className="inline mx-[3px]" href="/">
                  <Image
                    src="/footer/Paypal.png"
                    alt="Paypal"
                    width="30"
                    height="20"
                    className="mt-[2px]"
                  ></Image>
                </Link>
                <Link className="inline mx-[3px]" href="/">
                  <Image
                    src="/footer/Payoneer_Logo.png"
                    alt="Payoneer_Logo"
                    width="60"
                    height="30"
                    className="mt-[-10px]"
                  ></Image>
                </Link>
                <Link className="inline mx-[3px]" href="/">
                  <Image
                    src="/footer/wise.png"
                    alt="wise"
                    width="40"
                    height="40"
                    className="pt-[5px]"
                  ></Image>
                </Link>
              </div>
            </div>
            <div className="basis-1/1 border bg-[#000000] text-center pb-[5px]">
              <span className="text-white text-[11px] font-semibold">
                Copyright © 2024 eSaviour Limited | All Right Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* =================== Footer2 for medium and large devices ========================= */}
      <div className="hidden md:block xl:hidden">
        <div className="flex flex-row">
          <div className="basis-1/1 w-[95vw] mx-auto mt-[50px] relative z-50">
            <div className="flex flex-row bg-[#40b0fd]">
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  500+
                </span>
                <span className="text-sm font-bold text-white">
                  Happy Clients
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">27+</span>
                <span className="text-sm font-bold text-white">
                  Brains to Support
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  100+
                </span>
                <span className="text-sm font-bold text-white">
                  Websites Developed
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  150+
                </span>
                <span className="text-sm font-bold text-white">
                  Product launched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============== Only for medium and large devices =================== */}
      <div className="hidden md:block xl:hidden">
        <div className="flex flex-row mt-[-40px]">
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#ddf1ff] pt-[50px]">
                <Image
                  src="/footer/Logo.png"
                  alt="Logo"
                  width="120"
                  height="120"
                  className="mx-auto w-[120px] py-[10px]"
                ></Image>
              </div>
              <div className="basis-1/1 bg-[#ddf1ff]">
                <p className="spacegrotesk600 text-[15px] text-left px-[20px] py-[30px]">
                  eSaviour Limited is one of the leading multinational B2B
                  Digital Marketing Agencies. We provide digital business
                  development and branding services all around the world. Our
                  services include Amazon FBA Consultancy, Graphics Design, Web
                  Design and Development, Search Engine Optimization (SEO),
                  UI/UX Design, Software Development, Mobile Apps Development,
                  and so on.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] bg-[#ddf1ff]">
            <span className="spacegrotesk700 text-[20px]">Quick Link</span>
            <ul>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="/">Home</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="/service">Service</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="/about">About Us</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] bg-[#ddf1ff]">
            <span className="spacegrotesk700 text-[20px] text-left">Legal</span>
            <ul>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="#">privacy Policy</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="#">Order Calcellation Policy</Link>
              </li>
              <li className="spacegrotesk500 text-[14px] my-[3px]">
                <Link href="#">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[10px] bg-[#ddf1ff]">
            <h5 className="spacegrotesk700 text-[18px] text-left">Lets Get Social</h5>
            <div className="flex justify-center">
              <Link
                className="inline mr-[3px]"
                href="https://www.facebook.com/eSaviourLTD"
                target="_blank"
              >
                <Image
                  src="/footer/Facebook2.png"
                  alt="Facebook2"
                  width="40"
                  height="40"
                ></Image>
              </Link>
              <Link
                className="inline mx-[3px]"
                href="https://www.instagram.com/esaviourltd/"
                target="_blank"
              >
                <Image
                  src="/footer/instagram2.png"
                  alt="instagram2"
                  width="40"
                  height="40"
                ></Image>
              </Link>
              <Link
                className="inline mx-[3px]"
                href="https://www.linkedin.com/company/esaviour/"
                target="_blank"
              >
                <Image
                  src="/footer/Linkedin2.png"
                  alt="Linkedin2"
                  width="40"
                  height="40"
                ></Image>
              </Link>
              <Link
                className="inline mx-[3px]"
                href="https://www.youtube.com/@eSaviour"
                target="_blank"
              >
                <Image
                  src="/footer/youtube2.png"
                  alt="youtube2"
                  width="40"
                  height="40"
                  className="mt-[2px]"
                ></Image>
              </Link>
            </div>
            <h5 className="spacegrotesk700 text-[18px] text-left">
              Payment method
            </h5>
            <div className="flex justify-start">
              <Link className="inline mr-[3px]" href="#">
                <Image
                  src="/footer/visa_logo.png"
                  alt="visa_logo.png"
                  width="40"
                  height="40"
                  className=""
                ></Image>
              </Link>
              <Link className="inline mx-[3px] pt-[3px]" href="#">
                <Image
                  src="/footer/master_card.png"
                  alt="master_card.png"
                  width="30"
                  height="30"
                  className=""
                ></Image>
              </Link>
              <Link className="inline mx-[3px] mt-[-5px]" href="#">
                <Image
                  src="/footer/American_express.png"
                  alt="American_express"
                  width="25"
                  height="25"
                  className="pt-[5px]"
                ></Image>
              </Link>
              <Link className="inline mx-[3px] mt-[-5px]" href="#">
                <Image
                  src="/footer/Paypal.png"
                  alt="Paypal.png"
                  width="35"
                  height="35"
                  className="pt-[10px]"
                ></Image>
              </Link>
            </div>
            <div className="flex justify-start">
              <Link className="inline mx-[3px]" href="#">
                <Image
                  src="/footer/Payoneer_Logo.png"
                  alt="Payoneer_Logo"
                  width="50"
                  height="50"
                  className="mt-[-5px]"
                ></Image>
              </Link>
              <Link className="inline mx-[3px]" href="3">
                <Image
                  src="/footer/wise.png"
                  alt="wise"
                  width="40"
                  height="40"
                  className="mt-[10px]"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="basis-1/1 bg-[#000000] pb-[10px] text-center xl:w-[70vw] xl:mx-auto">
            <span className="text-white text-[11px] font-semibold ">
              Copyright © 2024 eSaviour Limited | All Right Reserved
            </span>
          </div>
        </div>
      </div>

      {/* =================== Footer2 for xl devices ========================= */}
      <div className="hidden xl:block xl:w-[50vw] xl:mx-auto  ">
        <div className="flex flex-row">
          <div className="basis-1/1 w-[80vw] mx-auto mt-[50px] relative z-50">
            <div className="flex flex-row bg-[#40b0fd]">
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  500+
                </span>
                <span className="text-sm font-bold text-white">
                  Happy Clients
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">27+</span>
                <span className="text-sm font-bold text-white">
                  Brains to Support
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  100+
                </span>
                <span className="text-sm font-bold text-white">
                  Websites Developed
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  150+
                </span>
                <span className="text-sm font-bold text-white">
                  Product launched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== Only for extra large devices ========================= bg-[#ddf1ff] */}
      <div className="hidden xl:block xl:w-[98vw] mx-auto bg-[#ddf1ff] relative top-0 left-0">
        {/*  ================= Water mark ===================== */}
        <div className="absolute top-0 left-0 w-[50vw] h-[100%] hidden lg:block xl:block overflow-hidden">
          <Image src="/footer/xl_home_water_1.png" width="600" height="400" alt="xl_home_water_1" className=""></Image>
        </div>
        <div className="hidden xl:block xl:w-[70vw] xl:mx-auto">
          <div className="flex flex-row mt-[-50px]">
            <div className="basis-2/5">
              <div className="flex flex-col">
                <div className="basis-1/1 bg-[#ddf1ff] pt-[30px]">
                  <Image
                    src="/footer/Logo.png"
                    alt="Logo"
                    width="120"
                    height="80"
                    className="mx-auto w-[120px] pt-[50px]"
                  ></Image>
                </div>
                <div className="basis-1/1 bg-[#ddf1ff]">
                  <p
                    className="spacegrotesk500 text-[16px] text-left px-[0px] pr-[50px] pt-[20px] pb-[20px]"
                    
                  >
                    eSaviour Limited is one of the leading multinational B2B
                    Digital Marketing Agencies. We provide digital business
                    development and branding services all around the world. Our
                    services include Amazon FBA Consultancy, Graphics Design,
                    Web Design and Development, Search Engine Optimization
                    (SEO), UI/UX Design, Software Development, Mobile Apps
                    Development, and so on.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] xl:pt-[85px] bg-[#ddf1ff] relative">
              <span className="font-book text-xl block pb-[15px] font-bold">
                Quick Link
              </span>
              <ul>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="/service">Service</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px]  xl:text-[16px]"
                  
                >
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="/about">About Us</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                 
                >
                  <Link href="/blog">Blog</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px]  xl:text-[16px]"
                 
                >
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px] font-bold">
                Legal
              </span>
              <ul>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                 
                >
                  <Link href="#">privacy Policy</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="#">Order Calcellation Policy</Link>
                </li>
                <li
                  className="font-semibold text-[18px] my-[3px] xl:text-[16px]"
                  
                >
                  <Link href="#">Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[10px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px] font-bold">
                Lets Get Social
              </span>
              <div className="flex justify-start">
                <Link
                  className="inline mr-[3px]"
                  href="https://www.facebook.com/eSaviourLTD"
                  target="_blank"
                >
                  <Image
                    src="/footer/Facebook2.png"
                    width="30"
                    height="30"
                    alt="Facebook2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[3px]"
                  href="https://www.instagram.com/esaviourltd/"
                  target="_blank"
                >
                  <Image
                    src="/footer/instagram2.png"
                    width="30"
                    height="30"
                    alt="instagram2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[3px]"
                  href="https://www.linkedin.com/company/esaviour/"
                  target="_blank"
                >
                  <Image
                    src="/footer/Linkedin2.png"
                    width="30"
                    height="30"
                    alt="Linkedin2"
                  ></Image>
                </Link>
                <Link
                  className="inline mx-[3px]"
                  href="https://www.youtube.com/@eSaviour"
                  target="_blank"
                >
                  <Image
                    src="/footer/youtube2.png"
                    alt="youtube2"
                    width="30"
                    height="30"
                    className="mt-[2px]"
                  ></Image>
                </Link>
              </div>
              <span className="font-book text-xl block py-[15px] font-bold">
                Payment method
              </span>

              <div className="flex justify-start w-[90%]">
                <Link className="inline mr-[3px]" href="#">
                  <Image
                    src="/footer/visa_logo.png"
                    alt="visa_logo.png"
                    width="35"
                    height="35"
                    className=""
                  ></Image>
                </Link>
                <Link className="inline mx-[3px] pt-[3px]" href="#">
                  <Image
                    src="/footer/master_card.png"
                    alt="master_card.png"
                    width="35"
                    height="35"
                    className=""
                  ></Image>
                </Link>
                <Link className="inline mx-[3px] mt-[-5px]" href="#">
                  <Image
                    src="/footer/American_express.png"
                    alt="American_express"
                    width="35"
                    height="35"
                    className="pt-[5px]"
                  ></Image>
                </Link>
                <Link className="inline mx-[3px] mt-[-5px]" href="#">
                  <Image
                    src="/footer/Paypal.png"
                    alt="Paypal.png"
                    width="35"
                    height="35"
                    className="pt-[10px]"
                  ></Image>
                </Link>

                <Link className="inline mx-[3px]" href="#">
                  <Image
                    src="/footer/Payoneer_Logo.png"
                    alt="Payoneer_Logo"
                    width="35"
                    height="35"
                    className="mt-[-5px]"
                  ></Image>
                </Link>
                <Link className="inline mx-[3px]" href="#">
                  <Image
                    src="/footer/wise.png"
                    alt="wise"
                    width="35"
                    height="35"
                    className="mt-[10px]"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
