import AdminSidebar from "@/components/admin-components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <section>
      <div className="w-[98vw] mx-auto">
        <div className="flex flex-row flex-wrap items-center h-screen">
          <div className="basis-1/5 border h-2/3 screen bg-[#000080]">
            <AdminSidebar />
          </div>
          <div className="basis-4/5 border">{children}</div>
        </div>
      </div>
    </section>
  );
}
