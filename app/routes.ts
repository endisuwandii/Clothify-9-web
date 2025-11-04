import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout-main.tsx", [
    index("routes/home.tsx"),
    route("/products", "routes/products.tsx"),
    route("/products", "routes/register.tsx"),
    route("/products/:slug", "routes/products-slug.tsx"),
  ]),
] satisfies RouteConfig;
