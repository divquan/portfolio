import { ProjectCard, projects } from "@/components/Projects";
import React from "react";
import { space_grotestk } from "@/components/fonts";
const page = () => {
  return (
    <div className="px-4 md:px-6 py-2 md:py-3 flex flex-col gap-7 md:gap-14 my-8">
      <h2
        className={`text-3xl md:text-5xl font-bold ${space_grotestk.className}`}
      >
        Projects
      </h2>
      <div className="flex flex-col gap-7 md:gap-14 my-8">
        {projects.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
