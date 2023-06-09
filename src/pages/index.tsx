import { getAllProducts } from "../api/products";
import { Cart } from "../components/Cart/Cart";

import { IPost } from "@/types/Post";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { CartPost } from "@/components/Cart/CartPost";
import { useState } from "react";

export default function Product({ posts }: { posts: IPost[] }) {
  return (
    <>
      <Layout title="pageProduct">
        {posts.map((post: IPost) => {
          return <CartPost {...post} key={post._id} />;
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getAllProducts();
  return {
    props: {
      posts,
    },
  };
}
