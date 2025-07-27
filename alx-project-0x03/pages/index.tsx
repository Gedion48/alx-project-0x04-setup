import React from "react";
import { HeroSectionProps } from "@/interface";

const Home: React.FC = () => {
  const heroProps: HeroSectionProps = {
    title: "Welcome to ALX Project",
    subtitle: "Organized and Clean Codebase",
  };

  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold">{heroProps.title}</h1>
      <p className="text-lg mt-4">{heroProps.subtitle}</p>
    </section>
  );
};

export default Home;
