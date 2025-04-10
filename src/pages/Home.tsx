import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "@/hooks/use-Products";
import SelectBox from "@/components/shared/SelectBox";
import SidebarLayout from "@/components/shared/SidebarLayout";
import DashboardTable from "@/components/shared/DashboardTable";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardPagination from "@/components/shared/DashboardPagination";
import { LuMail } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const pathname = location.pathname;
  const searchParams = location.search;
  console.log(pathname);
  console.log(searchParams);

  const limit = 10;
  const skip = (currentPage - 1) * limit;
  const { data, error, isLoading } = useProducts(`limit=${limit}&skip=${skip}`);

  const totalPages = data?.total ? Math.ceil(data.total / limit) : 1;

  return (
    <main className="w-full">
      <SidebarProvider>
        <SidebarLayout />
        <section className="px-9 w-full mt-8">
          {/* topbar */}
          <div className="flex_center_between">
            <div className=" flex items-center gap-2">
              <SidebarTrigger />

              <h1 className="text-[#1e1e6e] font-bold text-lg text-nowrap">
                داشبـورد کاربـر
              </h1>

              <span className="text-sm text-[#1E1E6E] bg-[#E0EEFF] px-4 py-1 rounded font-semibold">
                کارمند
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <button
                className="p-2 rounded-md bg-[rgba(255,123,45,0.3)] cursor-pointer flex items-center justify-center"
                type="button"
              >
                <IoNotifications className="w-5 h-5 text-[#FF7B2D]" />
              </button>

              <button
                className="p-2 rounded-md bg-white outline-1 outline-amber-500 cursor-pointer flex items-center justify-center"
                type="button"
              >
                <LuMail className="w-5 h-5 text-[#FF7B2D]" />
              </button>
            </div>
          </div>

          {/* filters */}
          <div className="flex_center_between mt-11">
            <SelectBox placeholder="انتخاب دسته بندی" label="دسته بندی" />

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-white text-base text-nowrap font-semibold bg-[#FF7B2D] py-2 px-6 rounded min-w-[250px] text-center cursor-pointer"
                onClick={() => console.log("first")}
              >
                اعمال فیلتر
              </button>

              <button
                type="button"
                className="text-white text-base text-nowrap font-semibold bg-[#FF4040] py-2 px-6 rounded min-w-[80px] text-center cursor-pointer"
              >
                حذف فیلتر
              </button>
            </div>
          </div>

          {/* table */}
          <div className="mt-6">
            <DashboardTable
              products={data?.products}
              error={error}
              isLoading={isLoading}
            />
          </div>

          <div className="flex_center_between w-full my-4">
            <div className="">{currentPage}</div>

            <DashboardPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          </div>
        </section>
      </SidebarProvider>
    </main>
  );
};

export default Home;
