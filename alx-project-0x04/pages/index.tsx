// pages/index.tsx

import React from "react";
import { PageRouteProps } from "@/interface";

const Home: React.FC = () => {
  const routes: PageRouteProps[] = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <ul className="list-disc pl-5 space-y-2">
        {routes.map((route) => (
          <li key={route.path}>{route.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
