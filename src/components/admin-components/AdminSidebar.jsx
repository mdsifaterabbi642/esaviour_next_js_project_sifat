import Link from "next/link";
import styles from "@/components/admin-components/AdminSidebar.module.css";

const AdminSidebar = () => {
  return (
    <div className="text-center relative top-[50%] left-0 translate-y-[-50%]">
      <div className="flex flex-col flex-wrap items-center gap-5">
        <div
          className={`w-[150px] bg-purple-700 relative top-0 left-0 ${styles.mainDiv}`}
        >
          <Link
            href="/admin/home"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Home
          </Link>
          <div
            className={`absolute top-0 left-[100%] bg-slate-600 py-[50px] text-white w-[200px] ${styles.subDiv}`}
          >
            <div className="flex flex-col flex-wrap items-center gap-5">
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/hero"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Hero
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/banner"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Banner
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/intro"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Home Intro
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/tabcontext"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Tab Context
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/servicecard"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Service Card
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/homeclient"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Clients
                </Link>
              </div>
              <div className="w-[150px] bg-purple-700">
                <Link
                  href="/admin/home/footer"
                  className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
                >
                  Footer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/about"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            About
          </Link>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/contact"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Contact
          </Link>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/blog"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Blog
          </Link>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/portfolio"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Portfolio
          </Link>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/service"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Service
          </Link>
        </div>
        <div className="w-[150px] bg-purple-700">
          <Link
            href="/admin/heros"
            className="text-white hover:bg-orange-500 w-[150px] py-[10px] transition duration-300 ease-linear block"
          >
            Heros
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
