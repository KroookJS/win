import { getAllProducts } from "../api/products";
import { IPost } from "@/types/Post";
import { Layout } from "@/layout/Layout";

import { CartPost } from "@/components/Cart/CartPost";


export default function Product({ posts }: { posts: IPost[] }) {
  return (
    <>
      <Layout title="pageProduct">
        {posts ? (
          posts.map((post: IPost) => {
            return <CartPost {...post} key={post._id} />;
          })
        ) : (
          <p>Loading posts...</p>
        )}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getAllProducts();
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
}
