import { Outlet } from "react-router-dom";

import { HeaderAdvertising } from "@/components/headerAdvertising/ui/HeaderAdvertising.tsx";
import { Header } from "@/components/header/ui/Header.tsx";
import { Footer } from "@/components/footer/ui/Footer.tsx";

export default function MainLayout() {
  return (
    <>
      <div
        className="global-top"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <HeaderAdvertising />
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
