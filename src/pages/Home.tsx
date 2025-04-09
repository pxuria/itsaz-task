import SidebarLayout from "@/components/shared/SidebarLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { IoNotifications } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import SelectBox from "@/components/shared/SelectBox";

const Home = () => {
  const items = ["s"];

  return (
    <main className="w-full">
      <SidebarProvider>
        <SidebarLayout />
        <section className="px-9 w-full mt-8">
          {/* topbar */}
          <div className="flex flex-row items-center justify-between">
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

          <div className="flex items-center justify-between mt-11">
            <SelectBox
              placeholder="انتخاب دسته بندی"
              label="دسته بندی"
              items={items}
            />
          </div>
        </section>
      </SidebarProvider>
    </main>
  );
};

export default Home;
