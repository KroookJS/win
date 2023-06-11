import { getAll, getOneProduct } from "@/api/products";
import { TItemProduct } from "@/types/Product";
import { Info } from "@/components/Info";
import { Header } from "@/components/Header";
import { GetStaticProps } from "next";
import { IPost } from "@/types/Post";

export default function DetailsPage({ post }: { post: IPost }) {
  return (
    <div>
      <Header />
      {post ? <Info {...post} /> : <p>Loading Info...</p>}
    </div>
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAll();

    const paths = data.map((el: IPost) => ({
      params: { id: el._id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params ? context.params.id : "";
    const post = await getOneProduct(String(id));

    if (!post) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        post,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};
