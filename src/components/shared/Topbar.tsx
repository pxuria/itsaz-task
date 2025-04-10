import { IoNotifications } from "react-icons/io5";
import { SidebarTrigger } from "../ui/sidebar";
import { LuMail } from "react-icons/lu";

const Topbar = () => {
  return (
    <div className="flex_center_between flex-wrap-reverse gap-4">
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
  );
};

export default Topbar;
