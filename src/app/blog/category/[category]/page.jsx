import BlogData from "@/Data/BlogData";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = ({ params }) => {
  const { category } = params;

  const decodedCategory = decodeURIComponent(category);

  const filteredData = BlogData.filter(
    (item) => item.category === decodedCategory
  );
  console.log(filteredData);

  return (
    <>
      <div className="w-[98vw] mx-auto">
        <Navbar />
        {/* <div>
          <h2>Selected Category: {decodedCategory}</h2>
          {filteredData.map((bp, index) => (
            <div key={index}>{bp?.bodyTitle}</div>
          ))}
        </div> */}
        <div className="flex flex-col flex-wrap">
          <div className="basis-1/1 mt-[10px] xl:mt-[30px]">
            {/* =========== Only for extra small and extra large device ============ */}
            <div className="my-[10px] md:mx-[5px] block sm:hidden md:hidden lg:hidden xl:block">
              <Link href="#">
                <div className="flex flex-wrap gap-[5px]">
                  {filteredData.map((item, index) => (
                    <div
                      className="card xl:w-[266px] bg-[#e8f5ff] shadow-xl"
                      key={index}
                    >
                      <div className="absolute top-[5px] left-[10px] bg-[#40b0fd] text-white text-sm py-[5px] px-[10px] rounded-md">
                        {item.bannerTitle}
                      </div>

                      <div className="max-h-[300px] w-[100%] md:h-[150px] xl:h-[150px] xl:w-[100%] rounded-t-md mb-[20px]">
                        <Image
                          src={item.imageSource}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          layout="responsive"
                        />
                      </div>

                      <div className="card-body pt-[15px] pl-[10px]">
                        <div className="border-b-[1px] border-b-[#40b0fd]">
                          <h2 className="font-extrabold p-0 m-0 md:text-[12px] lg:[12px] xl:text-[18px]">
                            {/* {item.bodyTitle} */}
                            {item.bodyTitle.length > 20
                              ? item.bodyTitle.slice(0, 20) + "..."
                              : item.bodyTitle}
                          </h2>
                        </div>

                        <p
                          className="font-semibold md:text-[14px] xl:text-[14px] xl:pt-[15px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          {/* {item.bodyDescription} */}
                          {item.bodyDescription.length > 50
                            ? item.bodyDescription.slice(0, 50) + "..."
                            : item.bodyDescription}
                        </p>
                        <div className="card-actions justify-start border-b-[1px] border-b-[#40b0fd]">
                          <Link href={`/blog/${item.blogId}`}>
                            <button className="btn btn-sm bg-slate-700 text-white">
                              Read More
                            </button>
                          </Link>
                        </div>
                        <div>
                          <h1
                            className="md:text-[12px] xl:text-[13px] font-bold tracking-widest"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                            }}
                          >
                            {item.blogDate}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
            {/* =========== For small, medium and large device ===================== */}
            <div className="my-[10px] md:mx-[5px] hidden sm:block md:block lg:block xl:hidden">
              <Link href="#">
                <div className="flex flex-wrap gap-[5px]">
                  {filteredData.map((item, index) => (
                    <div key={index}>
                      <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
                        <figure className="sm:w-[50%] md:w-[70%] lg:w-[50%] sm:mx-auto md:mx-auto sm:pt-[5px] md:pt-[5px]">
                          <Image
                            src={item.imageSource}
                            alt={item.alt}
                            width="150"
                            height="150"
                            layout="responsive"
                          />
                        </figure>
                        <div className="card-body">
                          <div className="badge badge-info gap-2">
                            {item.bannerTitle}
                          </div>
                          <h2 className="card-title">{item.bodyTitle}</h2>
                          <p>{item.bodyDescription}</p>
                          <div className="card-actions justify-end">
                            <Link href={`/blog/${item.blogId}`}>
                              <button className="btn btn-sm bg-slate-700 text-white">
                                Read More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
