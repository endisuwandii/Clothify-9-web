import type { Products } from "~/modules/product/type";
import type { Route } from "./+types/home";
import { ProductsGrid } from "~/modules/product/components/products-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clothify" },
    { name: "description", content: "Merchandise." },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products = await response.json();

  return { products };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="flex justify-center mt-10">
      <ProductsGrid products={products} />
    </div>
  );
}
