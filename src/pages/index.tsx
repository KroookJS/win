import { getAllProducts } from "../api/products";
import { Cart } from "../components/Product/Cart";

import { TItemProduct, TProducts } from "@/types/Product";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";

export default function Product({ product }: { product: TProducts }) {
  return (
    <>
      <Layout title="pageProduct">
        {product.products.map((product: TItemProduct) => {
          return (
            <Link
              key={product.id}
              href={`/details/${product.id}`}
              style={LinkStyle}
            >
              <Cart key={product.id} {...product} />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const product = await getAllProducts("8", "1");
  return {
    props: {
      product,
    },
  };
}
