import useSWR from "swr";
import { fetcher } from "./lib/fetcher";

function App() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`${import.meta.env.VITE_BACKEND_API_URL}/products`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading products...</div>;

  return (
    <>
      <h1>Clothify-Endi</h1>
      <ul>
        {products.map((product: any) => {
          return (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} width={300} />
              <h2>{product.name}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
