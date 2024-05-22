import AdminSidebar from "@/components/admin-components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <section>
      <div className="w-[98vw] mx-auto md:hidden lg:block xl:block">
        <div className="flex lg:flex-row xl:flex-row flex-wrap items-center h-screen">
          <div className="lg:basis-1/5 xl:basis-1/5 border h-2/3 screen bg-[#000080]">
            <AdminSidebar />
          </div>
          <div className="lg:basis-4/5 xl:basis-4/5">{children}</div>
        </div>
      </div>
    </section>
  );
}
