import SidebarLayout from "@/components/shared/SidebarLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Home = () => {
  return (
    <div className="">
      <SidebarProvider>
        <SidebarLayout />
        <SidebarTrigger />

        <div className="bg-[#fff] h-[calc(90vh)] w-10/12 rounded-2xl mt-[5vh] mx-auto"></div>
      </SidebarProvider>
    </div>
  );
};

export default Home;
