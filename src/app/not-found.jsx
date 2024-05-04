import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";

const PageNotFound = () => {
  return (
    <>
      <div className="w-[98vw] mx-auto">
        <Navbar />
        <h1>The page you are requesting for is not available right now</h1>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer1 />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
