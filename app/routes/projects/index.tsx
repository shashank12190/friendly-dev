import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const json: StrapiResponse<StrapiProject> = await res.json();
  const projects = json.data.map((item) => {
    let imageUrl = "/images/no-image.png";
    if (Array.isArray(item.image) && item.image[0]?.url) {
      imageUrl = `${import.meta.env.VITE_STRAPI_URL}${item.image[0].url}`;
    } else if (typeof item.image === "string") {
      imageUrl = item.image;
    }
    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      image: imageUrl,
      url: item.url,
      date: item.date,
      category: item.category,
      featured: item.featured,
    };
  });
  //   ({
  //   id: item.id,
  //   documentId: item.documentId,
  //   title: item.title,
  //   description: item.description,
  //   image: item.image?.[0].url
  //     ? `${import.meta.env.VITE_STRAPI_URL}${item.image[0].url}`
  //     : "/images/no-image.png",
  //   url: item.url,
  //   date: item.date,
  //   category: item.category,
  //   featured: item.featured,
  // }));
  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  // get unique categories
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((item) => item.category))];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  const projectsPerPage = 6;

  // calculate total pages

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <section>
      <h2 className="text-3xl text-white font-bold mb-8">🚀 Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer hover:bg-blue-600 hover:text-white ${category === selectedCategory ? "bg-blue-600 text-gray-200" : "bg-gray-700 text-gray-200"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* transition duration-300 ease-in-out opacity-100 animate-fade */}
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2"
          // key={`${selectedCategory}-${currentPage}`}
        >
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} key={project.id} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default ProjectsPage;
