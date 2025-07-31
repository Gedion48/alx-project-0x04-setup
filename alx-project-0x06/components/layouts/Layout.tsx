import React from "react";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-semibold">ALX Layout</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-white text-center py-4 mt-10 shadow-inner">
        &copy; 2025 ALX
      </footer>
    </div>
  );
};

export default Layout;
