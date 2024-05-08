import Image from "next/image";

const AboutSection_6 = () => {
  return (
    <>
      {/* ============ For large and extra large device only =================*/}
      <div className="w-[100vw] my-[50px] bg-[#40b0fd] relative top-0 left-0 hidden lg:block xl:block">
        <div className="absolute bottom-[25px] left-0 xl:w-[350px] xl:h-[300px]">
          <Image
            src="/AboutPageLogos/About_Mask_4.png"
            alt="About_Mask_4.png"
            width="410"
            height="383"
            layout="responsive"
          ></Image>
        </div>
        <div className="flex lg:flex-row xl:flex-row flex-wrap gap-3 w-[90vw] mx-auto">
          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white"></div>
            <div>
              <p className=""></p>
            </div>
            <div className=" bg-[#40b0fd] xl:mt-[50px]">
              <h1 className="text-white lg:text-[28px] lg:font-bold xl:text-[36px] xl:font-semibold xl:px-[20px]">
                Our Values
              </h1>
              <p
                className="text-white lg:text-[18px] xl:text-[22px] xl:px-[20px]"
              >
                A strict set of principles keeps us focused and together that we
                express with the “4 I’s”
              </p>
            </div>
          </div>

          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white text-white">1</div>
            <div>
              <p
                className="text-white xl:text-[22px] xl:font-bold text-center"
              >
                Integrity
              </p>
            </div>
            <div className=" bg-white lg:h-[300px] xl:h-[300px] relative top-0 left-0">
              <p
                className="spacegrotesk500 lg:text-[13px] lg:px-[10px] xl:text-[16px] xl:px-[40px] xl:py-[30px] xl:leading-[20px] text-justify"
              >
                Our clients can expect a 100% transparency from our end and we
                will never disappoint. We have put honesty at the core of our
                inspiration behind building every relationship.
              </p>
              <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/AboutPageLogos/About_Mask_3.png"
                  alt="About_Mask_3"
                  width="146"
                  height="138"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white text-white">2</div>
            <div>
              <p
                className="text-white xl:text-[22px] xl:font-bold text-center"
              >
                Innovation
              </p>
            </div>
            <div className=" bg-white lg:h-[300px] xl:h-[300px] relative top-0 left-0">
              <p
                className="spacegrotesk500 lg:text-[13px] lg:px-[10px] xl:text-[16px] xl:px-[40px] xl:py-[30px] xl:leading-[20px] text-justify"
              >
                To survive in the modern interface, a space for creativity and
                innovation is no longer optional. We pride ourselves in the
                trail-blazing and timeless solutions we generate only for you.
              </p>
              <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/AboutPageLogos/About_Mask_3.png"
                  alt="About_Mask_3"
                  width="146"
                  height="138"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white text-white">3</div>
            <div>
              <p
                className="text-white xl:text-[22px] xl:font-bold text-center"
              >
                Interaction
              </p>
            </div>
            <div className=" bg-white lg:h-[300px] xl:h-[300px] relative top-0 left-0">
              <p
                className="spacegrotesk500 lg:text-[13px] lg:px-[10px] xl:text-[16px] xl:px-[40px] xl:py-[30px] xl:leading-[20px] text-justify"
              >
                Whether you are our client or a partner, be sure to be a part of
                the same body we operate through when we are collaborating. We
                welcome ideas from you as well so the product becomes our near
                and dear.
              </p>
              <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/AboutPageLogos/About_Mask_3.png"
                  alt="About_Mask_3"
                  width="146"
                  height="138"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white text-white">4</div>
            <div className="">
              <p
                className="text-white xl:text-[22px] xl:font-bold text-center"
              >
                Ingenuity
              </p>
              <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/AboutPageLogos/About_Mask_3.png"
                  alt="About_Mask_3"
                  width="146"
                  height="138"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className=" bg-white lg:h-[300px] xl:h-[300px] relative top-0 left-0">
              <p
                className="spacegrotesk500 lg:text-[13px] lg:px-[10px] xl:text-[16px] xl:px-[40px] xl:py-[30px] xl:leading-[20px] text-justify"
              >
                Why should you settle for less when you are paying for something
                so important as your own business? We are our biggest
                competition and we strive for that excellence by setting the bar
                at the highest level possible with every new client.
              </p>
              <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/AboutPageLogos/About_Mask_3.png"
                  alt="About_Mask_3"
                  width="146"
                  height="138"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ For Extra Small, small and medium Devices only ======================= */}
      <div className="w-[100vw] my-[50px] py-[10px] bg-[#40b0fd] lg:hidden">
        <div className="flex flex-col w-[95vw] mx-auto">
          <div className="basis-1/1">
            <div className="py-[5px] mx-auto">
              <div className=" bg-white"></div>
              <div>
                <p className=""></p>
              </div>
              <div className=" bg-[#40b0fd]">
                <h1 className="text-white text-[22px] font-semibold px-[20px] text-center">
                  Our Values
                </h1>
                <p
                  className="dmsans700 text-white text-[14px] sm:text-[16px] px-[20px] font-extralight opacity-70 text-center pb-[10px]"
                >
                  A strict set of principles keeps us focused and together that
                  we express with the “4 I’s”
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row flex-wrap">
              <div className="basis-[47%] mx-auto">
                <div className=" bg-white text-white">1</div>
                <div>
                  <p
                    className="text-white text-[16px] font-bold text-center"
                  >
                    Integrity
                  </p>
                </div>
                <div className=" bg-white h-[250px] relative top-0 left-0">
                  <p
                    className="dmsans700 text-[11px] sm:text-[16px] px-[10px] py-[10px] text-justify"
                  >
                    Our clients can expect a 100% transparency from our end and
                    we will never disappoint. We have put honesty at the core of
                    our inspiration behind building every relationship.
                  </p>
                  <div className="absolute bottom-[-15px] right-[-10px] w-[100px] h-[100px]">
                    <Image
                      src="/AboutPageLogos/About_Mask_3.png"
                      alt="About_Mask_3"
                      width="146"
                      height="138"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="basis-[47%] mx-auto">
                <div className=" bg-white text-white">1</div>
                <div>
                  <p
                    className="text-white text-[16px] font-bold text-center"
                  >
                    Innovation
                  </p>
                </div>
                <div className=" bg-white h-[250px] relative top-0 left-0">
                  <p
                    className="dmsans700 text-[11px] sm:text-[16px] px-[10px] py-[10px] text-justify"
                  >
                    To survive in the modern interface, a space for creativity
                    and innovation is no longer optional. We pride ourselves in
                    the trail-blazing and timeless solutions we generate only
                    for you.
                  </p>
                  <div className="absolute bottom-[-15px] right-[-10px] w-[100px] h-[100px]">
                    <Image
                      src="/AboutPageLogos/About_Mask_3.png"
                      alt="About_Mask_3"
                      width="146"
                      height="138"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="basis-[47%] mx-auto my-[10px]">
                <div className=" bg-white text-white">1</div>
                <div>
                  <p
                    className="text-white text-[16px] font-bold text-center"
                  >
                    Interaction
                  </p>
                </div>
                <div className=" bg-white h-[250px] relative top-0 left-0">
                  <p
                    className="dmsans700 text-[11px] sm:text-[16px] px-[10px] py-[10px] text-justify"
                  >
                    Whether you are our client or a partner, be sure to be a
                    part of the same body we operate through when we are
                    collaborating. We welcome ideas from you as well so the
                    product becomes our near and dear.
                  </p>
                  <div className="absolute bottom-[-15px] right-[-10px] w-[100px] h-[100px]">
                    <Image
                      src="/AboutPageLogos/About_Mask_3.png"
                      alt="About_Mask_3"
                      width="146"
                      height="138"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="basis-[47%] mx-auto my-[10px]">
                <div className=" bg-white text-white">1</div>
                <div>
                  <p
                    className="text-white text-[16px] font-bold text-center"
                  >
                    Ingenuity
                  </p>
                </div>
                <div className=" bg-white h-[250px] relative top-0 left-0">
                  <p
                    className="dmsans700 text-[11px] sm:text-[16px] px-[10px] py-[10px] text-justify"
                  >
                    Why should you settle for less when you are paying for
                    something so important as your own business? We are our
                    biggest competition and we strive for that excellence by
                    setting the bar at the highest level possible with every new
                    client.
                  </p>
                  <div className="absolute bottom-[-15px] right-[-10px] w-[100px] h-[100px]">
                    <Image
                      src="/AboutPageLogos/About_Mask_3.png"
                      alt="About_Mask_3"
                      width="146"
                      height="138"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_6;
