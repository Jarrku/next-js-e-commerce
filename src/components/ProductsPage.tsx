import "twin.macro";
import ProductCard from "./ProductCard";

function ProductsPage({ products }: any) {
  return (
    <div tw="container mx-auto px-6">
      <h3 tw="text-gray-700 text-2xl font-medium">Juices</h3>
      <span tw="mt-3 text-sm text-gray-500">The Juicy bits.</span>
      <div tw="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product: any) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
