import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  const now = new Date().toISOString();

  if (typeof window === "undefined") {
    console.log("Server Renders At:", now);
  } else {
    console.log("Client Hydration At:", now);
  }
  return <>My App</>;
}
