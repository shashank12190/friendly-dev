import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProp = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProp) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200 mt-8">
        ✨ Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
