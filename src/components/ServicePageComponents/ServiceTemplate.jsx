import Image from "next/image";
import Link from "next/link";

import "./ServiceShadow.css";

const ServiceTemplate = () => {
  return (
    <>
      {/* ============ Service item 1 starts =============== bg-[#f4faff] */}
      <div className="w-[90vw] mx-auto xl:w-[80vw] bg-[#f4faff] xl:mx-auto mb-[35px] myPoppinsFont myShadowDiv">
        <div className="relative top-0 left-0">
          <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
            Amazon FBa
          </h1>
          <p className="text-[11px] px-[3%] text-justify xl:text-[16px] xl:text-center xl:px-[25%] xl:pb-[20px] myPoppinsFont">
            Unlock the full potential of your brand with our comprehensive
            digital marketing services. We specialize in crafting engaging
            online experiences to elevate your brand presence and drive
            measurable results. Our tailored strategies encompass:
          </p>
          <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
            <Image
              src="/ServicePage/Service_Watermark.png"
              alt="Service_Watermark.png"
              width="190"
              height="163"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row flex-wrap">
          <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px] overflow-hidden">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
              <Image
                src="/ServicePage/Amazon_FBA.png"
                alt="Amazon_FBA.png"
                className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                width="422"
                height="372"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="basis-1/1 xl:basis-3/5">
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Market Mastery:</span>
                &nbsp;Navigate the complexities of Amazon’s marketplace with our
                in-depth understanding, optimizing your product listings for
                maximum visibility.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  FBA Optimization:
                </span>
                Fine-tune your fulfillment strategy. We analyze and optimize
                your FBA processes, ensuring efficiency and cost-effectiveness.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Strategic Planning:
                </span>
                Craft a roadmap for success. Our consultants work closely with
                you to develop a customized strategy, from inventory management
                to advertising campaigns.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Performance Analysis:
                </span>
                Gain a competitive edge through data-driven decisions. We
                conduct thorough performance analyses to identify areas of
                improvement and capitalize on strengths.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Adaptability:</span>
                Stay ahead in the ever-evolving e-commerce landscape. Our
                consultancy adapts strategies to align with market trends and
                Amazon’s dynamic platform changes.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                Partner with us for unparalleled Amazon FBA consultancy, and
                propel your business towards sustainable growth and
                profitability.
              </p>
            </div>
            <Link href="/service-FBA">
              <div className="relative top-0 left-0 h-[50px]">
                <div className="absolute right-0 bottom-0">
                  <Image
                    src="/ServicePage/Right_Down_Arrow.png"
                    alt="Right_Down_Arrow"
                    className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                    width="105"
                    height="103"
                    layout="responsive"
                  ></Image>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ============ Service item 2 starts =============== */}
      <div className="w-[90vw] mx-auto xl:w-[80vw] bg-[#f4faff] xl:mx-auto mb-[35px] myPoppinsFont myShadowDiv">
        <div className="relative top-0 left-0">
          <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
            Digital Marketing
          </h1>
          <p className="text-[11px] px-[3%] text-justify xl:text-[16px] xl:text-center xl:px-[25%] xl:pb-[20px] myPoppinsFont">
            Unlock the full potential of your brand with our comprehensive
            digital marketing services. We specialize in crafting engaging
            online experiences to elevate your brand presence and drive
            measurable results. Our tailored strategies encompass:
          </p>
          <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
            <Image
              src="/ServicePage/Service_Watermark.png"
              alt="Service_Watermark.png"
              width="190"
              height="163"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row flex-wrap">
          <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px] overflow-hidden">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
              <Image
                src="/ServicePage/Digital_Marketing.png"
                alt="Digital_Marketing.png"
                className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                width="410"
                height="375"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="basis-1/1 xl:basis-3/5">
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Strategic SEO:</span>
                 Boost your website’s visibility and rank higher on search
                engines, increasing organic traffic.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  {" "}
                  Targeted Social Media Campaigns:
                </span>
                Connect with your audience on platforms that matter, leveraging
                compelling content and strategic ad placements.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Content Marketing:
                </span>
                  Create a lasting impression with valuable, shareable content
                that establishes your brand as an industry authority.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Performance Analysis:
                </span>
                Gain a competitive edge through data-driven decisions. We
                conduct thorough performance analyses to identify areas of
                improvement and capitalize on strengths.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Data-Driven Analytics:
                </span>
                Gain actionable insights into campaign performance, allowing for
                continuous optimization and improved ROI.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Email Marketing:</span>
                Nurture customer relationships through personalized and targeted
                email campaigns that drive conversions.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                Partner with us for unparalleled Amazon FBA consultancy, and
                propel your business towards sustainable growth and
                profitability.
              </p>
            </div>
            <div className="relative top-0 left-0 h-[50px]">
              <div className="absolute right-0 bottom-0">
                <Image
                  src="/ServicePage/Right_Down_Arrow.png"
                  alt="Right_Down_Arrow"
                  className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                  width="105"
                  height="103"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Service item 3 starts =============== */}
      <div className="w-[90vw] mx-auto xl:w-[80vw] bg-[#f4faff] xl:mx-auto mb-[35px] myPoppinsFont myShadowDiv">
        <div className="relative top-0 left-0">
          <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
            Graphics Design
          </h1>
          <p className="text-[11px] px-[3%] text-justify xl:text-[16px] xl:text-center xl:px-[25%] xl:pb-[20px] myPoppinsFont">
            Elevate Your Brand and transform your vision into visually stunning
            designs with our Graphics Design service.
          </p>
          <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
            <Image
              src="/ServicePage/Service_Watermark.png"
              alt="Service_Watermark.png"
              width="190"
              height="163"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row flex-wrap">
          <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px] overflow-hidden">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
              <Image
                src="/ServicePage/Graphics_Design.png"
                alt="Graphics_Design"
                className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                width="428"
                height="372"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="basis-3/5">
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Versatility at Its Best:
                </span>
                From sleek and modern to bold and vibrant, we offer a diverse
                range of styles tailored to your brand identity.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Creative Excellence:
                </span>
                Our skilled designers bring a perfect blend of creativity and
                strategic thinking to every project, ensuring not just visual
                appeal but effective communication.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Pixel-Perfect Precision:
                </span>
                Attention to detail is our forte—expect nothing less than
                flawless, high-resolution designs that leave a lasting
                impression.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Comprehensive Solutions:
                </span>
                Whether you need striking logos, compelling marketing materials,
                or engaging social media assets, we’ve got you covered.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Collaborative Process:
                </span>
                We value your input. Our collaborative approach ensures your
                ideas are seamlessly integrated, resulting in designs that truly
                reflect your brand essence.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                Choose our Graphics Design service for a visual journey that
                captivates, communicates, and ultimately propels your brand to
                new heights.
              </p>
            </div>
            <div className="relative top-0 left-0 h-[50px]">
              <div className="absolute right-0 bottom-0">
                <Image
                  src="/ServicePage/Right_Down_Arrow.png"
                  alt="Right_Down_Arrow"
                  className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                  width="105"
                  height="103"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Service item 4 starts =============== bg-[#f4faff] */}
      <div className="w-[90vw] bg-[#f4faff] mx-auto mb-[0px] xl:w-[80vw] xl:mx-auto xl:mb-[35px] myPoppinsFont myShadowDiv">
        <div className="relative top-0 left-0">
          <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
            Web Development
          </h1>
          <p className="text-[11px] px-[3%] text-justify xl:text-[16px] xl:text-center xl:px-[25%] xl:pb-[20px] myPoppinsFont">
            Elevate your online presence with our top-notch Web Development
            Service. Our skilled team crafts responsive and visually stunning
            websites tailored to your unique brand identity. We prioritize user
            experience, ensuring seamless navigation for your audience. From
            e-commerce platforms to informative corporate sites, we excel in
            diverse web solutions.
          </p>
          <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
            <Image
              src="/ServicePage/Service_Watermark.png"
              alt="Service_Watermark.png"
              width="190"
              height="163"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row flex-wrap">
          <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px]">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
              <Image
                src="/ServicePage/Web_Development.png"
                alt="Web_Development"
                className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                width="420"
                height="372"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="basis-3/5">
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Customization :</span>
                Tailored websites reflecting your brand personality.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Creative Excellence:
                </span>
                Our skilled designers bring a perfect blend of creativity and
                strategic thinking to every project, ensuring not just visual
                appeal but effective communication.
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Responsive Design:
                </span>
                Ensuring a seamless experience across devices for a broader
                audience reach.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  Cutting-Edge Technology:
                </span>
                Utilizing the latest web development tools and frameworks for
                optimal performance.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  User-Friendly Interface:
                </span>
                Intuitive layouts and navigation enhancing visitor engagement.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Scalability:</span>
                Future-proof solutions that grow with your business.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">
                  SEO Optimization:
                </span>
                Enhancing visibility and driving organic traffic.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold">Security:</span>
                Robust measures to safeguard your data and user information.
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="myPoppinsFont text-[11px] px-[10px] py-[5px] xl:text-[16px] xl:pr-[30px] xl:pb-[5px]">
                Transform your digital presence with our Web Development
                Service, where innovation meets functionality.
              </p>
            </div>
            <div className="relative top-0 left-0 h-[50px]">
              <div className="absolute right-0 bottom-0">
                <Image
                  src="/ServicePage/Right_Down_Arrow.png"
                  alt="Right_Down_Arrow.png"
                  className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                  width="105"
                  height="103"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTemplate;
