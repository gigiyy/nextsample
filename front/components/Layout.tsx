import NavLinks from "@/components/NavLinks";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-1/4 h-screen bg-gray-200 p-4 flex flex-col">
        <NavLinks />
      </nav>
      <main className="w-3/4 p-4">{children}</main>
    </div>
  );
};

export default Layout;
