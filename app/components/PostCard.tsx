import { Link } from "react-router";
import type { PostMetaData } from "~/types";

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(date));

const PostCard = ({ post }: { post: PostMetaData }) => {
  return (
    <article key={post.slug} className="bg-gray-800 p-6 rounded-lg shadow mb-4">
      <h3 className="text-2xl font-semibold text-blue-400">{post.title}</h3>
      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toDateString()}
      </p>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-300 text-sm hover:underline"
      >
        Read More ⟶
      </Link>
    </article>
  );
};

export default PostCard;
