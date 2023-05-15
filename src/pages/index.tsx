import { getAllProducts } from "../api/products";
import { List } from "../components/Product/List";
import { Cart } from "../components/Product/Cart";
import { Header } from "@/components/Header";
import Slider from "@/components/Slider";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { TItemProduct, TProducts } from "@/types/Product";
import { Layout } from "@/layout/Layout";

export default function Product({ product }: { product: TProducts }) {
  return (
    <>
      <Layout title="pageProduct">
        {product.products.map((product: TItemProduct) => {
          return <Cart key={product.id} {...product} />;
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
