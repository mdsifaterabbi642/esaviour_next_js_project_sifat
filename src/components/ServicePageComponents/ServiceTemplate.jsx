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
          <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
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
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                  Market Mastery:
                </span>{" "}
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Navigate the complexities of Amazon’s marketplace with our
                  in-depth understanding, optimizing your product listings for
                  maximum visibility.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                  FBA Optimization:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  {" "}
                  Fine-tune your fulfillment strategy. We analyze and optimize
                  your FBA processes, ensuring efficiency and
                  cost-effectiveness.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                  Strategic Planning:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  {" "}
                  Craft a roadmap for success. Our consultants work closely with
                  you to develop a customized strategy, from inventory
                  management to advertising campaigns.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]]">
                <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                  Performance Analysis:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Gain a competitive edge through data-driven decisions. We
                  conduct thorough performance analyses to identify areas of
                  improvement and capitalize on strengths.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                  Adaptability:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Stay ahead in the ever-evolving e-commerce landscape. Our
                  consultancy adapts strategies to align with market trends and
                  Amazon’s dynamic platform changes.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
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
          <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
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
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  Strategic SEO:
                </span>
                <span className="text-[15px] md:text-[16px] leading-[18px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                   Boost your website’s visibility and rank higher on search
                  engines, increasing organic traffic.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  {" "}
                  Targeted Social Media Campaigns:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Connect with your audience on platforms that matter,
                  leveraging compelling content and strategic ad placements.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  Content Marketing:
                </span>
                 
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                   Create a lasting impression with valuable, shareable content
                  that establishes your brand as an industry authority.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  Performance Analysis:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Gain a competitive edge through data-driven decisions. We
                  conduct thorough performance analyses to identify areas of
                  improvement and capitalize on strengths.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  Data-Driven Analytics:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Gain actionable insights into campaign performance, allowing
                  for continuous optimization and improved ROI.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold xl:text-[20px]">
                  Email Marketing:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Nurture customer relationships through personalized and
                  targeted email campaigns that drive conversions.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
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
          <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
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
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Versatility at Its Best:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  From sleek and modern to bold and vibrant, we offer a diverse
                  range of styles tailored to your brand identity.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Creative Excellence:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Our skilled designers bring a perfect blend of creativity and
                  strategic thinking to every project, ensuring not just visual
                  appeal but effective communication.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Pixel-Perfect Precision:
                </span>
                <span className="text-justify text-[15px] md:text-[16px] leading-[18px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]d">
                  Attention to detail is our forte—expect nothing less than
                  flawless, high-resolution designs that leave a lasting
                  impression.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Comprehensive Solutions:
                </span>
                <span className="text-justify text-[15px] md:text-[16px] leading-[18px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Whether you need striking logos, compelling marketing
                  materials, or engaging social media assets, we’ve got you
                  covered.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Collaborative Process:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  We value your input. Our collaborative approach ensures your
                  ideas are seamlessly integrated, resulting in designs that
                  truly reflect your brand essence.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
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
          <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
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
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Customization :
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Tailored websites reflecting your brand personality.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Creative Excellence:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Our skilled designers bring a perfect blend of creativity and
                  strategic thinking to every project, ensuring not just visual
                  appeal but effective communication.
                </span>
              </p>
            </div>

            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Responsive Design:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Ensuring a seamless experience across devices for a broader
                  audience reach.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Cutting-Edge Technology:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Utilizing the latest web development tools and frameworks for
                  optimal performance.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  User-Friendly Interface:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Intuitive layouts and navigation enhancing visitor engagement.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Scalability:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Future-proof solutions that grow with your business.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  SEO Optimization:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">Enhancing visibility and driving organic traffic.</span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
              <p className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px]">
                <span className="font-bold xl:font-bold md:text-[16px] xl:text-[20px]">
                  Security:
                </span>
                <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                  Robust measures to safeguard your data and user information.
                </span>
              </p>
            </div>
            <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
              <p className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
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
