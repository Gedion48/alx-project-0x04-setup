// pages/index.tsx

import React from "react";
import { HeroSectionProps, PageRouteProps } from "@/interface";

const Home: React.FC = () => {
  const heroProps: HeroSectionProps = {
    title: "Welcome to ALX Project",
    subtitle: "Organized and Clean Codebase",
  };


  const routes: PageRouteProps[] = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
  ];

  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold">{heroProps.title}</h1>
      <p className="text-lg mt-4">{heroProps.subtitle}</p>

      <ul className="mt-6 space-y-2">
        {routes.map((route) => (
          <li key={route.path} className="text-blue-600">
            {route.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
