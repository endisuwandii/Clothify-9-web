import type { Products } from "~/modules/product/type";
import type { Route } from "./+types/home";
import { ProductsGrid } from "~/modules/product/components/products-grid";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function RegisterRoute() {
  return <h1>Create New Account </h1>;
}
