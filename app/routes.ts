import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/home.tsx", [index("./routes/home/index.tsx")]),
  layout("./layouts/auth.tsx", [
    route("login", "./routes/login/index.tsx"),
    route("register", "./routes/register/index.tsx"),
  ]),

  layout("./layouts/dashboard.tsx", [
    route("dashboard", "./routes/dashboard/index.tsx"),
  ]),

  layout("./layouts/main.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    route("blog", "./routes/blog/index.tsx"),
    route("blog/:slug", "./routes/blog/details.tsx"),
    route("projects", "./routes/projects/index.tsx"),
    route("projects/:id", "./routes/projects/details.tsx"),
    route("todos", "./routes/todos/index.tsx"),
    route("api-2", "./routes/api-2/index.tsx"),
    route("*", "./routes/errors/not-found.tsx"),
  ]),
] satisfies RouteConfig;
