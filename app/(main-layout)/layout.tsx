import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import ResponsiveNavbar from "@/components/layout/Navbar/ResponsiveNavbar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen">
      <div className="hidden xl:flex">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <ResponsiveNavbar />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
