import Image from "next/image";

const AboutFAQSection = () => {
  return (
    <>
      <div className="mt-[40px] mb-[40px]">
        <h1 className="text-center xl:text-[36px] font-bold">
          Frequently Asked Questions{" "}
          <span className="text-[#40b0fd]">(FAQs)</span>
        </h1>
        <p
          className="text-center xl:text-[24px] font-semibold"
          style={{
            fontFamily: "Futura PT, sans-serif",
          }}
        >
          We believe in two-ways communication with our clients to ensure the
          most successful campaign between us.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row flwx-wrap w-[80vw] mx-auto">
        <div className="basis-1/1 xl:basis-2/5">
          <div className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto lg:my-[60px]">
            <Image
              src="/AboutPageLogos/FAQs.png"
              alt="FAQs"
              width="429"
              height="383"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 xl:basis-3/5">
          <div className="w-[90%] mx-auto mt-[20px]">
            <div className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                <span className="font-bold xl:text-2xl">Q.</span> Why should we
                choose your company over others in the market?
              </div>
              <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                <p
                  className=" text-[13px] xl:text-[16px] xl:font-medium"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  A. We are not just another service provider as many of the
                  agencies in the contemporary market. We have trained
                  professionals who are willing to become your strategic
                  partners. We will shadow your every step from planning to
                  execution till you have a face to show in the global digital
                  and e-commerce platforms. This commitment to excellence and
                  client-oriented business management practices sets us apart
                  from the rest of our competitors.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                <span className="font-bold xl:text-2xl">Q.</span> How do you
                keep up with the latest trends in digital marketing?
              </div>
              <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                <p
                  className=" text-[13px] xl:text-[16px] xl:font-medium"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  A. Staying updated is a precondition of survival in this
                  industry. We are well-invested in continuous learning, regular
                  training and forum participation, which puts us at the top of
                  every new trend in the business
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                <span className="font-bold text-[13px] xl:text-2xl">Q.</span>{" "}
                Can you handle both small businesses and larger enterprises?
              </div>
              <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                <p
                  className=" text-[13px] xl:text-[16px] xl:font-medium"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  A. Yes, absolutely. Our customized solutions are highly
                  scalable to meet your unique goals whether you’re a startup or
                  an industry giant
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                <span className="font-bold  xl:text-2xl">Q.</span> What makes
                your Amazon FBA consultancy stand out?
              </div>
              <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                <p
                  className="text-[13px] xl:text-[16px] xl:font-medium"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  A. Our FBA consultancy is based on years of practical
                  experience in the market itself, well-researched insights and
                  reports from within the Amazon ecosystem and a tested record
                  of helping businesses succeed prior.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                <span className="font-bold xl:text-2xl">Q.</span> What areas
                does your expertise cover in product design?
              </div>
              <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                <p
                  className=" text-[13px]  xl:text-[16px] xl:font-medium"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  A. When it comes to design, we have experts from various
                  sectors to suit your visual needs such as graphics design,
                  website design and UI/UX design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFAQSection;
