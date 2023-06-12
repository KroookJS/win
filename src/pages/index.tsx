import { getAllProducts } from "../api/products";
import { IPost } from "@/types/Post";
import { Layout, TitleHot } from "@/layout/Layout";

import { CartPost } from "@/components/Cart/CartPost";
import { RenderImgCategory } from "@/components/Categories/RenderImgCategory";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";

export default function Product({ posts }: { posts: IPost[] }) {
  return (
    <>
      <Layout title="pageProduct">
        <TitleHot>Top Hot Week</TitleHot>

        <RenderImgCategory />
        <ButtonCategotyes />
        <TitleHot>
          Подборка Для Вас
        </TitleHot>
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
