import Navbar from "@/components/shared/Navbar";
import { DataProvider } from "@/providers/DataProvider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>
        <DataProvider>
          <>
            <Navbar />
            <div className="p-6">
              <Outlet />
            </div>
          </>
        </DataProvider>
      </div>
    </>
  );
};

export default RootLayout;
