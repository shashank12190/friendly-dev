import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/details";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`,
  );

  if (!res.ok) throw new Response("Project Not Found", { status: 404 });

  const json: StrapiResponse<StrapiProject> = await res.json();

  const item = json.data[0];

  let imageUrl = "/images/no-image.png";
  if (Array.isArray(item.image) && item.image[0]?.url) {
    imageUrl = `${import.meta.env.VITE_STRAPI_URL}${item.image[0].url}`;
  } else if (typeof item.image === "string") {
    imageUrl = item.image;
  }

  const project: Project = {
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

  return { project };
}

const ProjectDetailPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;
  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back To Projects
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-gray-300 mb-4">
            {new Date(project.date).toLocaleDateString()} + {project.category}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Live Site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
