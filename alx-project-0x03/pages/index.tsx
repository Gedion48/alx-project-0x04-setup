import React from "react";
import { PageRouteProps, HeroSectionProps } from "@/interface";

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

      <ul className="mt-6">
        {routes.map((route) => (
          <li key={route.path}>{route.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
